import { useState, useEffect } from "react";
import styles from "../styles/Loader.module.css";

function Loader({ text, chinese }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  return (
    <div data-loading={!isLoading && "true"} className={styles.loader}>
      <div>{text}</div>
      <span>{chinese}</span>
    </div>
  );
}

export default Loader;
