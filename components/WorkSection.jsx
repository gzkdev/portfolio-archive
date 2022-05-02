import styles from "../styles/WorkSection.module.css";

export default function WorkSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.work__container}>
          <h2>Works</h2>
          <p>A catalogue of interesting stuff I&apos;ve built</p>
          <div className={styles.work__catalogue}>
            <div className={styles.catalogue__item}>
              <div className={styles.item__year}>Year</div>
              <div className={styles.item__title}>Title</div>
              <div className={styles.item__location} data-viewport>
                Made at
              </div>
              <div className={styles.item__stack} data-viewport>
                Built
              </div>
              <div className={styles.item__link}>Link</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
