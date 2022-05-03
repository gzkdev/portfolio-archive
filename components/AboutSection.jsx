import styles from "../styles/About.module.css";

export default function AboutSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.about__container}>
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
              I&apos;m from Nigeria which means that sometimes I don&apos;t even
              need to get high to be high. You will feel the vibe when you are
              around me <i>I no dey stress am</i> ( I don&apos;t force good
              vibes).
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
              Also, I try to practice whatever I learn by building out small to
              medium projects that are littered on my Github account
            </p>
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
        </div>
      </div>
    </section>
  );
}
