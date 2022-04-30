import styles from "../styles/About.module.css";

export default function AboutSection() {
  return (
    <section>
      <div className={styles.about__container}>
        <h2>About Me </h2>
        <div className={styles.about__story}>
          <span className={styles.about__story__title}>Personally 💙</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            dolore pariatur fugiat blanditiis molestias? Velit accusantium,
            rerum eum consequuntur, unde deserunt quas corporis molestias
            eveniet totam necessitatibus, vel alias quam commodi repellendus in?
            Minus, ullam maiores soluta sed ab quia assumenda voluptates laborum
            cum recusandae aperiam aliquam mollitia minima incidunt corrupti
            quibusdam quo quisquam ratione nihil! Dolore unde cum fugiat enim
            fuga commodi nam.
          </p>
          <a
            href="http://#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.about__story__link}
          >
            Learn more
          </a>
        </div>

        <div className={styles.about__story}>
          <span className={styles.about__story__title}>Technically 🛠</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            dolore pariatur fugiat blanditiis molestias? Velit accusantium,
            rerum eum consequuntur, unde deserunt quas corporis molestias
            eveniet totam necessitatibus, vel alias quam commodi repellendus in?
            Minus, ullam maiores soluta sed ab quia assumenda voluptates laborum
            cum recusandae aperiam aliquam mollitia minima incidunt corrupti
            quibusdam quo quisquam ratione nihil! Dolore unde cum fugiat enim
            fuga commodi nam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            dolore pariatur fugiat blanditiis molestias? Velit accusantium,
            rerum eum consequuntur, unde deserunt quas corporis molestias
            eveniet totam necessitatibus, vel alias quam commodi repellendus in?
            Minus, ullam maiores soluta sed ab quia assumenda voluptates laborum
            cum recusandae aperiam aliquam mollitia minima incidunt corrupti
            quibusdam quo quisquam ratione nihil! Dolore unde cum fugiat enim
            fuga commodi nam.
          </p>
        </div>

        <div className={styles.about__story}>
          <span className={styles.about__story__title}>Academically 🎓</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            dolore pariatur fugiat blanditiis molestias? Velit accusantium,
            rerum eum consequuntur, unde deserunt quas corporis molestias
            eveniet totam necessitatibus, vel alias quam commodi repellendus in?
            Minus, ullam maiores soluta sed ab quia assumenda voluptates laborum
            cum recusandae aperiam aliquam mollitia minima incidunt corrupti
            quibusdam quo quisquam ratione nihil! Dolore unde cum fugiat enim
            fuga commodi nam.
          </p>
        </div>

        <div className={styles.about__story}>
          <span className={styles.about__story__title}>Extras 🎮</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            dolore pariatur fugiat blanditiis molestias? Velit accusantium,
            rerum eum consequuntur, unde deserunt quas corporis molestias
            eveniet totam necessitatibus, vel alias quam commodi repellendus in?
            Minus, ullam maiores soluta sed ab quia assumenda voluptates laborum
            cum recusandae aperiam aliquam mollitia minima incidunt corrupti
            quibusdam quo quisquam ratione nihil! Dolore unde cum fugiat enim
            fuga commodi nam.
          </p>
        </div>
      </div>
    </section>
  );
}
