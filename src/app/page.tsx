import SiteTwo from "app/SiteTwo";
import styles from "app/page.module.css";
import ThemeSwitch from "components/common/ThemeSwitch/ThemeSwitch";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="w-full flex justify-end gap-4 p-12 border dark:border-slate-100 dark:bg-black-darkCardBg">
        <p>Switch Modes:</p>
        <ThemeSwitch />
      </div>
      <SiteTwo />
    </main>
  );
}
