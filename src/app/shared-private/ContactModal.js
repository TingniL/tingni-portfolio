import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaTimes } from 'react-icons/fa';

const content = {
  en: {
    title: "Contact Me",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    phone: "+33 06 61 41 65 79",
    or: "Or contact me via",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again."
  },
  fr: {
    title: "Me Contacter",
    name: "Nom",
    email: "Email",
    message: "Message",
    send: "Envoyer",
    phone: "+33 06 61 41 65 79",
    or: "Ou me contacter via",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Votre email",
    messagePlaceholder: "Votre message",
    success: "Message envoyé avec succès !",
    error: "Échec de l'envoi du message. Veuillez réessayer."
  },
  zh: {
    title: "联系我",
    name: "姓名",
    email: "邮箱",
    message: "留言",
    send: "发送消息",
    phone: "+33 06 61 41 65 79",
    or: "或通过以下方式联系我",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "您的邮箱",
    messagePlaceholder: "您的留言",
    success: "消息发送成功！",
    error: "消息发送失败，请重试。"
  }
};

function ContactModal({ isOpen, onClose, language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const text = content[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const mailtoLink = `mailto:tingni.li@outlook.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 max-w-lg w-full text-white"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{text.title}</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-pink-200 transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">{text.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={text.namePlaceholder}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:outline-none placeholder-white/50"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">{text.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={text.emailPlaceholder}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:outline-none placeholder-white/50"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">{text.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={text.messagePlaceholder}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:outline-none placeholder-white/50 h-32 resize-none"
                  required
                />
              </div>

              {status && (
                <div className={`text-sm ${status === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                  {text[status]}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-white text-indigo-600 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition-colors"
              >
                {text.send}
              </button>
            </form>

            <div className="mt-6">
              <p className="text-center mb-4">{text.or}</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/TingniL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-pink-200 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/tingni-li-65b9b8171/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-pink-200 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:tingni.li@outlook.com"
                  className="text-2xl hover:text-pink-200 transition-colors"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="tel:+33074949851"
                  className="text-2xl hover:text-pink-200 transition-colors"
                >
                  <FaPhone />
                </a>
              </div>
              <p className="text-center mt-4 text-sm">{text.phone}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal; 