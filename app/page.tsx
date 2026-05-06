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
    { title: "My Gene Evolution System", genre: "Fantasy - Action - Sci-fi", image: "/images/my_gene_evolution_system.jpeg" },
    { title: "Blood and Ash", genre: "Fantasy - Mystery - Horror", image: "/images/blood_and_ash.jpeg" },
    { title: "Godfiend", genre: "Fantasy - Action - Transmigration", image: "/images/godfiend.png" },
    { title: "Warzone", genre: "Fantasy - Action - Horror", image: "/images/warzone.png" },
    { title: "The Failed Swordsman", genre: "Fantasy - Action - Magic", image: "/images/the_failed_swordsman.png" },
    { title: "Heir of Montenegro", genre: "Modern - Action", image: "/images/heir_of_montenegro.png" },
    { title: "Signed by Desire", genre: "Romance - Modern", image: "/images/signed_by_desire.png" },
    { title: "The Ultimate Technomancer", genre: "Fantasy - Action - Magic", image: "/images/the_ultimate_technomancer.png" },
    { title: "The Occultist", genre: "Fantasy - Action - Horror", image: "/images/the_occultist.png" },
    { title: "Once the Gentleman", genre: "Fantasy - Action - Modern", image: "/images/once_the_gentleman.png" },
    { title: "Crazy CEO", genre: "Modern - Romance", image: "/images/crazy_ceo.png" }
  ];

  return (
    <div className={styles.main}>
      <Head>
        <title>HOME Author | Xavier Daloonwarr</title>
        <meta name="description" content="Speculative Fiction Author and Dark Manga Scriptwriter." />
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
          <h1 className={styles.heroTitle}>Speculative Fiction Author and Dark Manga Scriptwriter</h1>
          <p className={styles.heroSubtitle}>
            World-Builder and Scriptwriter for the Sovereign Virtual Haven. Crafting pulse-pounding epics at the intersection of AI and human survival.
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
                {novel.image ? (
                  <Image src={novel.image} alt={novel.title} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#2a2a30' }}></div>
                )}
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
            <h2 className={styles.sectionTitle} style={{ left: '0', transform: 'none' }}>About the Author</h2>
            <p>
              Xavier is an architect of speculative worlds, operating at the precise intersection of technical systems and dark, atmospheric fiction. His work explores the visceral boundaries between humanity and artificial intelligence, often plunging readers into gritty post-apocalyptic landscapes and complex urban transmigration epics.
            </p>
            <p>
              Influenced by the sharp, high-contrast aesthetics of dark manga and the structural rigor of engineering, Xavier approaches storytelling as both a creative pursuit and a systemic design. Every narrative is built on a foundation of internal logic, where the mechanics of the universe—from the cold calculations of orbital physics to the specific dynamics of combat—are as vital as the characters themselves.
            </p>
            <p>
              Specializing in &quot;slow-burn&quot; lore and high-stakes tension, Xavier crafts immersive ecosystems that challenge perceptions of survival and sovereignty. Whether through expansive webnovels or cinematic manga scripts, his work is dedicated to building sovereign virtual havens for readers who seek complexity, grit, and pulse-pounding depth.
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
