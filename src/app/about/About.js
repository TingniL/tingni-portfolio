import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const catImages = [
  'IMG_2547.jpeg', 'IMG_3619.jpeg', 'IMG_3661.jpeg', 'IMG_3886.jpeg', 'IMG_4029.jpeg',
  'IMG_4083.jpeg', 'IMG_4117.jpeg', 'IMG_4236.jpeg', 'IMG_9015.jpeg', 'IMG_9018.jpeg',
  'IMG_9023.jpeg'
];

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
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Python Software Engineer at CACIIS",
          period: "2022 - Present",
          description: "Leading the development of high-performance data processing systems",
          achievements: [
            "Optimized data import system for 130+ file types",
            "Built real-time monitoring platform",
            "Reduced page load time by 90%",
            "Implemented efficient search across 50GB data"
          ]
        },
        {
          title: "IoT Project Testing Intern at SFR",
          period: "2021 - 2022",
          description: "Developed and tested IoT device management solutions",
          achievements: [
            "Improved monitoring efficiency by 20%",
            "Reduced data retrieval time by 25%",
            "Implemented ML-based predictions",
            "Created React.js management interface"
          ]
        }
      ]
    },
    catGallery: {
      title: "Life with My Cat",
      description: "Some precious moments with my lovely cat"
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
    },
    experience: {
      title: "Expérience",
      items: [
        {
          title: "Ingénieure Logiciel Python chez CACIIS",
          period: "2022 - Présent",
          description: "Direction du développement de systèmes de traitement de données haute performance",
          achievements: [
            "Optimisation du système d'import pour 130+ types de fichiers",
            "Construction d'une plateforme de monitoring en temps réel",
            "Réduction du temps de chargement de 90%",
            "Implémentation d'une recherche efficace sur 50GB de données"
          ]
        },
        {
          title: "Stage en Test IoT chez SFR",
          period: "2021 - 2022",
          description: "Développement et test de solutions de gestion d'appareils IoT",
          achievements: [
            "Amélioration de l'efficacité du monitoring de 20%",
            "Réduction du temps d'accès aux données de 25%",
            "Implémentation de prédictions basées sur le ML",
            "Création d'interface de gestion en React.js"
          ]
        }
      ]
    },
    catGallery: {
      title: "La Vie avec Mon Chat",
      description: "Quelques moments précieux avec mon chat"
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
    },
    experience: {
      title: "工作经验",
      items: [
        {
          title: "CACIIS - Python软件工程师",
          period: "2022 - 至今",
          description: "领导开发高性能数据处理系统",
          achievements: [
            "优化130多种文件类型的数据导入系统",
            "构建实时监控平台",
            "页面加载时间减少90%",
            "实现50GB数据的高效搜索"
          ]
        },
        {
          title: "SFR - 物联网项目测试实习生",
          period: "2021 - 2022",
          description: "开发和测试物联网设备管理解决方案",
          achievements: [
            "监控效率提升20%",
            "数据检索时间减少25%",
            "实现基于机器学习的预测",
            "创建React.js管理界面"
          ]
        }
      ]
    },
    catGallery: {
      title: "我和猫咪的生活",
      description: "记录与可爱猫咪的珍贵时刻"
    }
  }
};

function About({ language }) {
  const text = content[language];
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [-1000, -2000],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    startAnimation();

    return () => {
      controls.stop();
    };
  }, [controls]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 pt-32">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-8">{text.title}</h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto">{text.description}</p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{text.experience.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {text.experience.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-pink-200 mb-4">{item.period}</p>
                <p className="mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-300 rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">{text.contact.title}</h2>
          <p className="text-xl mb-8">{text.contact.message}</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/TingniL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-pink-300 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tingni-li-65b9b8171/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-pink-300 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Cat Photos Section */}
        <div className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            {text.catGallery.title}
          </motion.h2>
          <p className="text-center mb-12">{text.catGallery.description}</p>
          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              className="flex gap-4"
              style={{ width: `${catImages.length * 288 * 2 + (catImages.length - 1) * 16 * 2}px` }}
            >
              {[...catImages, ...catImages].map((image, index) => (
                <div
                  key={index}
                  className="w-72 h-72 flex-shrink-0 transition-transform hover:scale-105"
                >
                  <img
                    src={process.env.PUBLIC_URL + `/assets/${image}`}
                    alt={`Cat photo ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 