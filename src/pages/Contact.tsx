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
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 mt-24">
      {/* Hero Section with margin from navbar */}
      <section className="bg-zinc-900 text-white text-center py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact TransformNXT IT Solutions</h1>
          <p className="text-xl opacity-90">
            Reach out for IT consulting, digital transformation, software development, or any technology needs. Our team is ready to help your business grow with innovative IT solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="How can we help?"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-3 px-6 rounded-xl text-white font-semibold ${
                    status === 'submitting'
                      ? 'bg-gray-400'
                      : 'bg-black hover:bg-gray-800'
                  } transition-colors`}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Company Name</h3>
                  <p className="text-gray-700">Digi Transformnxt Pvt Ltd</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Corporate Identification Number (CIN)</h3>
                  <p className="text-gray-700">U70200TN2025PTC183135</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-gray-700">No 6/1451 KK Nagar 2nd Street KR Palayam Erode 638316, Tamilnadu.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:akhil@transformnxt.in" className="hover:underline">akhil@transformnxt.in</a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-700">
                    <a href="tel:000000000" className="hover:underline">000000000</a>
                  </p>
                </div>
              </div>
            </div>
            {/* You can add more IT-related info or social links here if needed */}
          </div>
        </div>

        {/* No map, clean layout as innoboon.com */}
      </section>
    </div>
  );
}