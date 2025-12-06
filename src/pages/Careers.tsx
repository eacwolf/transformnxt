import { useState, useRef, type FormEvent } from "react";
import { init, send } from "@emailjs/browser";
import PageContainer from "../components/PageContainer";

// EmailJS config
const SERVICE_ID = "service_t8oyfcs";
const TEMPLATE_ID = "template_g7ew397";
const USER_ID = "vk_LqzCYRdM2tQ0sc";

init(USER_ID);

interface FormStatus {
  type: "success" | "error";
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
        throw new Error("Please fill all required fields including your resume");
      }

      const file = fileInputRef.current.files[0];

      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: "error",
          message: "File size should not exceed 5MB",
        });
        setIsSubmitting(false);
        return;
      }

      // Convert file → base64
      const base64File = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const formData = new FormData(formRef.current);

      const templateParams = {
        name: formData.get("name"),
        email: formData.get("email"),
        position: formData.get("position"),
        resume: base64File,
        filename: file.name,
        jsonAttachment: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          position: formData.get("position"),
          filename: file.name,
          timestamp: new Date().toISOString(),
        }),
      };

      await send(SERVICE_ID, TEMPLATE_ID, templateParams);

      setSubmitStatus({
        type: "success",
        message:
          "Your application has been submitted successfully! We will get back to you soon.",
      });

      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "There was an error submitting your application. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-zinc-900 leading-tight">
          Build the Future with TransformNXT
        </h1>
        <p className="mt-4 text-lg text-zinc-700 max-w-3xl mx-auto">
          Join a team that thrives on innovation, creativity, and impact.  
          Work on solutions that shape the next generation of HR and workforce technology.
        </p>

        <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
          <img
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&w=1200"
            alt="Careers at TransformNXT"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* ---------------------- WHY WORK WITH US ---------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-zinc-900">Why Work With Us?</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Growth & Learning",
              text: "Continuous learning, certifications, mentorship, and new technology exposure.",
            },
            {
              title: "Flexible Work Culture",
              text: "Hybrid & remote opportunities with supportive and inclusive work environment.",
            },
            {
              title: "Impactful Work",
              text: "Build AI-driven solutions used by enterprises, institutions, and global teams.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-zinc-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- CURRENT OPENINGS ---------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-zinc-900">Current Openings</h2>

        <ul className="mt-6 space-y-4 text-zinc-700">
          <li>
            <span className="font-semibold">Software Engineer (React/Node.js)</span> – 2+
            years experience
          </li>
          <li>
            <span className="font-semibold">Cloud Solutions Architect</span> – 5+ years
            experience
          </li>
          <li>
            <span className="font-semibold">AI/ML Engineer</span> – 3+ years experience
          </li>
        </ul>
      </section>

      {/* ---------------------- CULTURE SECTION ---------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-zinc-900">Our Culture</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <img
            src="https://images.pexels.com/photos/3182745/pexels-photo-3182745.jpeg?auto=compress&w=1200"
            className="rounded-2xl border shadow-md object-cover"
          />
          <div className="space-y-4 text-zinc-700">
            <p>
              At TransformNXT, we believe great things happen when talented people come
              together with a shared purpose. We encourage open dialogue, curiosity, and a
              mindset of continuous improvement.
            </p>
            <p>
              You’ll work with a passionate team solving real-world problems using
              cutting-edge technology.
            </p>
            <p>We value transparency, ownership, creativity, and integrity.</p>
          </div>
        </div>
      </section>

      {/* ---------------------- APPLICATION FORM ---------------------- */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Apply Now
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position Applied For *
              </label>
              <select
                name="position"
                required
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select a position</option>
                <option value="Software Engineer (React/Node.js)">
                  Software Engineer (React/Node.js)
                </option>
                <option value="Cloud Solutions Architect">Cloud Solutions Architect</option>
                <option value="AI/ML Engineer">AI/ML Engineer</option>
              </select>
            </div>

            {/* Resume */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Resume *
              </label>
              <input
                ref={fileInputRef}
                type="file"
                name="resume"
                required
                accept=".pdf,.doc,.docx"
                className="w-full border rounded-md px-4 py-2 file:bg-blue-50 file:text-blue-600 file:rounded-md"
              />
              <p className="text-sm text-gray-500 mt-1">Max file size: 5MB</p>
            </div>

            {/* Status Messages */}
            {submitStatus && (
              <p
                className={`p-3 rounded-md text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md text-white font-medium ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </PageContainer>
  );
}
