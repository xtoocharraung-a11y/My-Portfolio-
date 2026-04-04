import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/src/data";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      // Note: Replace with actual service ID, template ID, and public key
      // For now, we simulate the request to show the UI states
      // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
      
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">Email Me</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">Call Me</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">Location</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle size={20} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle size={20} />
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
