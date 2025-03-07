import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaDatabase, FaServer, FaRobot, FaVial, FaMobileAlt, FaGamepad } from 'react-icons/fa';

const content = {
  en: {
    title: "My Projects",
    projects: [
      {
        title: "Data Processing & Monitoring Platform",
        company: "CACIIS",
        period: "2022 - Present",
        description: "A high-performance platform for data processing and real-time monitoring",
        features: [
          "Automated data import system",
          "Real-time monitoring dashboard",
          "Dynamic validation rules",
          "Interactive data querying"
        ],
        achievements: [
          "Reduced page load time from minutes to seconds",
          "Processing 130+ file types daily",
          "600+ dynamic validation rules",
          "Efficient search across 40-50GB data"
        ],
        tech: ["Python", "Django", "React", "PostgreSQL"],
        icon: FaDatabase
      },
      {
        title: "IoT Device Management Portal",
        company: "SFR",
        period: "2021 - 2022",
        description: "A comprehensive IoT device management system with predictive maintenance capabilities",
        features: [
          "Real-time device status monitoring",
          "Interactive device management interface",
          "Battery life prediction using ML",
          "Performance analytics dashboard"
        ],
        achievements: [
          "20% increase in device monitoring efficiency",
          "25% reduction in data retrieval time",
          "Accurate battery life prediction using Facebook Prophet",
          "Streamlined device management process"
        ],
        tech: ["React", "Spring Boot", "SQLite", "Prophet ML"],
        icon: FaMobileAlt
      },
      {
        title: "COVID-19 Patient Recovery Prediction",
        company: "Academic Project",
        period: "2021",
        description: "ML-based system for predicting COVID-19 patient recovery probability",
        features: [
          "Data cleaning and preprocessing",
          "Multiple ML model implementation",
          "Bayesian probability analysis",
          "Grid search optimization"
        ],
        achievements: [
          "Processed 100,000+ patient records",
          "Achieved 85% prediction accuracy",
          "Implemented multiple ML algorithms",
          "Created interactive visualization dashboard"
        ],
        tech: ["Python", "Scikit-learn", "Pandas", "Bayesian Analysis"],
        icon: FaVial
      },
      {
        title: "Robot Turtles Game",
        company: "Academic Project",
        period: "2020",
        description: "Digital adaptation of the Robot Turtles board game for 2-4 players",
        features: [
          "8x8 game board implementation",
          "Card-based movement system",
          "Multiplayer support",
          "Interactive gameplay mechanics"
        ],
        achievements: [
          "Successfully implemented game logic",
          "Created engaging UI/UX",
          "Added various difficulty levels",
          "Integrated real-time multiplayer"
        ],
        tech: ["Java", "JavaFX", "Socket Programming"],
        icon: FaGamepad
      }
    ]
  },
  fr: {
    title: "Mes Projets",
    projects: [
      {
        title: "Plateforme de Traitement et Monitoring de Données",
        company: "CACIIS",
        period: "2022 - Présent",
        description: "Une plateforme haute performance pour le traitement et le monitoring en temps réel",
        features: [
          "Système d'import automatisé",
          "Dashboard de monitoring en temps réel",
          "Règles de validation dynamiques",
          "Requêtes interactives"
        ],
        achievements: [
          "Temps de chargement réduit de minutes à secondes",
          "Traitement de 130+ types de fichiers par jour",
          "600+ règles de validation dynamiques",
          "Recherche efficace dans 40-50GB de données"
        ],
        tech: ["Python", "Django", "React", "PostgreSQL"],
        icon: FaDatabase
      },
      {
        title: "Portail de Gestion IoT",
        company: "SFR",
        period: "2021 - 2022",
        description: "Un système complet de gestion d'appareils IoT avec capacités de maintenance prédictive",
        features: [
          "Monitoring en temps réel des appareils",
          "Interface de gestion interactive",
          "Prédiction de durée de vie des batteries par ML",
          "Tableau de bord d'analyse de performance"
        ],
        achievements: [
          "Augmentation de 20% de l'efficacité du monitoring",
          "Réduction de 25% du temps d'accès aux données",
          "Prédiction précise avec Facebook Prophet",
          "Processus de gestion optimisé"
        ],
        tech: ["React", "Spring Boot", "SQLite", "Prophet ML"],
        icon: FaMobileAlt
      },
      {
        title: "Prédiction de Guérison COVID-19",
        company: "Projet Académique",
        period: "2021",
        description: "Système basé sur le ML pour prédire la probabilité de guérison des patients COVID-19",
        features: [
          "Nettoyage et prétraitement des données",
          "Implémentation de modèles ML multiples",
          "Analyse de probabilité bayésienne",
          "Optimisation par recherche sur grille"
        ],
        achievements: [
          "Traitement de 100,000+ dossiers patients",
          "Précision de prédiction de 85%",
          "Implémentation d'algorithmes ML multiples",
          "Création d'un tableau de bord interactif"
        ],
        tech: ["Python", "Scikit-learn", "Pandas", "Analyse Bayésienne"],
        icon: FaVial
      },
      {
        title: "Jeu Robot Turtles",
        company: "Projet Académique",
        period: "2020",
        description: "Adaptation numérique du jeu de société Robot Turtles pour 2-4 joueurs",
        features: [
          "Implémentation plateau 8x8",
          "Système de mouvement par cartes",
          "Support multijoueur",
          "Mécaniques de jeu interactives"
        ],
        achievements: [
          "Implémentation réussie de la logique de jeu",
          "Création d'une UI/UX engageante",
          "Ajout de niveaux de difficulté variés",
          "Intégration multijoueur en temps réel"
        ],
        tech: ["Java", "JavaFX", "Programmation Socket"],
        icon: FaGamepad
      }
    ]
  },
  zh: {
    title: "我的项目",
    projects: [
      {
        title: "数据处理与监控平台",
        company: "CACIIS",
        period: "2022 - 至今",
        description: "一个用于数据处理和实时监控的高性能平台",
        features: [
          "自动化数据导入系统",
          "实时监控仪表板",
          "动态验证规则",
          "交互式数据查询"
        ],
        achievements: [
          "页面加载时间从分钟级优化到秒级",
          "每日处理130多种文件类型",
          "600多个动态验证规则",
          "高效搜索40-50GB数据"
        ],
        tech: ["Python", "Django", "React", "PostgreSQL"],
        icon: FaDatabase
      },
      {
        title: "物联网设备管理门户",
        company: "SFR",
        period: "2021 - 2022",
        description: "具有预测性维护功能的综合物联网设备管理系统",
        features: [
          "实时设备状态监控",
          "交互式设备管理界面",
          "电池寿命预测（机器学习）",
          "性能分析仪表板"
        ],
        achievements: [
          "设备监控效率提升20%",
          "数据检索时间减少25%",
          "使用Facebook Prophet实现准确的电池寿命预测",
          "简化设备管理流程"
        ],
        tech: ["React", "Spring Boot", "SQLite", "Prophet ML"],
        icon: FaMobileAlt
      },
      {
        title: "新冠患者康复预测",
        company: "学术项目",
        period: "2021",
        description: "基于机器学习的新冠患者康复概率预测系统",
        features: [
          "数据清洗和预处理",
          "多个机器学习模型实现",
          "贝叶斯概率分析",
          "网格搜索优化"
        ],
        achievements: [
          "处理超过10万份患者记录",
          "预测准确率达到85%",
          "实现多种机器学习算法",
          "创建交互式可视化仪表板"
        ],
        tech: ["Python", "Scikit-learn", "Pandas", "贝叶斯分析"],
        icon: FaVial
      },
      {
        title: "机器乌龟游戏",
        company: "学术项目",
        period: "2020",
        description: "机器乌龟桌游的2-4人数字化改编版本",
        features: [
          "8x8游戏棋盘实现",
          "基于卡牌的移动系统",
          "多人游戏支持",
          "交互式游戏机制"
        ],
        achievements: [
          "成功实现游戏逻辑",
          "创建引人入胜的UI/UX",
          "添加多个难度等级",
          "集成实时多人游戏"
        ],
        tech: ["Java", "JavaFX", "Socket编程"],
        icon: FaGamepad
      }
    ]
  }
};

function Projects({ language }) {
  const text = content[language];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          {text.title}
        </motion.h1>

        <div className="space-y-12">
          {text.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <project.icon className="text-3xl text-pink-300" />
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                  </div>
                  <div className="text-pink-200 mb-4">
                    {project.company} | {project.period}
                  </div>
                  <p className="text-lg mb-6">{project.description}</p>

                  {/* Features & Achievements */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <FaCode className="text-pink-300" />
                        Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-pink-300 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <FaChartLine className="text-pink-300" />
                        Achievements
                      </h3>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-pink-300 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Image/Demo */}
                <div className="md:col-span-1">
                  {index === 0 ? (
                    <img
                      src={process.env.PUBLIC_URL + '/assets/Interface.jpg'}
                      alt="CACIIS Dashboard"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : index === 1 ? (
                    <a
                      href={process.env.PUBLIC_URL + '/assets/lettre%20de%20recommandation.pdf'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full min-h-[300px] relative group"
                    >
                      <img
                        src={process.env.PUBLIC_URL + '/assets/recommendation-preview.jpg'}
                        alt="Lettre de recommandation"
                        className="w-full h-full object-cover rounded-lg transition-opacity group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-lg">
                        <span className="text-white text-lg font-semibold">点击查看推荐信</span>
                      </div>
                    </a>
                  ) : index === 2 ? (
                    <img
                      src={process.env.PUBLIC_URL + '/assets/Machine Learning.jpg'}
                      alt="Machine Learning Project"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={process.env.PUBLIC_URL + '/assets/robot turtles.jpg'}
                      alt="Robot Turtles Game"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 