import Mock from "../mock";

const database = {
  information: {
    name: "Sara Bellaf",
    aboutContent:
      "Développeur web passionné, je crée des expériences numériques innovantes et fonctionnelles pour transformer des idées en réalité.",
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
      pinterest: "",
      behance: "",
      dribbble: ""
    },
    brandImage: "/images/mon-portrait.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "/files/empty.pdf",
  },


  services: [
    {
      title: "Developpement Web",
      icon: "brush-alt",
      details:
        "Spécialisé dans les technologies web de pointe, je maîtrise HTML5, SASS, JavaScript et React pour créer des sites web performants et esthétiques. ",
    },
    {
      title: "Back end",
      icon: "code",
      details:
        "Développement backend, je crée des API performantes et évolutives en utilisant Node.js et MongoDB.",
    },
    {
      title: "Design Responsive",
      icon: "mobile",
      details:
        "Intégrant les principes de responsive design, je m'assure que chaque élément visuel s'adapte parfaitement aux différentes tailles d'écran, garantissant ainsi une navigation fluide et intuitive",
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
    {
      id: 1,
      title: "Mon Vieux Grimoire",
      subtitle: "Dévéloppement du backend qui repose sur Node.js et Express, offrant une base solide et évolutive, tandis que MongoDB assure une gestion efficace et flexible des données.",
      imageUrl: "/images/node-express-mongodb.jpg",
      largeImageUrl: ["/images/node-express-mongodb.jpg"],
      url: "https://github.com/saroubel/openclassroomsP6_Mon_Vieux_Grimoire",
    },
    {
      id: 2,
      title: "Kasa - Application web de location immobilière",
      subtitle: "Développement d'une application web de location immobilière entre particuliers avec React.",
      imageUrl: "/images/Kasa.png",
      largeImageUrl: [
        "/images/Kasa.png",
        "/images/Kasa-2.png",
        "/images/Kasa-3.png",
      ],
      url: "https://github.com/saroubel/openclassroomsP5_KASA",
    },
    {
      id: 3,
      title: "Projet Nina Carducci",
      subtitle: "Optimiser le site web d'une photographe professionnelle pour améliorer son référencement SEO.",
      imageUrl: "/images/Nina-Carducci.png",
      largeImageUrl: [
        "/images/Nina-Carducci.png",
        "/images/Nina-Carducci-2.png",
      ],
      url: "https://github.com/saroubel/openclassroomsP5_KASA",
    },
    {
      id: 4,
      title: "Portfolio Architecte Sophie Bluel",
      subtitle: "Développement du front-end d'un site portfolio pour une architecte d'intérieur.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://github.com/saroubel/openclassroomsP3",
    },
    {
      id: 5,
      title: "Booki",
      subtitle: "Création d'un prototype de site web pour une plateforme de réservation d'hébergements.",
      imageUrl: "/images/booki.png",
      largeImageUrl: [
        "/images/booki.png",
        "/images/booki-2.png",
        "/images/booki-3.png",
      ],
      url: "https://github.com/saroubel/openclassroomsP2",
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

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
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
