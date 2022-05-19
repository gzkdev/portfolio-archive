import { useState, useEffect } from "react";
import styles from "../styles/Loader.module.css";

function Loader({ text, chinese }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <div data-loading={!isLoading && "true"} className={styles.loader}>
      <span>{chinese}</span>
      <div>{text}</div>
    </div>
  );
}

export default Loader;
