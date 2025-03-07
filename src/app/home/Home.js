// src/app/home/Home.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPython, FaAngular, FaDocker, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ContactModal from '../shared-private/ContactModal';
import { useNavigate } from 'react-router-dom';

const content = {
  en: {
    title: ['Hi, I\'m Tingni Li', 'Full Stack Developer'],
    description: 'I am a Full-Stack Developer and Data Engineer with a strong focus on high-performance backend development, large-scale data processing, and real-time monitoring systems. Passionate about system optimization, I have successfully reduced query response times from minutes to seconds, ensuring seamless user experience.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    techStack: 'Tech Stack',
    backendDev: 'Backend Development',
    frontendDev: 'Frontend Development',
    cloudDevOps: 'Cloud & DevOps',
    experience: 'Experience',
    expertise: 'Key Expertise',
    expertiseItems: [
      'Big Data & Database Optimization: Designed and optimized an automated data import system processing 130+ different file types daily, handling dozens of gigabytes of data efficiently.',
      'Real-Time Monitoring & Visualization: Built a dashboard-based monitoring platform with over 600+ data validation rules, enabling real-time insights and interactive user controls.',
      'Full-Stack Development: Designed and implemented both front-end and back-end of the platform, optimizing slow-loading pages and reducing load times from minutes to seconds.',
      'Cloud & DevOps: Experienced in Docker, Kubernetes, and CI/CD, ensuring scalable and reliable deployment.'
    ],
    currentJob: {
      title: 'CACIIS - Python Software Engineer',
      period: 'October 2022 - Present',
      achievements: [
        'Designed and optimized a high-performance automated data import system, processing 130+ file types daily, handling dozens of gigabytes of data',
        'Built a real-time database monitoring platform with 600+ dynamic validation rules, enabling analysts to track data quality via a customizable dashboard',
        'Reduced slow-loading pages from 1-2 minutes to 10-20 seconds, enhancing efficiency and user experience',
        'Implemented real-time data querying service, allowing users to search across 40-50GB of data efficiently',
        'Integrated manual import/export tools, providing interactive database management for non-technical users'
      ]
    },
    internship: {
      title: 'SFR - IoT Project Testing and Validation Intern',
      period: 'January 2021 - July 2022',
      achievements: [
        'Integrated and evaluated IoT sensor performance, achieving a 20% increase in efficiency through comprehensive testing',
        'Developed a React.js and Spring Boot web interface for IoT sensor data management',
        'Designed an optimized SQLite database that reduced data retrieval time by 25%',
        'Built a predictive ML model using time-series analysis to forecast IoT device lifespan'
      ]
    }
  },
  fr: {
    title: ['Bonjour, je suis Tingni Li', 'Développeuse Full Stack'],
    description: 'Je suis une développeuse Full-Stack et ingénieure de données spécialisée dans le développement backend haute performance, le traitement de données à grande échelle et les systèmes de monitoring en temps réel. Passionnée par l\'optimisation des systèmes, j\'ai réussi à réduire les temps de réponse des requêtes de plusieurs minutes à quelques secondes.',
    viewProjects: 'Voir les Projets',
    contactMe: 'Me Contacter',
    techStack: 'Stack Technique',
    backendDev: 'Développement Backend',
    frontendDev: 'Développement Frontend',
    cloudDevOps: 'Cloud & DevOps',
    experience: 'Expérience',
    expertise: 'Expertise Clé',
    expertiseItems: [
      'Big Data & Optimisation de Base de Données : Conception et optimisation d\'un système d\'import automatisé traitant quotidiennement 130+ types de fichiers différents.',
      'Monitoring & Visualisation en Temps Réel : Création d\'une plateforme de monitoring avec plus de 600 règles de validation, permettant des insights en temps réel.',
      'Développement Full-Stack : Conception et implémentation du front-end et back-end, optimisant les temps de chargement de plusieurs minutes à quelques secondes.',
      'Cloud & DevOps : Expérience en Docker, Kubernetes et CI/CD, assurant un déploiement scalable et fiable.'
    ],
    currentJob: {
      title: 'CACIIS - Ingénieure Logiciel Python',
      period: 'Octobre 2022 - Présent',
      achievements: [
        'Conception et optimisation d\'un système d\'import automatisé haute performance, traitant 130+ types de fichiers quotidiennement',
        'Création d\'une plateforme de monitoring en temps réel avec 600+ règles de validation dynamiques',
        'Réduction des temps de chargement de 1-2 minutes à 10-20 secondes',
        'Implémentation d\'un service de requêtes en temps réel permettant de rechercher efficacement dans 40-50GB de données',
        'Intégration d\'outils d\'import/export manuels pour une gestion interactive des bases de données'
      ]
    },
    internship: {
      title: 'SFR - Stage en Test et Validation IoT',
      period: 'Janvier 2021 - Juillet 2022',
      achievements: [
        'Intégration et évaluation des performances des capteurs IoT, augmentant l\'efficacité de 20%',
        'Développement d\'une interface web React.js et Spring Boot pour la gestion des données IoT',
        'Conception d\'une base de données SQLite optimisée réduisant le temps d\'accès aux données de 25%',
        'Création d\'un modèle ML prédictif utilisant l\'analyse de séries temporelles'
      ]
    }
  },
  zh: {
    title: ['你好，我是李亭伲', '全栈开发工程师'],
    description: '我是一名专注于高性能后端开发、大规模数据处理和实时监控系统的全栈开发工程师和数据工程师。热衷于系统优化，成功将查询响应时间从分钟级别降低到秒级，确保流畅的用户体验。',
    viewProjects: '查看项目',
    contactMe: '联系我',
    techStack: '技术栈',
    backendDev: '后端开发',
    frontendDev: '前端开发',
    cloudDevOps: '云服务和DevOps',
    experience: '工作经验',
    expertise: '核心专长',
    expertiseItems: [
      '大数据与数据库优化：设计和优化自动化数据导入系统，每日处理130多种不同类型的文件，高效处理数十GB数据。',
      '实时监控与可视化：构建基于仪表板的监控平台，集成600多个数据验证规则，实现实时洞察和交互式控制。',
      '全栈开发：设计和实现平台的前端和后端，优化慢加载页面，将加载时间从分钟级降低到秒级。',
      '云服务和DevOps：熟练使用Docker、Kubernetes和CI/CD，确保可扩展和可靠的部署。'
    ],
    currentJob: {
      title: 'CACIIS - Python软件工程师',
      period: '2022年10月 - 至今',
      achievements: [
        '设计和优化高性能自动化数据导入系统，每日处理130多种文件类型，处理数十GB数据',
        '构建实时数据库监控平台，集成600多个动态验证规则，使分析师能够通过可定制仪表板跟踪数据质量',
        '将慢加载页面从1-2分钟优化至10-20秒，提升效率和用户体验',
        '实现实时数据查询服务，使用户能够高效搜索40-50GB的数据',
        '集成手动导入/导出工具，为非技术用户提供交互式数据库管理'
      ]
    },
    internship: {
      title: 'SFR - 物联网项目测试和验证实习生',
      period: '2021年1月 - 2022年7月',
      achievements: [
        '集成和评估物联网传感器性能，通过全面测试提高效率20%',
        '开发基于React.js和Spring Boot的物联网传感器数据管理Web界面',
        '设计优化的SQLite数据库，将数据检索时间减少25%',
        '使用时间序列分析构建预测性机器学习模型，用于预测物联网设备寿命'
      ]
    }
  }
};

function Home({ language }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const text = content[language];

  return (
    <main className="flex-grow">
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        language={language}
      />
      {/* Hero Section with Animation */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-16"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img
                src={process.env.PUBLIC_URL + '/assets/Tingni.jpeg'}
                alt="Tingni LI"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white/30 shadow-xl"
              />
            </motion.div>

            <h1 className="text-5xl font-bold mb-4">
              <TypeAnimation
                sequence={[
                  text.title[0],
                  1000,
                  text.title[1],
                  1000,
                  text.title[2],
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {text.description}
            </motion.p>

            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="max-w-4xl mx-auto mb-12 text-left"
            >
              <h2 className="text-2xl font-semibold mb-4">💡 {text.expertise}</h2>
              <ul className="space-y-3">
                {text.expertiseItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-10">
              <motion.a
                href="https://github.com/TingniL"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-3xl hover:text-white/80"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tingni-li-65b9b8171/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-3xl hover:text-white/80"
              >
                <FaLinkedin />
              </motion.a>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-100 transition duration-300"
                onClick={() => navigate('/projects')}
              >
                {text.viewProjects}
              </motion.button>
              <motion.a
                href={process.env.PUBLIC_URL + (language === 'fr' ? '/assets/CV Tingni LI DEV.pdf' : '/assets/Tingni LI SDE.pdf')}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition duration-300"
              >
                <FaDownload />
                Download CV
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300"
                onClick={() => setIsContactModalOpen(true)}
              >
                {text.contactMe}
              </motion.button>
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">{text.techStack}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <FaPython className="mx-auto text-4xl mb-3" />
                <h4 className="font-semibold mb-2">{text.backendDev}</h4>
                <p className="text-sm">Python (Django, Flask), Java</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <FaAngular className="mx-auto text-4xl mb-3" />
                <h4 className="font-semibold mb-2">{text.frontendDev}</h4>
                <p className="text-sm">Angular, React.js</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <FaDocker className="mx-auto text-4xl mb-3" />
                <h4 className="font-semibold mb-2">{text.cloudDevOps}</h4>
                <p className="text-sm">Docker, Kubernetes, CI/CD</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8">{text.experience}</h3>
            
            {/* Current Job */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto mb-8">
              <h4 className="font-bold text-xl mb-2">{text.currentJob.title}</h4>
              <p className="text-sm mb-6">{text.currentJob.period}</p>
              <ul className="text-left text-sm space-y-3">
                {text.currentJob.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Internship */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
              <h4 className="font-bold text-xl mb-2">{text.internship.title}</h4>
              <p className="text-sm mb-6">{text.internship.period}</p>
              <ul className="text-left text-sm space-y-3">
                {text.internship.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;
