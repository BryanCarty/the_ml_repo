import styles from "@/app/_styles/PromptSection.module.css";
export default function PromptSection({ children }) {
  return <div className={styles.promptSection}>{children}</div>;
}
