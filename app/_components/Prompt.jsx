import styles from "@/app/_styles/Prompt.module.css";
import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
});

export default function Prompt({ text }) {
  return (
    <div className={`${styles.prompt} ${courierPrime.className}`}>{text}</div>
  );
}
