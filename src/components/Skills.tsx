import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Zap, Cpu } from "lucide-react";
import { skills } from "@/src/data";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="text-blue-600" />,
    skills: skills.programming,
    color: "blue",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="text-purple-600" />,
    skills: skills.design,
    color: "purple",
  },
  {
    title: "Soft Skills",
    icon: <Zap className="text-yellow-600" />,
    skills: skills.softSkills,
    color: "yellow",
  },
  {
    title: "Other Expertise",
    icon: <Cpu className="text-green-600" />,
    skills: skills.others,
    color: "green",
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            My Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and professional strengths.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
