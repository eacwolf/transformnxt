import React from "react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Thanks for contacting us! (Demo only)");
  };

  return (
    <div className="bg-light text-dark min-vh-100 d-flex flex-column">
      {/* Hero Section with margin from navbar */}
      <section className="bg-primary text-light text-center py-5 mt-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Get in Touch with TransformNXT</h1>
          <p className="lead mt-3">
            We’d love to hear from you. Whether you have a project idea,
            partnership inquiry, or just want to say hello , let’s connect.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-5 flex-grow-1">
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h2 className="h4 fw-bold mb-4">Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Message</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="How can we help?"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary fw-bold w-100"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h2 className="h4 fw-bold mb-4">Our Contact Information</h2>
                <p className="mb-2">
                  <strong>📍 Address:</strong> 4th floor, DC 23, TIDEL Park,
                  Coimbatore
                </p>
                <p className="mb-2">
                  <strong>📧 Email:</strong> info@transformnxt.com
                </p>
                <p className="mb-2">
                  <strong>📞 Phone:</strong> +91 9XXXXXXXXX
                </p>
                <hr />
                <h5 className="fw-bold">Global Offices</h5>
                <ul className="list-unstyled">
                  <li>🇮🇳 India — Coimbatore, TIDEL Park</li>
                  <li>🇺🇸 USA — California, Milpitas</li>
                  <li>🇳🇱 Netherlands — Almere</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body p-0">
                <iframe
                  title="TransformNXT Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.551335073007!2d76.998!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859f2b5e6fef9%3A0x6a9d29f6b85c3d8f!2sTIDEL%20Park%20Coimbatore!5e0!3m2!1sen!2sin!4v1690000000000"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <p className="mb-0">
          © {new Date().getFullYear()} TransformNXT. All rights reserved.
        </p>
        <p className="small">Follow us — LinkedIn • Twitter • Facebook</p>
      </footer>
    </div>
  );
}
