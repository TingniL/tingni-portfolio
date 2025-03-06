import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const content = {
  en: {
    title: "About Me",
    subtitle: "Full Stack Developer",
    description: [
      "With a strong background in both frontend and backend development, I specialize in building high-performance, scalable applications that solve real-world problems.",
      "My expertise lies in optimizing data processing systems and creating intuitive user interfaces. I'm passionate about using technology to transform complex data into actionable insights."
    ],
    skills: {
      title: "Technical Skills",
      categories: [
        {
          name: "Programming Languages",
          items: ["Python", "JavaScript", "TypeScript", "Java", "SQL"]
        },
        {
          name: "Frontend Development",
          items: [ "Angular", "React.js","Bootrstrap", "Tailwind CSS", "Material UI"]
        },
        {
          name: "Backend Development",
          items: ["Django", "Flask", "Node.js", "RESTful APIs"]
        },
        {
          name: "Database & Cloud",
          items: ["PostgreSQL", "SQLite", "Docker", "Kubernetes"]
        }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's Connect!",
      email: "tingni.li@outlook.com",
      location: "Paris, France",
      message: "I'm always open to discussing new projects and opportunities."
    }
  },
  fr: {
    title: "À Propos",
    subtitle: "Développeuse Full Stack",
    description: [
      "Avec une solide expérience en développement frontend et backend, je me spécialise dans la construction d'applications performantes et évolutives qui résolvent des problèmes concrets.",
      "Mon expertise réside dans l'optimisation des systèmes de traitement de données et la création d'interfaces utilisateur intuitives. Je suis passionnée par l'utilisation de la technologie pour transformer des données complexes en insights actionnables."
    ],
    skills: {
      title: "Compétences Techniques",
      categories: [
        {
          name: "Langages de Programmation",
          items: ["Python", "JavaScript", "TypeScript", "Java", "SQL"]
        },
        {
          name: "Développement Frontend",
          items: [ "Angular", "React.js","Bootrstrap", "Tailwind CSS", "Material UI"]
        },
        {
          name: "Développement Backend",
          items: ["Django", "Flask", "Node.js", "RESTful APIs"]
        },
        {
          name: "Base de Données & Cloud",
          items: ["PostgreSQL", "SQLite", "Docker", "Kubernetes"]
        }
      ]
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Connectons-nous !",
      email: "tingni.li@outlook.com",
      location: "Paris, France",
      message: "Je suis toujours ouverte à la discussion de nouveaux projets et opportunités."
    }
  },
  zh: {
    title: "关于我",
    subtitle: "全栈开发工程师",
    description: [
      "我在前端和后端开发方面都有扎实的背景，专注于构建高性能、可扩展的应用程序，解决实际问题。",
      "我的专长在于优化数据处理系统和创建直观的用户界面。我热衷于使用技术将复杂数据转化为可行的见解。"
    ],
    skills: {
      title: "技术技能",
      categories: [
        {
          name: "编程语言",
          items: ["Python", "JavaScript", "TypeScript", "Java", "SQL"]
        },
        {
          name: "前端开发",
          items: [ "Angular", "React.js","Bootrstrap", "Tailwind CSS", "Material UI"]
        },
        {
          name: "后端开发",
          items: ["Django", "Flask", "Node.js", "RESTful APIs"]
        },
        {
          name: "数据库与云服务",
          items: ["PostgreSQL", "SQLite", "Docker", "Kubernetes"]
        }
      ]
    },
    contact: {
      title: "联系我",
      subtitle: "让我们建立联系！",
      email: "tingni.li@outlook.com",
      location: "巴黎，法国",
      message: "我随时欢迎讨论新的项目和机会。"
    }
  }
};

function About({ language }) {
  const text = content[language];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 pt-32">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">{text.title}</h1>
          <h2 className="text-2xl font-light mb-8">{text.subtitle}</h2>
          <div className="space-y-4 text-lg">
            {text.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">{text.skills.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {text.skills.categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">{text.contact.title}</h2>
          <p className="text-xl mb-8">{text.contact.subtitle}</p>
          <p className="mb-8">{text.contact.message}</p>
          
          <div className="flex justify-center gap-8 mb-8">
            <motion.a
              href="mailto:tingni.li@outlook.com"
              className="flex items-center gap-2 hover:text-pink-200"
              whileHover={{ scale: 1.1 }}
            >
              <FaEnvelope className="text-2xl" />
              <span>{text.contact.email}</span>
            </motion.a>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <FaMapMarkerAlt className="text-2xl" />
              <span>{text.contact.location}</span>
            </motion.div>
          </div>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/TingniL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-200"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tingni-li-65b9b8171/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-200"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About; 