import { useState, useRef, type FormEvent } from 'react';
import { init, send } from '@emailjs/browser';
import PageContainer from '../components/PageContainer';

// EmailJS configuration
const SERVICE_ID = 'service_t8oyfcs';
const TEMPLATE_ID = 'template_g7ew397';
const USER_ID = 'vk_LqzCYRdM2tQ0sc';

// Initialize EmailJS
init(USER_ID);

interface FormStatus {
  type: 'success' | 'error';
  message: string;
}

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<FormStatus | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!formRef.current || !fileInputRef.current?.files?.[0]) {
        throw new Error('Please fill all required fields including your resume');
      }

      const file = fileInputRef.current.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'File size should not exceed 5MB'
        });
        setIsSubmitting(false);
        return;
      }

      // Convert file to base64
      const base64File = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const formData = new FormData(formRef.current);

      const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        position: formData.get('position'),
        resume: base64File,
        filename: file.name,
        jsonAttachment: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          position: formData.get('position'),
          filename: file.name,
          timestamp: new Date().toISOString()
        })
      };

      const result = await send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS result:', result);
      setSubmitStatus({
        type: 'success',
        message: 'Your application has been submitted successfully! We will get back to you soon.'
      });
      formRef.current?.reset();
    } catch (error) {
      console.error('Failed to send application:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your application. Please try again or email us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <div className="space-y-8 animate-fade-in-up">
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our team of passionate IT professionals and help shape the future of digital transformation. 
            We value innovation, collaboration, and continuous learning.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Current Openings</h3>
          <ul className="text-left text-gray-700 space-y-4">
            <li><span className="font-semibold">Software Engineer (React/Node.js)</span> – 2+ years experience</li>
            <li><span className="font-semibold">Cloud Solutions Architect</span> – 5+ years experience</li>
            <li><span className="font-semibold">AI/ML Engineer</span> – 3+ years experience</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">Apply Now</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                Position Applied For *
              </label>
              <select
                name="position"
                id="position"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">Select a position</option>
                <option value="Software Engineer (React/Node.js)">Software Engineer (React/Node.js) – 2+ years experience</option>
                <option value="Cloud Solutions Architect">Cloud Solutions Architect – 5+ years experience</option>
                <option value="AI/ML Engineer">AI/ML Engineer – 3+ years experience</option>
              </select>
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Resume/CV *
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                ref={fileInputRef}
                required
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="mt-1 text-sm text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            {submitStatus && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 text-white font-medium rounded-md ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              } transition-colors duration-200`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </PageContainer>
  );
}