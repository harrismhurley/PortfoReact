import resumePDF from '../../assets/resume/resume.pdf';

function Resume() {
    return (
      <section className="my-5">
        <div className="my-2">
          <p>
            Download my <a href={resumePDF}>resume</a>
          </p>
          <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>HTML5</li>
            <li>CSS3 (Flexbox, Grid)</li>
            <li>JavaScript ES6+</li>
            <li>TypeScript</li>
            <li>React (Hooks, Context API)</li>
            <li>State Management (Redux, Zustand)</li>
            <li>Responsive Design (Mobile-first)</li>
            <li>UI Frameworks (Bootstrap, Material-UI)</li>
            <li>Testing (Jest, React Testing Library)</li>
            <li>Build Tools (Webpack, Babel, Vite)</li>
            <li>Version Control (Git, GitHub)</li>
          </ul>
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>APIs (RESTful, Authentication)</li>
            <li>Node.js (Asynchronous Programming)</li>
            <li>Express.js (Middleware, Routing)</li>
            <li>Database Management</li>
            <ul>
              <li>SQL (MySQL, PostgreSQL)</li>
              <li>ORM (Sequelize, TypeORM)</li>
              <li>NoSQL (MongoDB, DynamoDB)</li>
            </ul>
            <li>GraphQL (Schema Design, Resolvers)</li>
            <li>Serverless Architectures (AWS Lambda, Azure Functions)</li>
            <li>Caching (Redis, Memcached)</li>
            <li>Containerization (Docker, Kubernetes)</li>
            <li>CI/CD (GitHub Actions, Jenkins)</li>
            <li>Security (Best Practices)</li>
          </ul>
        </div>
      </section>
    );
}

export default Resume;
