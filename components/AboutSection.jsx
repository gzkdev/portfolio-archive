import styles from "../styles/About.module.css";
import { JourneyData, OpportunitiesData, SkillsData } from "./AppData";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className="about__intro">
          <div className={styles.about__thumbnail}></div>
          <h3 className={styles.about__name}>Godswill Ezihe</h3>
          <div className={styles.about__details}>
            <small>Frontend software engineer</small>
            <button>Follow</button>
          </div>
          <p className={styles.about__essay}>
            I&apos;m in love with making and breaking things and that&apos;s one
            the reasons I chose to become a software engineer. Naturally,
            I&apos;m a very cool person that you&apos;d definitely want to be
            hang out with.
          </p>
          <div className={styles.about__list__container}>
            <span className={styles.about__title}>
              {OpportunitiesData.title}
            </span>
            <ul className={styles.about__opportunities}>
              {OpportunitiesData.list.map((item) => (
                <>
                  <li>{item}</li>
                </>
              ))}
            </ul>
          </div>

          <section className={styles.about__journey}>
            <h2>My skills</h2>
            {SkillsData.map((type) => (
              <>
                <div className={styles.about__list__container}>
                  <span className={styles.about__title}>{type.title}</span>
                  <ul className={styles.about__opportunities}>
                    {type.list.map((item) => (
                      <>
                        <li>{item}</li>
                      </>
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
      </div>
    </section>
  );
}
