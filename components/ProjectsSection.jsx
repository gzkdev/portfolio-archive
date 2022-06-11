import Link from "next/link";
import styles from "../styles/ProjectsSection.module.css";
import { ProjectsData } from "./AppData";

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <span className={styles.projects__title}>Projects</span>
        <div className={styles.projects__container}>
          {ProjectsData.map((project, index) => (
            <div key={index} className={styles.projects__item}>
              <div>
                <span className={styles.project__item__type}>
                  {project.type}
                </span>
                <h4>{project.name}</h4>
                <ul className={styles.project__tools}>
                  {project?.tools?.map((tool, idx) => (
                    <li key={idx}>{tool}</li>
                  ))}
                </ul>
                <p>{project.description}</p>
              </div>
              <div className={styles.projects__item__footer}>
                <a
                  className={styles.projects__item__link}
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  href={project.repo_url}
                  className={styles.project__item__code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link href="/projects">
          <a className={styles.projects__cta}>Projects Archive</a>
        </Link>
      </div>
    </section>
  );
}
