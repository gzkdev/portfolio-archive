import styles from "../styles/WorkSection.module.css";
import { ProjectsCatalogueData } from "./AppData";

export default function WorkSection() {
  return (
    <section className={styles.work__section}>
      <div className={styles.work__container}>
        <h2>Works</h2>
        <p>A catalogue of interesting stuff I&apos;ve built</p>
        <div className={styles.work__catalogue}>
          <div className={styles.catalogue__item}>
            <div className={styles.item__year}>Year</div>
            <div className={styles.item__title}>Title</div>
            <div className={styles.item__location} data-viewport>
              Type
            </div>
            <div className={styles.item__stack} data-viewport>
              Built with
            </div>
            <div className={styles.item__link}>Link</div>
          </div>

          {ProjectsCatalogueData.map((work, index) => (
            <div key={index} className={styles.catalogue__item}>
              <div className={styles.item__year}>{work.year}</div>
              <div className={styles.item__title}>{work.title}</div>
              <div className={styles.item__location} data-viewport>
                {work.context}
              </div>
              <ul className={styles.item__stack} data-viewport>
                {work.stack.map((stack, index) => (
                  <li key={index}>{stack}</li>
                ))}
              </ul>
              <div className={styles.item__link}>
                <a href={work.live_url}> ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
