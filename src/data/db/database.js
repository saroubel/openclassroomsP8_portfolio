import Mock from "../mock";

const database = {
  information: {
    name: "Sara Bellaf",
    aboutContent:
      "Développeuse web passionnée, je crée des expériences numériques innovantes et fonctionnelles pour transformer mes idées en réalité.",
    age: 30,
    phone: "",
    nationality: "Marocaine",
    language: "Français, Arabe, Anglais",
    email: "bellaf.sara@gmail.com",
    address: "Paris, France",
    freelanceStatus: "Dès que possible",
    socialLinks: {
      github: "https://github.com/saroubel",
      linkedin: "https://fr.linkedin.com/in/sara-bellaf-a360a0219",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    brandImage: "images/portrait-sarabellaf.webp",
    aboutImage: "images/about-sarabellaf.webp",
    aboutImageLg: "images/about-sarabellaf-lg.webp",
    cvfile: "files/CVtest.pdf",
  },


  services: [
    {
      title: "Front end",
      icon: "brush-alt",
      details:
        "Spécialiste des technologies web modernes, maîtrisant HTML5, CSS, Sass, JavaScript et React pour créer des applications dynamiques et des sites élégants, tout en intégrant des pratiques de Green IT pour réduire l'impact environnemental. ",
    },
    {
      title: "Back end",
      icon: "code",
      details:
        "Création d'API performantes et évolutives, maîtrise de Node.js, Express, MongoDB et la gestion des données en SQL et NoSQL. Capable d'appeler des données depuis des API ou des fichiers JSON, tout en suivant l'architecture MVC pour structurer les applications Express.",
    },
    {
      title: "Design Responsive",
      icon: "mobile",
      details:
        "Intégrant les principes du responsive design, chaque élément visuel s'adapte parfaitement aux différentes tailles d'écran, assurant ainsi une navigation fluide et intuitive sur mobile, tablette et desktop.",
    },
  ],


  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3 & SASS ",
      value: 90,
    },
    {
      title: "Javascript",
      value: 65,
    },
    {
      title: "ReactJs",
      value: 70,
    },
    {
      title: "NodeJs",
      value: 75,
    },
    {
      title: "ExpressJs",
      value: 70,
    },
    {
      title: "SQL / MySQL / Oracle",
      value: 75,
    },
    {
      title: "MangoDB",
      value: 65,
    },
    {
      title: "SEO",
      value: 90,
    },
    {
      title: "Git",
      value: 90,
    },
    {
      title: "Gestion de projet",
      value: 80,
    },
    {
      title: "Java & C#",
      value: 65,
    },
  ],
  

  portfolios: [
    { // Booki
      id: 1,
      title: "Booki - Agence de voyage",
      subtitle: "Création d'un prototype de site web pour une plateforme de réservation d'hébergements et d'activités, développé en HTML et CSS. Ce site est responsive, s'adaptant à tous types d'écrans pour offrir une expérience utilisateur optimale.",
      imageUrl: "images/booki/booki_box.webp",
      largeImageUrl: [
        "images/booki/booki1.webp",
        "images/booki/booki2.webp",
        "images/booki/booki3.webp",
        "images/booki/booki4.webp",
        "images/booki/booki5.webp",
        "images/booki/booki6.webp",
        "images/booki/booki7.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP2",
    },
    { //sophie bluel
      id: 2,
      title: "Sophie Bluel - Portfolio Architecte",
      subtitle: "Développement du front-end d'un site portfolio pour une architecte d'intérieur, avec une interface dynamique en JavaScript et communication avec une API. Les tâches incluent la transformation de la galerie en version dynamique et la création d'une page de connexion admin sécurisée. Développement d'une modale pour gérer les travaux.",
      imageUrl: "images/sophiebluel/sophiebluel_box.webp",
      largeImageUrl: [
        "images/sophiebluel/sophiebluel1.webp",
        "images/sophiebluel/sophiebluel2.webp",
        "images/sophiebluel/sophiebluel3.webp",
        "images/sophiebluel/sophiebluel4.webp",
        "images/sophiebluel/sophiebluel5.webp",
        "images/sophiebluel/sophiebluel6.webp",
        "images/sophiebluel/sophiebluel7.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP3",
    },
    { //Nina Carducci
      id: 3,
      title: "Nina Carducci - Photographe",
      subtitle: "Optimisation du site web d'une photographe professionnelle pour améliorer son référencement SEO, incluant un audit avec Lighthouse et Wave. Amélioration des performances et de l'accessibilité. Intégration de l'optimisation du référencement local avec Schema.org, et l'ajout de métadonnées pour les réseaux sociaux. Développement de fonctionnalités pour la galerie.",
      imageUrl: "images/nina-carducci/ninacarducci_box.webp",
      largeImageUrl: [
        "images/nina-carducci/ninacarducci1.webp",
        "images/nina-carducci/ninacarducci2.webp",
        "images/nina-carducci/ninacarducci3.webp",
        "images/nina-carducci/ninacarducci4.webp",
        "images/nina-carducci/ninacarducci5.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP4_new_site",
    },
    { //Kasa
      id: 4,
      title: "Kasa - Location immobilière",
      subtitle: "Développement d'une application web de location immobilière entre particuliers avec React, React Router et SASS. Création d'une interface utilisateur moderne en utilisant des composants React, des Hooks, et en intégrant des données depuis un fichier JSON. Implémentation de la navigation entre les pages et respect fidèle de la maquette Figma pour le design.",
      imageUrl: "images/kasa/kasa_box.webp",
      largeImageUrl: [
        "images/kasa/kasa1.webp",
        "images/kasa/kasa1-1.webp",
        "images/kasa/kasa2.webp",
        "images/kasa/kasa2-2.webp",
        "images/kasa/kasa3.webp",
        "images/kasa/kasa3-3.webp",
        "images/kasa/kasa4.webp",
        "images/kasa/kasa4-4.webp",
        "images/kasa/kasa5.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP5_KASA",
    },
    { //Mon Vieux Grimoire
      id: 5,
      title: "Mon Vieux Grimoire - Notation de livres",
      subtitle: "Développement d'une plateforme de notation de livres avec un backend basé sur Node.js et Express, utilisant MongoDB pour une gestion efficace des données. Création d'un serveur back-end pour les opérations CRUD, avec sécurité des données et authentification des utilisateurs. Utilisation de Bcrypt pour le hachage des mots de passe, JWT pour les tokens, et DotEnv pour sécuriser les données sensibles.",
      imageUrl: "images/grimoire/grimoire_box.webp",
      largeImageUrl: [
        "images/grimoire/grimoire1.webp",
        "images/grimoire/grimoire2.webp", 
        "images/grimoire/grimoire3.webp",
        "images/grimoire/grimoire4.webp",
        "images/grimoire/grimoire5.webp",
        "images/grimoire/grimoire6.webp",
        "images/grimoire/grimoire7.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP6_Mon_Vieux_Grimoire",
    },
    { //Qwenta
      id: 6,
      title: "Menu maker by Qwenta",
      subtitle: "Gestion de projet agile avec la méthodologie Scrum, impliquant la planification des sprints et la création d'un tableau Kanban pour suivre l'avancement. Cette approche permet une flexibilité et une adaptation rapide aux changements, tout en favorisant la collaboration entre les membres de l'équipe. Utilisation d'outils de gestion de projet et veille technologique avec Feedly pour rester informé des tendances et des nouvelles technologies.",
      imageUrl: "images/qwenta/qwenta_box.webp",
      largeImageUrl: [
        "images/qwenta/qwenta1.webp", 
        "images/qwenta/qwenta2.webp",
        "images/qwenta/qwenta3.webp",
        "images/qwenta/qwenta4.webp",
        "images/qwenta/qwenta5.webp",
        "images/qwenta/qwenta6.webp",
        "images/qwenta/qwenta7.webp",
        "images/qwenta/qwenta8.webp",
        "images/qwenta/qwenta9.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP7_Qwenta",
    }
  ],


  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019",
        position: "Technicienne d'informatique",
        company: "MIF Maroc",
        details:
          "Support technique, Agile, Veille technologique.",
      },
      {
        id: 2,
        year: "2018",
        position: "Technicienne d'exploitation",
        company: "MIZU Maroc",
        details:
          "Support utilisateur, gestion des données, surveillance et dépannage, Agile.",
      },
      {
        id: 3,
        year: "2017",
        position: "Gestionnaire de base de données",
        company: "AXIATEK",
        details:
          "Support technique, gestion des données comptables, sécurité des données, reporting, veille réglementaire.",
      },
      {
        id: 3,
        year: "2016",
        position: "Développeuse informatique",
        company: "Trésorerie Générale du Royaume de Casablanca",
        details:
          "Analyse des besoins, proposition de solutions, audit du système, mise en œuvre, maintenance et mise à jour. ",
      },
      {
        id: 4,
        year: "2015",
        position: "Développeuse C#",
        company: "Ministère de l’Economie et des Finances - Administration des douanes et impôts indirects de Casablanca",
        details:
          "Développement d'une application de gestion de parc informatique avec C# et SQL Server.",
      },
    ],

    educationExperience: [
      {
        id: 1,
        year: "2024",
        graduation: "Développement Web",
        university: "OpenClassrooms",
        details:
          "Création des sites web, FrontEnd, Backend, Base de données, SEO, Gestion de projet, Agile.",
      },
      {
        id: 2,
        year: "2021",
        graduation: "Licence pro en Génie logiciel, système d'information et objets connectés (IoT)",
        university: "IUT Paris Descartes",
        details:
          "Programmation web, Méthodes Agile, Java, Environnement J2EE, PHP, MYSQL, Systèmes et réseaux, GIT, Linux.",
      },
      {
        id: 3,
        year: "2017",
        graduation: "Licence spécialité DBA (Administrateur de base de données)",
        university: "Institut spécialise de formation de l'Offshoring",
        details:
          "Conception de Base de données, Analyse de données, Oracle, SQL server, mySQL, postgreSQL, NO-SQL.",
      },
      {
        id: 4,
        year: "2015",
        graduation: "BTS en Développement Informatique",
        university: "Institut spécialisé de Technologie appliquée Arts Graphiques",
        details:
          "Techniques de développement web, programmation orientée objet, Algorithmes, Mathématiques-informatique, Base de données et conception de sites web dynamiques.",
      },
      {
        id: 5,
        year: "2013",
        graduation: "Licence de la matière Chimie",
        university: "Université Hassan II, Faculté de Sciences",
        details:
          "Thermodynamique, Thermochimie, Atomistique, Chimie des solutions, Analyse, Algebre, Mecanique du point, Electrostatique et Electrocinetique, Optique Geométrique, Liaison chimique.",
      },
      {
        id: 6,
        year: "2012",
        graduation: "Baccalaureat spécialité Physique-Chimie",
      },
    ],

    certificationsExperience: [
      // {
      //   id: 1,
      //   year: "2024",
      //   name: "Développeur Agile",
      //   company: "OpenClassrooms",
      //   // details: "https://openclassrooms.com/fr/course-certificates/1655706154"
      // },
      // {
      //   id: 2,
      //   year: "2024",
      //   name: "Green IT",
      //   company: "OpenClassrooms",
      //   // details: "https://openclassrooms.com/fr/course-certificates/8892857478"
      // },
      // {
      //   id: 3,
      //   year: "2024",
      //   name: "Node.js, Express et MongoDB",
      //   company: "OpenClassrooms",
      //   // details: "https://openclassrooms.com/fr/course-certificates/5467955629"
      // },
      // {
      //   id: 4,
      //   year: "2024",
      //   name: "React",
      //   company: "OpenClassrooms",
      //   // details: "https://openclassrooms.com/fr/course-certificates/3992926198"
      // },
      // {
      //   id: 5,
      //   year: "2024",
      //   name: "SASS",
      //   company: "OpenClassrooms",
      //   // details: "https://openclassrooms.com/fr/course-certificates/1796038214"
      // },
      // {
      //   id: 6,
      //   year: "2024",
      //   name: "JavaScript",
      //   company: "OpenClassrooms",
      //   // details: "https://openclassrooms.com/fr/course-certificates/3839013942"
      // },
      // {
      //   id: 7,
      //   year: "2024",
      //   name: "HTML5 & CSS3",
      //   company: "OpenClassrooms",
      //   // details: "https://openclassrooms.com/fr/course-certificates/3508424691"
      // },
      // {
      //   id: 8,
      //   year: "2024",
      //   name: "Git & GitHub",
      //   company: "OpenClassrooms",
      //   // details: "https://openclassrooms.com/fr/course-certificates/8225210198"
      // },
      {
        id: 9,
        year: "2024",
        name: "Analyse de données",
        company: "Microsoft & LinkedIn",
        // details: "https://www.linkedin.com/learning/certificates/59892a9da3583423db45cdbaa110ae82f9ab8c97c6111cd24e4149c9e144e038"
      },
      {
        id: 10,
        year: "2017",
        name: "Administering Microsoft SQL Server 2012/2014 Databases (MCSA) - 70-462",
        company: "Microsoft",
        // details: "Certification : G403-5863"
      },
      {
        id: 11,
        year: "2017",
        name: "Implementing a Data Warehouse with Microsoft SQL Server 2012/2014 (MCSA) - 70-463",
        company: "Microsoft",
        // details: "Certification : G403-5863"
      },
      {
        id: 12,
        year: "2017",
        name: "Querying Microsoft SQL Server 2012/2014 (MCP) - 70-461 ",
        company: "Microsoft",
        // details: "Certification  : GO50-2174"
      },
      {
        id: 13,
        year: "2014",
        name: "Microsoft Office Word 2010 - 77-881",
        company: "Microsoft",
        // details: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=120&cvid=2nhcOY024O+nydQZU5d4LQ=="
      },
    ],  
    
  },

  
  contactInfo: {
    phoneNumbers: ["+0600000000"],
    emailAddress: ["bellaf.sara@gmail.com"],
    address: "Paris, France",
  },
};



// API 
Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => { 
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
