import styles from "@/app/_styles/Article.module.css";

export default function Article({ children }) {
  return <div className={styles.article}>{children}</div>;
}
