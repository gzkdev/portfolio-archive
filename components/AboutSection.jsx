import styles from "../styles/About.module.css";
import { JourneyData } from "./AppData";

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
              I&apos;m available for Opportunities in...
            </span>
            <ul className={styles.about__opportunities}>
              <li>Frontend engineering</li>
              <li>Open source</li>
              <li>Product engineering</li>
              <li>UI development</li>
              <li>UI design</li>
              <li>Technical writing</li>
            </ul>
          </div>

          <div className={styles.about__list__container}>
            <span className={styles.about__title}>Languages</span>
            <ul className={styles.about__opportunities}>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>JavaScript(ES6)</li>
              <li>TypeScript</li>
              <li>Python</li>
            </ul>
          </div>

          <div className={styles.about__list__container}>
            <span className={styles.about__title}>Frameworks & Libraries</span>
            <ul className={styles.about__opportunities}>
              <li>React</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
              <li>Framer motion</li>
              <li>GSAP</li>
              <li>Express</li>
            </ul>
          </div>

          <div className={styles.about__list__container}>
            <span className={styles.about__title}>Tools</span>
            <ul className={styles.about__opportunities}>
              <li>Git/Github</li>
              <li>Netlify</li>
              <li>Firebase</li>
              <li>Vercel</li>
              <li>NPM</li>
              <li>Node</li>
            </ul>
          </div>

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
