import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactNew() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Let's Build Together</h2>
          <div className="w-24 h-1 bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 leading-relaxed">
            Tell us about your idea. We'll help you turn it into an intelligent product.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-slate-200 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-slate-600 text-white placeholder-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-slate-200 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-slate-600 text-white placeholder-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-slate-200 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-slate-600 text-white placeholder-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              'Sending...'
            ) : status === 'success' ? (
              'Message Sent!'
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
