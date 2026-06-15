/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Mail, Send, CheckCircle, Copy, Check, Github, Linkedin, MessageSquareCode, Clock } from "lucide-react";
import { ContactMessage } from "../types";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  // Local state directory to hold message histories securely in localStorage for active demonstration!
  const [submittedMessages, setSubmittedMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_messages");
    if (saved) {
      try {
        setSubmittedMessages(JSON.parse(saved).slice(0, 4)); // Show top 4
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("harinirangammal4@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable API delivery queue
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substring(7),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const updated = [newMessage, ...submittedMessages];
      setSubmittedMessages(updated.slice(0, 4));
      localStorage.setItem("portfolio_messages", JSON.stringify(updated));

      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Revert status banner after period
      setTimeout(() => setSuccess(false), 4500);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* Background flare glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Elements */}
        <div className="text-center mb-16 space-y-2">
          {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase font-mono">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Deployment ping</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-stone-900 dark:text-white">
            Contact Me
          </h2>
          <p className="text-sm text-stone-500 max-w-lg mx-auto">
            Reach out via the form, or ping me on corporate networks. I will respond within 24 working hours.
          </p>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        {/* Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Core Address details & Simulated message log (5 grid cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 h-full">
            
            <div className="space-y-6">
              <h3 className="text-[17px] font-bold font-sans text-stone-950 dark:text-white">
                Conversation Gateway
              </h3>
              <p className="text-[16px] text-stone-605 dark:text-stone-350 leading-relaxed">
                I am actively seeking software engineering roles, Java junior development positions, or full-stack placements. Feel free to connect for interviews, consultations, or technical checks.
              </p>

              {/* Direct email interactive node */}
              <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-850 bg-stone-50/50 dark:bg-stone-950/20 hover:border-indigo-500/25 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <span className="text-[10px] font-mono tracking-widest text-stone-400 font-extrabold uppercase">
                        PRIMARY EMAIL
                      </span>
                      <p className="text-sm font-bold text-stone-950 dark:text-white leading-tight">
                        harinirangammal4@gmail.com
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-500 hover:text-indigo-550 dark:hover:text-indigo-350 hover:bg-stone-100 dark:hover:bg-stone-900 transition-all flex items-center justify-center cursor-pointer"
                    title="Copy Email Addresses"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Profile links cards */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/harinirpm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 p-3 font-semibold text-xs border border-stone-200 dark:border-stone-850 bg-stone-50 dark:bg-stone-950/20 text-stone-700 dark:text-stone-300 rounded-xl hover:bg-stone-100 dark:hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-indigo-650 dark:hover:text-indigo-350 transition-all cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/harinirpm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 p-3 font-semibold text-xs border border-stone-200 dark:border-stone-850 bg-stone-50 dark:bg-stone-950/20 text-stone-700 dark:text-stone-300 rounded-xl hover:bg-stone-100 dark:hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-indigo-650 dark:hover:text-indigo-350 transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Simulated Live Messages Container (Saves to state dynamically) */}
            {submittedMessages.length > 0 && (
              <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-850 bg-stone-100/30 dark:bg-stone-900/10 space-y-4">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 font-extrabold flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Active Submitted Messages ({submittedMessages.length})</span>
                </h4>

                <div className="space-y-3.5 max-h-[160px] overflow-y-auto">
                  {submittedMessages.map((msg) => (
                    <div key={msg.id} className="p-3 bg-white dark:bg-stone-950 rounded-xl border border-stone-150 dark:border-stone-900 space-y-1 text-left">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-stone-900 dark:text-indigo-300">{msg.name}</span>
                        <span className="text-stone-400 font-mono">{msg.timestamp}</span>
                      </div>
                      <p className="text-[10.5px] font-bold text-stone-750 dark:text-white leading-tight">{msg.subject}</p>
                      <p className="text-[10px] text-stone-505 dark:text-stone-400 line-clamp-1 italic">"{msg.message}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Form panel (7 grid cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-850 bg-white/50 dark:bg-stone-900/20 backdrop-blur-md shadow-xl text-left relative">
              <h3 className="text-lg font-bold font-sans text-stone-950 dark:text-white mb-6">
                Send me message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-stone-450 dark:text-stone-500 tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/40 text-sm text-stone-950 dark:text-white placeholder-stone-400 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-stone-950 transition-all font-semibold"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-stone-450 dark:text-stone-500 tracking-wider">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/40 text-sm text-stone-950 dark:text-white placeholder-stone-400 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-stone-950 transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-bold uppercase text-stone-450 dark:text-stone-500 tracking-wider">
                    Message Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/40 text-sm text-stone-950 dark:text-white placeholder-stone-400 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-stone-950 transition-all font-semibold"
                  />
                </div>

                {/* Message body field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-bold uppercase text-stone-450 dark:text-stone-500 tracking-wider">
                    Detailed Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your corporate inquiry, projects workflow, or target openings..."
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/40 text-sm text-stone-950 dark:text-white placeholder-stone-400 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-stone-950 transition-all font-medium leading-relaxed resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-650 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md hover:shadow-indigo-500/10 hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer mt-4"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></span>
                      <span>Transmitting Log...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Toast Success Alert */}
              {success && (
                <div className="absolute inset-x-6 bottom-6 bg-emerald-500 text-white rounded-xl p-4 flex items-center space-x-3.5 shadow-xl animate-in slide-in-from-bottom-5">
                  <CheckCircle className="w-6 h-6 z-10 shrink-0" />
                  <div className="space-y-0.5 text-left">
                    <p className="text-sm font-bold">Transmission Succeeded!</p>
                    <p className="text-xs text-white/90">
                      Message saved to session. Thank you for connecting!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
