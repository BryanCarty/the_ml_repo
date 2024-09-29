import styles from "@/app/_styles/FullLengthParagraph.module.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function FullLengthParagraph({ text }) {
  return <h1 className={`${roboto.className} ${styles.paragraph}`}>{text}</h1>;
}
