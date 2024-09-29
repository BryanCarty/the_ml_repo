import styles from "@/app/_styles/PromptRow.module.css";

export default function PromptRow({ children }) {
  return <div className={styles.row}>{children}</div>;
}
