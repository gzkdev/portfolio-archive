import styles from "../styles/About.module.css";
import AboutHeader from "./AboutHeader";
import { JourneyData, OpportunitiesData, SkillsData } from "./AppData";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className="container">
        <AboutHeader data={OpportunitiesData} />
        <section className={styles.about__journey}>
          <h2>My skills</h2>
          {SkillsData.map((type) => (
            <>
              <div className={styles.about__list__container}>
                <span className={styles.about__title}>{type.title}</span>
                <ul className={styles.about__opportunities}>
                  {type.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </section>

        <section className={styles.about__journey}>
          <h2>My Journey </h2>
          {JourneyData.map((journey) => (
            <>
              <div className={styles.journey__story}>
                <div className={styles.story__icon}>{journey.icon}</div>
                <div className={styles.story__content}>
                  <h4 className={styles.story__title}>{journey.title}</h4>
                  <small className={styles.story__timeline}>
                    {journey.timeline}
                  </small>

                  <div className={styles.story__text}>
                    {journey.story.map((story) => (
                      <>
                        <p>{story}</p>
                      </>
                    ))}
                  </div>

                  {journey.list && (
                    <>
                      <div className={styles.story__list_container}>
                        <span>{journey.list.title}</span>
                        <ul className={styles.story__list}>
                          {journey.list.items.map((item) => (
                            <>
                              <li>
                                <a href={item.url}>{item.title}</a>
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ))}
        </section>
      </div>
    </section>
  );
}
