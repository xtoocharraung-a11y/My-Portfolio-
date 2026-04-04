import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Getting Started with Odoo Customization",
    excerpt: "Learn the basics of creating your first Odoo module and customizing business workflows.",
    date: "Mar 15, 2024",
    category: "Odoo",
    image: "https://picsum.photos/seed/blog1/800/400",
  },
  {
    title: "AI in ERP: The Future of Business Automation",
    excerpt: "Exploring how machine learning and computer vision are transforming modern ERP systems.",
    date: "Mar 10, 2024",
    category: "AI",
    image: "https://picsum.photos/seed/blog2/800/400",
  },
];

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Latest Insights
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              Sharing my thoughts and discoveries in the world of Odoo development and Artificial Intelligence.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
          >
            View All Posts <ArrowRight size={20} />
          </a>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase">
                    {post.category}
                  </span>
                  <span className="text-sm text-slate-400">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-slate-900 dark:text-white font-bold"
                >
                  Read More <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
