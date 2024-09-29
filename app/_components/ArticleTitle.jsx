import styles from "@/app/_styles/ArticleTitle.module.css";

import { Courier_Prime } from "next/font/google";
import heart from "@/app/_assets/heart_2.svg";
import comment from "@/app/_assets/comments.svg";
import Link from "next/link";
import Image from "next/image";

const courierPrime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
});

export default function ({ series, title, position, likes, comments }) {
  return (
    <div className={styles.title}>
      <div className={`${styles.titleTopRow} ${courierPrime.className}`}>
        <Link
          className={`${styles.directoryElement} ${styles.directoryLink}`}
          href="/"
        >
          How Machine Learning Models Learn
        </Link>
        <div className={`${styles.directoryElement}`}>/</div>
        <Link
          className={`${styles.directoryElement} ${styles.directoryLink}`}
          href="/"
        >
          Mechanisms of Learning
        </Link>
        <div className={`${styles.directoryElement}`}>(1/25)</div>
      </div>
      <div className={styles.titleCenterRow}>
        <h1 className={`${courierPrime.className} ${styles.titleText}`}>
          Mechanisms of Learning
        </h1>
      </div>
      <div className={styles.titleBottomRow}>
        <div className={`${styles.articleComment} ${courierPrime.className}`}>
          <Image
            className={`${styles.titleIcon} ${styles.commentIcon}`}
            src={comment}
            alt="A comments icon"
            priority
            width={40}
            height={40}
          />
          (6 Comments)
        </div>
        <div className={`${styles.articleLike} ${courierPrime.className}`}>
          <Image
            className={`${styles.titleIcon} ${styles.heartIcon}`}
            src={heart}
            alt="A heart icon"
            priority
            width={40}
            height={40}
          />
          (18 Likes)
        </div>
      </div>
    </div>
  );
}
