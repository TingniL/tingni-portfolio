import React from 'react';
import { motion } from 'framer-motion';

const content = {
  en: {
    title: "My Projects",
    comingSoon: "Coming Soon"
  },
  fr: {
    title: "Mes Projets",
    comingSoon: "Bientôt Disponible"
  },
  zh: {
    title: "我的项目",
    comingSoon: "即将推出"
  }
};

function Projects({ language }) {
  const text = content[language];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 pt-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          {text.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-light"
        >
          {text.comingSoon}
        </motion.p>
      </div>
    </section>
  );
}

export default Projects; 