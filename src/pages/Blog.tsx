import PageContainer from "../components/PageContainer";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16 animate-fade-in-up">

        {/* ------------------ HERO ------------------ */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 leading-tight">
            TransformNXT Blog
          </h1>
          <p className="mt-4 text-lg text-zinc-700 max-w-3xl mx-auto">
            Insights, trends, and expert perspectives on AI, hiring technology,
            digital transformation, HR automation, and modern workforce solutions.
          </p>

          <img
            src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&w=1200"
            alt="Blog Hero"
            className="mt-8 rounded-2xl w-full shadow-lg border border-zinc-200"
          />
        </section>

        {/* ------------------ FEATURED POST ------------------ */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Featured Article
          </h2>

          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-xl border border-zinc-200 shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=1200"
              alt="Featured"
              className="w-full h-full object-cover"
            />

            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-zinc-900">
                How AI is Transforming Recruitment in 2025
              </h3>
              <p className="mt-2 text-zinc-700">
                From automated interviews to predictive analytics, AI is reshaping
                how organizations attract and evaluate talent. Here's what every
                HR leader needs to know.
              </p>

              <Link
                to="/blog/how-ai-is-transforming-recruitment"
                className="inline-flex mt-4 text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------ CATEGORIES ------------------ */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">Categories</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "AI in HR",
              "Automation",
              "Digital Transformation",
              "HR Analytics",
              "Interview Technology",
              "Workforce Intelligence",
            ].map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* ------------------ BLOG GRID ------------------ */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Benefits of Asynchronous Interviews for Global Hiring",
                img: "https://images.pexels.com/photos/4065133/pexels-photo-4065133.jpeg?auto=compress&w=1200",
              },
              {
                title: "Why HR Teams Need Predictive Analytics in 2025",
                img: "https://images.pexels.com/photos/3184324/pexels-photo-3184324.jpeg?auto=compress&w=1200",
              },
              {
                title: "Automation That Reduces HR Manual Work by 60%",
                img: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&w=1200",
              },
              {
                title: "A Complete Guide to AI-Based CV Ranking",
                img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=1200",
              },
              {
                title: "How Companies Use AI Video Interviews",
                img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&w=1200",
              },
              {
                title: "10 HR Tech Trends Every Leader Must Know",
                img: "https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?auto=compress&w=1200",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="rounded-t-xl w-full h-44 object-cover"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg text-zinc-900 line-clamp-2">
                    {post.title}
                  </h3>

                  <Link
                    to="#"
                    className="text-blue-600 text-sm mt-3 inline-block hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------ NEWSLETTER ------------------ */}
        <section className="bg-white rounded-2xl border border-zinc-200 shadow-md p-10 text-center">
          <h2 className="text-2xl font-bold text-zinc-900">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-zinc-700 mt-2 max-w-xl mx-auto">
            Get the latest HR insights, AI trends, and product updates delivered to your inbox.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 border border-zinc-300 rounded-lg w-full sm:w-80"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </section>

        {/* ------------------ CTA ------------------ */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Want to Share Your Story or Collaborate?
          </h2>
          <p className="text-zinc-700 mt-2">
            We publish insights from industry experts, HR leaders, and AI innovators.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Contact Us
          </a>
        </section>
      </div>
    </PageContainer>
  );
}
