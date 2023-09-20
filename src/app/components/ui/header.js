import Link from "next/link";
import classes from "./header.module.css";
import ImageAvatars from "./ui/avatar";
export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">AAA</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/feedback">Feedback</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <ImageAvatars />
          </li>
        </ul>
      </nav>
    </header>
  );
}
