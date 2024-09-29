import { Header } from "@/components/todo/Header/Header";
import { List } from "@/components/todo/List/List";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <List />
    </main>
  );
}
