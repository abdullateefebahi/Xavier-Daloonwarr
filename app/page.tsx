"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const novels = [
    { title: "My Gene Evolution System", genre: "Fantasy - Action - Sci-fi" },
    { title: "Blood and Ash", genre: "Fantasy - Action - Modern" },
    { title: "Godfiend", genre: "Fantasy - Action - Transmigration" },
    { title: "Warzone", genre: "Fantasy - Action - Horror" },
    { title: "The Failed Swordsman", genre: "Fantasy - Action - Magic" },
    { title: "Heir of Montenegro", genre: "Modern - Action" },
    { title: "Signed by Desire", genre: "Romance - Modern" },
    { title: "The Ultimate Technomancer", genre: "Fantasy - Action - Magic" },
    { title: "The Occultist", genre: "Fantasy - Action - Horror" },
    { title: "Once the Gentleman", genre: "Fantasy - Action - Modern" },
    { title: "Crazy CEO", genre: "Modern - Romance" }

  ];

  return (
    <div className={styles.main}>
      <Head>
        <title>HOME Author | Xavier Daloonwarr</title>
        <meta name="description" content="Top selling Author Xavier Daloonwarr with over 15 million book sales. Check out their other works including My vampire system and merchandise." />
      </Head>

      {/* Header Navigation */}
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <a href="#home" className={styles.logo}>
          <Image src="/images/xavier_logo.jpg" alt="Logo" width={40} height={40} className={styles.headerLogo} />
          XAVIER<span>DALOONWARR</span>
        </a>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <a href="#home" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#novels" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Novels</a>
          <a href="#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About Me</a>
          <a href="https://www.patreon.com/XavierDALOONWARR" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Patreon</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className={styles.hero} style={{ backgroundImage: 'url(/images/hero.png)' }}>
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContent} animate-fade-in`}>
          <h1 className={styles.heroTitle}>Top Selling Author</h1>
          <p className={styles.heroSubtitle}>
            UK-based, New York Times-bestselling LitRPG author Xavier Daloonwarr. With fifteen million copies sold globally.
          </p>
          <a href="#novels" className={styles.ctaButton}>Explore Works</a>
        </div>
      </section>

      {/* Novels Section */}
      <section id="novels" className={styles.section}>
        <h2 className={styles.sectionTitle}>Novels by Xavier Daloonwarr</h2>
        <div className={styles.grid}>
          {novels.map((novel, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                {/* Placeholder for book covers, can be replaced with next/image */}
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardGenre}>{novel.genre}</div>
                <h3 className={styles.cardTitle}>{novel.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImageWrapper}>
            <Image
              src="/images/xavier_logo.jpg"
              alt="Xavier Daloonwarr Author Portrait"
              width={500}
              height={500}
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle} style={{ left: '0', transform: 'none' }}>About Me</h2>
            <p>
              UK-based, New York Times-bestselling LitRPG author Xavier Daloonwarr is known for series like My Vampire System, My Dragon System, and My Werewolf System.
            </p>
            <p>
              Here you can find various links to all my works, and information such as where to start reading in my System/Talen Series and upcoming productions.
            </p>
            <a href="https://www.patreon.com/XavierDALOONWARR" target="_blank" rel="noopener noreferrer" className={styles.ctaButton} style={{ marginTop: '1rem' }}>
              Support on Patreon
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <a href="#home" className={styles.logo} style={{ marginBottom: '1.5rem', justifyContent: 'center', display: 'flex' }}>
          XAVIER<span>DALOONWARR</span>
        </a>

        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/xavierdaloowarr" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61570757602681" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
          <a href="https://discord.gg/EyNxxbdWt" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Discord</a>
        </div>

        <p className={styles.footerText}>© {new Date().getFullYear()} by Xavier Daloonwarr. All rights reserved.</p>
      </footer>
    </div>
  );
}
