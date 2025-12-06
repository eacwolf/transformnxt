import { useState } from "react";
import type { FormEvent } from "react";
import { init, send } from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
}

const SERVICE_ID = 'service_t8oyfcs';
const TEMPLATE_ID = 'template_g7ew397';
const USER_ID = 'vk_LqzCYRdM2tQ0sc';

// initialize EmailJS with your public user id
init(USER_ID);

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    company: '',
    phone: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        company: formData.company,
        phone: formData.phone,
        jsonAttachment: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
      };

      const result = await send(SERVICE_ID, TEMPLATE_ID, payload);
      console.log('EmailJS send result:', result);
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company: '', phone: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error('Failed to send email:', err);
      // If EmailJS returns a structured error, log response text for debugging
      if ((err as any).text) console.error('EmailJS error text:', (err as any).text);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="bg-zinc-900 text-white text-center py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact TransformNXT</h1>
          <p className="text-md md:text-lg opacity-90 max-w-2xl mx-auto">Get in touch for IT consulting, cloud strategy, software development, AI/ML solutions, or talent programs. We'll respond within 1 business day.</p>
        </div>
      </section>

      {/* Main contact area */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form card */}
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
              <p className="text-gray-600 mb-6">Tell us about your project or the help you need — include a brief description, timelines, and budgets if available.</p>

              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea id="message" name="message" required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help?" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input id="company" name="company" type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div>
                  <button type="submit" disabled={status === 'submitting'} className={`w-full inline-flex items-center justify-center gap-3 py-3 px-5 rounded-lg text-white font-semibold ${status === 'submitting' ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'} transition-colors`}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {status === 'success' && (
                  <div role="status" className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                    Thank you — we received your message and will respond shortly.
                  </div>
                )}

                {status === 'error' && (
                  <div role="alert" className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                    Oops — something went wrong. Please try again or email us directly at <a href="mailto:akhil@transformnxt.in" className="underline">akhil@transformnxt.in</a>.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact details + hours */}
          <aside className="space-y-6 animate-fade-in-up animate-fade-in-up-delay-1">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Contact information</h3>
              <p className="text-gray-700 mb-3">Transformnxt Pvt Ltd<br />No 6/1451 KK Nagar 2nd Street, KR Palayam<br />Erode 638316, Tamilnadu</p>
              <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:akhil@transformnxt.in" className="underline">akhil@transformnxt.in</a></p>
              <p className="text-gray-700"><strong>Phone:</strong> <a href="tel:000000000" className="underline">000000000</a></p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Corporate details</h3>
              <p className="text-gray-700 mb-2"><strong>Office hours:</strong> Mon–Fri, 9:00am–6:00pm IST</p>
              <p className="text-gray-700"><strong>Response time:</strong> Typical reply within 1 business day</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Security & privacy</h3>
              <p className="text-gray-700">We treat your information securely. Messages are used solely to respond to inquiries and may be attached to internal troubleshooting tickets when needed.</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}