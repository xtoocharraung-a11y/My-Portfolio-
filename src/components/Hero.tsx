import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/src/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full"
          >
            Available for opportunities
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
            Hi, I'm <span className="text-blue-600">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
            {personalInfo.role}. I build scalable ERP solutions and intelligent AI systems.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold transition-all hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              Let's Talk
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
            <img
              src="https://picsum.photos/seed/htoo/800/800"
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-2xl -z-10 animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full -z-10 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
