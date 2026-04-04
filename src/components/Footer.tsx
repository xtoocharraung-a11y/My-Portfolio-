import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { personalInfo } from "@/src/data";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HCA.
            </a>
            <p className="text-slate-500 dark:text-slate-500 mt-2">
              Building the future with AI and ERP solutions.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-blue-600 transition-all rounded-xl"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all rounded-xl"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-blue-400 transition-all rounded-xl"
            >
              <Twitter size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-red-500 transition-all rounded-xl"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
