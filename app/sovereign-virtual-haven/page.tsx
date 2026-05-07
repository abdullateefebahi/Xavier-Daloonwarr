import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../page.module.css';

export default function SovereignVirtualHaven() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Sovereign Virtual Haven | Xavier Daloonwarr</title>
        <meta name="description" content="Explore the Sovereign Virtual Haven by Xavier Daloonwarr." />
      </Head>

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/xavier_logo.jpg" alt="Logo" width={40} height={40} className={styles.headerLogo} />
          XAVIER<span>DALOONWARR</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Back to Home</Link>
        </nav>
      </header>

      <section className={styles.hero} style={{ backgroundImage: 'url(/images/hero.png)' }}>
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContent} animate-fade-in`}>
          <h1 className={styles.heroTitle}>Sovereign Virtual Haven</h1>
          <p className={styles.heroSubtitle}>
            A pulse-pounding epic at the intersection of technology and human survival.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contentGrid}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Welcome to the Haven</h2>
            <p>
              The Sovereign Virtual Haven is an expansive universe where the boundaries of reality and the digital realm blur.
              Here, survival isn't just about physical endurance—it's about mastering the systems that govern existence.
            </p>
            <p>
              Crafted with meticulous attention to world-building, lore, and high-stakes tension, this universe challenges
              readers to explore the deepest facets of humanity, artificial intelligence, and what it truly means to be sovereign.
            </p>
            <p>
              Stay tuned for more updates, interactive lore, and deep dives into the ecosystem of the Sovereign Virtual Haven.
            </p>

            <Link href="/" className={styles.ctaButton} style={{ marginTop: '2rem', display: 'inline-block' }}>
              Return Home
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/" className={styles.logo} style={{ marginBottom: '1.5rem', justifyContent: 'center', display: 'flex' }}>
          XAVIER<span>DALOONWARR</span>
        </Link>
        <p className={styles.footerText}>© {new Date().getFullYear()} by Xavier Daloonwarr. All rights reserved.</p>
      </footer>
    </div>
  );
}
