import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { personalInfo, education } from "@/src/data";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {personalInfo.about}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <Phone size={20} className="text-blue-600" />
                </div>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
              <GraduationCap className="text-blue-600" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-slate-700"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1 block">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
