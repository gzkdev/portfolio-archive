import { useState, useEffect } from "react";
import styles from "../styles/Loader.module.css";

function Loader({ text }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <div data-loading={!isLoading && "true"} className={styles.loader}>
      <span>{text}</span>
    </div>
  );
}

export default Loader;
