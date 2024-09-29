import styles from "@/app/_styles/HeadingOne.module.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function HeadingOne({ text }) {
  return <h1 className={`${roboto.className} ${styles.heading}`}>{text}</h1>;
}
