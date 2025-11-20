import { Mail, Phone, Linkedin, Github, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-black max-w-2xl">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <a
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-black mb-1">Email</p>
                  <p className="text-lg font-semibold group-hover:text-black transition-colors">
                    jothishtm2002@gmail.com
                  </p>
                </div>
              </a>

              <a
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-black mb-1">Phone</p>
                  <p className="text-lg font-semibold group-hover:text-black transition-colors">
                    +91 8590020234
                  </p>
                </div>
              </a>

              <div className="pt-8 border-t border-slate-700">
                <p className="text-sm text-black mb-4">Follow Me</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white hover:bg-cyan-200 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 text-black group-hover:text-black" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white hover:bg-cyan-200 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 text-black group-hover:text-black" />
                  </a>
                  <a
                    href="mailto:yourmail@gmail.com"
                    className="w-10 h-10 bg-white hover:bg-cyan-200 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 text-black group-hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-700 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 white border border-slate-700 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-black">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-700 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-slate-700 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="Tell me more about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50"
              >
                {submitted ? (
                  <>
                    <MessageSquare className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-12">
          <p className="text-center text-black text-sm">
            I typically respond within 24 hours. Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
}