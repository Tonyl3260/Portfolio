const projects = [{
        title: "Unionizer",
        description: "A full-stack platform with E2EE to facilitate union organizing using real-time chat and subchannels for different workplace",
        image: "public/cpp.png",
        technologies: ["React", "Node.js", "Postgresql", "Express", "Next.js", "Firebase", "TypeScript", "E2EE"],
        githubLink: "https://github.com/Tonyl3260/workplace-unionizer-frontend",
        liveLink: "https://project1-demo.com"
    },
    {
        title: "meatmeal",
        description: "meatmeal is a web application that allows users to search for recipes by entering available ingredients that they already have at home.",
        image: "public/cpp.png",
        technologies: ["React", "Node.js", "Rest API"],
        githubLink: "https://github.com/Tonyl3260/meatmeal",
        liveLink: "https://project3-demo.com"
    },
    {
        title: "College Search",
        description: " A full-stack web app allowing users to search and manage favored universities with full CRUD functionality.",
        image: "public/cpp.png",
        technologies: ["React", "Node.js", "Rest API", "Postgresql", "Express", "Javascript"],
        githubLink: "https://github.com/Shion1314/FProject_Frontend",
        liveLink: "https://project3-demo.com"
    },
    {
        title: "Portfolio",
        description: "My porfolio show casing my passion for web development, and application development throught my projects and experiences.",
        image: "public/cpp.png",
        technologies: ["Html", "Css", "Sass", "JavaScript"],
        githubLink: "https://github.com/Tonyl3260/Portfolio",
        liveLink: "https://tonyl3260.netlify.app/"
    }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-technologies">
          ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.githubLink}" target="_blank">GitHub</a>
    
        </div>
      </div>
    `;

    //<a href="${project.liveLink}" target="_blank">Live Demo</a>
    projectsContainer.appendChild(projectCard);
});