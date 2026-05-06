"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';

type Novel = { title: string; genre: string; image: string; status: string; link?: string };

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedNovel, setSelectedNovel] = useState<Novel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNovel = (novel: Novel) => {
    setSelectedNovel(novel);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNovel = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedNovel(null);
      document.body.style.overflow = 'auto';
    }, 400); // Matches the CSS transition duration
  };

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

  const novels: Novel[] = [
    { title: "My Gene Evolution System", genre: "Fantasy - Action - Sci-fi", image: "/images/my_gene_evolution.png", status: "Started, Publishing, On Hiatus", link: "https://wbnv.in/a/a6iHw2J" },
    { title: "Blood and Ash", genre: "Fantasy - Mystery - Horror", image: "/images/blood_and_ash.png", status: "Started, Publishing, Ongoing", link: "https://wbnv.in/a/99jmMnv" },
    { title: "Godfiend", genre: "Fantasy - Action - Transmigration", image: "/images/godfiend.png", status: "Coming Soon!" },
    { title: "Warzone", genre: "Fantasy - Action - Horror", image: "/images/warzone.png", status: "Coming Soon!" },
    { title: "The Failed Swordsman", genre: "Fantasy - Action - Survival", image: "/images/the_failed_swordsman.png", status: "Coming Soon!" },
    { title: "Heir of Montenegro", genre: "Modern - Action", image: "/images/heir_of_montenegro.png", status: "Coming Soon!" },
    { title: "Signed by Desire", genre: "Romance - Modern", image: "/images/signed_by_desire.png", status: "Coming Soon!" },
    { title: "The Ultimate Technomancer", genre: "LitRPG - Action - Magic", image: "/images/the_ultimate_technomancer.png", status: "Coming Soon!" },
    { title: "The Occultist", genre: "Fantasy - Action - Horror", image: "/images/the_occultist.png", status: "Coming Soon!" },
    { title: "Once the Gentleman", genre: "Fantasy - Action - Horror", image: "/images/once_the_gentleman.png", status: "Coming Soon!" },
    { title: "Crazy CEO", genre: "Modern - Romance", image: "/images/crazy_ceo.png", status: "Coming Soon!" }
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
            <div key={index} className={styles.card} onClick={() => openNovel(novel)} style={{ cursor: 'pointer' }}>
              <div className={styles.cardImageWrapper}>
                {novel.image ? (
                  <Image src={novel.image} alt={novel.title} fill style={{ objectFit: 'contain' }} />
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
          <a href="mailto:abdullateefebahi@gmail.com" className={styles.socialLink}>Email</a>
        </div>

        <p className={styles.footerText}>© {new Date().getFullYear()} by Xavier Daloonwarr. All rights reserved.</p>
      </footer>

      {/* Novel Modal */}
      <div className={`${styles.modalOverlay} ${isModalOpen ? styles.modalOpen : ''}`} onClick={closeNovel}>
        <div className={`${styles.modalContent} ${isModalOpen ? styles.modalContentOpen : ''}`} onClick={(e) => e.stopPropagation()}>
          <button className={styles.modalClose} onClick={closeNovel}>&times;</button>
          {selectedNovel && (
            <div className={styles.modalBody}>
              <div className={styles.modalImageWrapper}>
                {selectedNovel.image ? (
                  <Image src={selectedNovel.image} alt={selectedNovel.title} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#2a2a30' }}></div>
                )}
              </div>
              <div className={styles.modalInfo}>
                <div className={styles.modalGenre}>{selectedNovel.genre}</div>
                <h2 className={styles.modalTitle}>{selectedNovel.title}</h2>
                <p className={styles.modalDescription}>
                  Dive into the gripping world of {selectedNovel.title}. A masterful tale exploring the depths of {selectedNovel.genre.split(' - ')[0].toLowerCase()} and intense action.
                </p>
                <a 
                  href={selectedNovel.status === "Coming Soon!" ? undefined : (selectedNovel.link || "#")} 
                  target={selectedNovel.link ? "_blank" : undefined}
                  rel={selectedNovel.link ? "noopener noreferrer" : undefined}
                  className={styles.ctaButton} 
                  style={{ 
                    marginTop: '1.5rem', 
                    display: 'inline-block',
                    opacity: selectedNovel.status === "Coming Soon!" ? 0.6 : 1,
                    cursor: selectedNovel.status === "Coming Soon!" ? "not-allowed" : "pointer"
                  }}
                >
                  {selectedNovel.status === "Coming Soon!" ? "Coming Soon" : "Read More"}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
