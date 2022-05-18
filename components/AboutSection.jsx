import styles from "../styles/About.module.css";

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
        </div>
        {/* <div className={styles.about__container}>
          <span className={styles.about__title}>About me</span>
          <h2>Get to know me</h2>
          <div className={styles.about__story}>
            <span className={styles.about__story__title}>Personally 💙</span>
            <p>
              First of all, my name is Godswill Ezihe Okechukwu (Most times my
              nickname is Bobby). If you wonder what the {'"gzk"'} you see on
              almost on my profiles mean, then you just need to relax I&apos;ll
              explain it to you innabit.
            </p>
            <p>
              The truth is that there isn&apos;t anything special about the{" "}
              {'"gzk"'}, it is just a combination of the first consonants of my
              real names (Godswill eZihe oKechukwu). You get it now? if you
              don&apos;t get it forget about it.
            </p>
            <p>
              I&apos;m in love with making and breaking things and that&apos;s
              one the reasons I chose to become a software engineer. Naturally,
              I&apos;m a very cool person that you&apos;d definitely want to be
              hang out with.
            </p>
            <p>
              Although I&apos;m naturally introverted, you don&apos;t dare stay
              bored around me. It just cannot happen, mark it somewhere, Lol.
            </p>
          </div>

          <div className={styles.about__story}>
            <span className={styles.about__story__title}>Technically 🛠</span>
            <p>
              My journey as a software engineer started in 2018 when a close
              friend first introduced me to computers. He used to code in Python
              (a programming Language) those days and I can&apos;t forget how
              amazed I felt the first time I saw things move on the screen when
              someone in real life used the command line interface. At this
              point, I was seeing him as an Idol but he didn&apos;t know.
            </p>
            <p>
              I never was serious with learning how to code until 2020, it was
              largely because I wasn&apos;t computer literate as of then and I
              didn&apos;t have access to my own computer.
            </p>
            <p>
              The year was 2020, I just started my first semester at Nnamdi
              Azikiwe University where I was studying Pharmacy. Around February,
              the Academic Union of Nigerian Universities went on strike and the
              covid19 crisis followed suit which made students stay at home for
              almost a year.
            </p>
            <p>
              It was during the covid19 pandemic that I took coding seriously, I
              taught myself HTML and CSS thoroughly and started writing little
              JavaScript for my applications and websites. By October 2020, I
              got my first internship at Silicon Africa LLC (a digital agency)
              in South East. My experience at this Silicon Africa was a rich one
              I can&apos;t stop talking about.
            </p>
            <p>
              Fast forward to 2021, the long strike by the Academic Union was
              called off and I went back to school. Around February this period,
              I took a course on product design and interned at Utiva Inc as a
              product designer. This experience exposed me to solid UX design
              principles and helped me develop a better perspective towards
              building user-focused products as a frontend engineer
            </p>
            <p>
              We are now here in 2022, at this point I focus more of my time
              learning more of React, JavaScript, Math, Computer Science, Data
              Structures and Algorithms.
            </p>
            <p>
              Also, I practice whatever I learn by building simple to medium
              sized projects which are littered all over my Github account
            </p>
            <a
              className={styles.about__story__link}
              href="http://github.com/gzkdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              See my Github
            </a>
          </div>

          <div className={styles.about__story}>
            <span className={styles.about__story__title}>Academically 🎓</span>
            <p>
              I have quite an excellent academic reccord from childhood to the
              university. Currently, I&apos;m a 300 level student of Nnamdi
              Azikiwe University, Nigeria where I&apos;m studying Pharmacy (GPA
              4.65/5).
            </p>
            <p>
              Going back to high school days, in the year 2017, I represented my
              State at the CSN (Chemical Society of Nigeria) National
              competition where I unfortunately came back with nothing at the
              final round.
            </p>
            <p>
              These days, I teach my self Computer science (Harvard CS50
              course), Math (MIT Opencourseware) and Algorithms (Youtube, Udemy
              & Leetcode) while at school with the aim to be a better software
              engineer
            </p>
          </div>

          <div className={styles.about__story}>
            <span className={styles.about__story__title}>Extras 🎮</span>
            <p>
              I enjoy working out at the Gym to stay fit, playing video games,
              watching football matches, seeing movies (I started seeing movies
              recently). Also, if you play table tennis please don&apos;t
              declare yourself champion until you meet me.
            </p>
            <p>
              If you enjoy Anime series then I consider you family 💙. This
              world would be very boring without people like you.
            </p>
            <p>
              I plan to travel to exotic locations around the globe and try
              crazy stunts like sky diving, bunjee jumping (if I got the
              spelling right this time 😅) , hiking, etc but my pockets are yet
              to agree with my on my dreams.
            </p>
            <p>
              Please don&apos;t forget I&apos;m open to opportunities to learn
              and build useful software as a frontend engineer
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
