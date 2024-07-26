import { useState } from "react";
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'TextFlex',
            description: 'Webpack PWA',
            link: "https://textflex.onrender.com/",
            repo: "https://github.com/harrismhurley/TextFlex"
        },
        {
            name: 'SocialSphere',
            description: 'bcrypt/PSQL',
            link: "https://socialsphere-63b8.onrender.com",
            repo: "https://github.com/harrismhurley/SocialSphere"
        },
        {
            name: 'JotSpot',
            description: 'Express Web App',
            link: "https://jotspot-bf8s.onrender.com/notes",
            repo: "https://github.com/harrismhurley/JotSpot"
        },
        {
            name: 'TaskManager',
            description: 'JavaScript/JQueryUI',
            link: "https://harrismhurley.github.io/Task_ManagerHQ/",
            repo: "https://github.com/harrismhurley/Task_ManagerHQ"
        },
        {
            name: 'WhiteSandBeachBlog',
            description: 'Javssctipt/CSS',
            link: "https://harrismhurley.github.io/White-Sand-Beach-Blog/",
            repo: "https://github.com/harrismhurley/White-Sand-Beach-Blog"
        },
    ]);

    
    return (
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
      );
};

export default Portfolio;