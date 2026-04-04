import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import { experience } from "@/src/data";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey through the tech world, from leading AI projects to developing ERP solutions.
          </p>
        </div>

        <div ref={ref} className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 z-10 border-4 border-white dark:border-slate-900 hidden md:block" />

              <div className="w-full md:w-1/2 px-0 md:px-12">
                <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-900 dark:text-slate-200 font-semibold mb-3">
                    {exp.company}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
