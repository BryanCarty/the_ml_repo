import styles from "@/app/_styles/HeadingTwo.module.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function HeadingTwo({ text }) {
  return <h2 className={`${roboto.className} ${styles.heading}`}>{text}</h2>;
}
