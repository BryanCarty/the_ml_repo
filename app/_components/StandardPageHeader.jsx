import styles from "@/app/_styles/StandardPageHeader.module.css";
import logoSvg from "@/app/_assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
});

export default function () {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.leftOfHeader}>
        <Link className={styles.logo} href="/">
          <Image src={logoSvg} alt="A robot logo" priority />
          <h1 className={`${courierPrime.className} ${styles.typedSiteName}`}>
            The ML Repo
          </h1>
        </Link>
      </div>
      <div className={styles.rightOfHeader}>
        <Link
          className={`${styles.navButton} ${courierPrime.className}`}
          href="/"
        >
          About
        </Link>
      </div>
    </header>
  );
}
