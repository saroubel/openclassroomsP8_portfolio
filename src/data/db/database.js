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
    brandImage: "/images/portrait-sarabellaf.webp",
    aboutImage: "/images/about-sarabellaf.webp",
    aboutImageLg: "/images/about-sarabellaf-lg.webp",
    cvfile: "/files/CVtest.pdf",
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
      value: 100,
    },
    {
      title: "CSS3",
      value: 100,
    },
    {
      title: "Javascript",
      value: 80,
    },
    {
      title: "SASS",
      value: 90,
    },
    {
      title: "SEO",
      value: 90,
    },
    {
      title: "ReactJs",
      value: 80,
    },
    {
      title: "NodeJs",
      value: 75,
    },
    {
      title: "ExpressJs",
      value: 80,
    },
    {
      title: "MangoDB",
      value: 75,
    },
    {
      title: "Git",
      value: 90,
    },
    {
      title: "Oracle",
      value: 70,
    },
    {
      title: "SQL",
      value: 75,
    },
    {
      title: "Agile",
      value: 70,
    },
    {
      title: "Gestion de projet",
      value: 80,
    },
  ],


  portfolios: [
    { // Booki
      id: 1,
      title: "Booki - Agence de voyage",
      subtitle: "Création d'un prototype de site web pour une plateforme de réservation d'hébergements.",
      imageUrl: "/images/booki/booki_box.webp",
      largeImageUrl: [
        "/images/booki/booki1.webp",
        "/images/booki/booki2.webp",
        "/images/booki/booki3.webp",
        "/images/booki/booki4.webp",
        "/images/booki/booki5.webp",
        "/images/booki/booki6.webp",
        "/images/booki/booki7.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP2",
    },
    { //sophie bluel
      id: 2,
      title: "Sophie Bluel - Portfolio Architecte",
      subtitle: "Développement du front-end d'un site portfolio pour une architecte d'intérieur.",
      imageUrl: "/images/sophiebluel/sophiebluel_box.webp",
      largeImageUrl: [
        "/images/sophiebluel/sophiebluel1.webp",
        "/images/sophiebluel/sophiebluel2.webp",
        "/images/sophiebluel/sophiebluel3.webp",
        "/images/sophiebluel/sophiebluel4.webp",
        "/images/sophiebluel/sophiebluel5.webp",
        "/images/sophiebluel/sophiebluel6.webp",
        "/images/sophiebluel/sophiebluel7.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP3",
    },
    { //Nina Carducci
      id: 3,
      title: "Nina Carducci - Photographe",
      subtitle: "Optimiser le site web d'une photographe professionnelle pour améliorer son référencement SEO.",
      imageUrl: "/images/nina-carducci/ninacarducci_box.webp",
      largeImageUrl: [
        "/images/nina-carducci/ninacarducci1.webp",
        "/images/nina-carducci/ninacarducci2.webp",
        "/images/nina-carducci/ninacarducci3.webp",
        "/images/nina-carducci/ninacarducci4.webp",
        "/images/nina-carducci/ninacarducci5.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP4_new_site",
    },
    { //Kasa
      id: 4,
      title: "Kasa - Location immobilière",
      subtitle: "Développement d'une application web de location immobilière entre particuliers avec React.",
      imageUrl: "/images/kasa/kasa_box.webp",
      largeImageUrl: [
        "/images/Kasa/kasa1.webp",
        "/images/Kasa/kasa1-1.webp",
        "/images/Kasa/kasa2.webp",
        "/images/Kasa/kasa2-2.webp",
        "/images/Kasa/kasa3.webp",
        "/images/Kasa/kasa3-3.webp",
        "/images/Kasa/kasa4.webp",
        "/images/Kasa/kasa4-4.webp",
        "/images/Kasa/kasa5.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP5_KASA",
    },
    { //Mon Vieux Grimoire
      id: 5,
      title: "Mon Vieux Grimoire - Notation de livres",
      subtitle: "Dévéloppement du backend qui repose sur Node.js et Express, offrant une base solide et évolutive, tandis que MongoDB assure une gestion efficace et flexible des données.",
      imageUrl: "/images/grimoire/grimoire_box.webp",
      largeImageUrl: [
        "/images/grimoire/grimoire1.webp",
        "/images/grimoire/grimoire2.webp", 
        "/images/grimoire/grimoire3.webp",
        "/images/grimoire/grimoire4.webp",
        "/images/grimoire/grimoire5.webp",
        "/images/grimoire/grimoire6.webp",
        "/images/grimoire/grimoire7.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP6_Mon_Vieux_Grimoire",
    },
    { //Qwenta
      id: 6,
      title: "Menu maker by Qwenta",
      subtitle: "Gestion de projet agile.",
      imageUrl: "/images/qwenta/qwenta_box.webp",
      largeImageUrl: [
        "/images/qwenta/qwenta1.webp", 
        "/images/qwenta/qwenta2.webp",
        "/images/qwenta/qwenta3.webp",
        "/images/qwenta/qwenta4.webp",
        "/images/qwenta/qwenta5.webp",
        "/images/qwenta/qwenta6.webp",
        "/images/qwenta/qwenta7.webp",
        "/images/qwenta/qwenta8.webp",
        "/images/qwenta/qwenta9.webp",
      ],
      url: "https://github.com/saroubel/openclassroomsP7_Qwenta",
    }
  ],


  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Frontend Web Developer",
        company: "Abc Company",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Frontend Web Developer",
        company: "CBA Company",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "UI/UX Designer",
        company: "Example Company",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
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
          "Java, PHP, MYSQL, GIT, Agile",
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

// Mock.onGet("/api/reviews").reply((config) => {
//   const response = database.reviews;
//   return [200, response];
// });

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
