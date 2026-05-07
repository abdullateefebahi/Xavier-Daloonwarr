"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './reader.module.css';

// Placeholder data for the reader
const chapterData = {
  title: "Sovereign Virtual Haven",
  chapterNumber: 1,
  chapterTitle: "The Awakening",
  pages: [
    "/images/placeholder-page1.jpg",
    "/images/placeholder-page2.jpg",
    "/images/placeholder-page3.jpg",
    "/images/placeholder-page4.jpg",
    "/images/placeholder-page5.jpg",
  ],
  hasNext: true,
  hasPrev: false,
};

export default function Reader() {
  const [readMode, setReadMode] = useState<'webtoon' | 'manga'>('webtoon');
  const [currentPage, setCurrentPage] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll to hide/show header in webtoon mode
  useEffect(() => {
    if (readMode === 'manga') {
      setShowHeader(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, readMode]);

  // Keyboard navigation for Manga mode
  useEffect(() => {
    if (readMode !== 'manga') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [readMode, currentPage]);

  const nextPage = () => {
    if (currentPage < chapterData.pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.readerContainer}>
      <Head>
        <title>{chapterData.title} - Chapter {chapterData.chapterNumber} | Reader</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>

      {/* Header */}
      <header className={`${styles.header} ${!showHeader ? styles.headerHidden : ''}`}>
        <Link href="/" className={styles.backButton}>
          &larr; Back
        </Link>
        <div className={styles.title}>
          {chapterData.title} <span style={{ opacity: 0.6 }}>| Ch. {chapterData.chapterNumber}</span>
        </div>
        <div className={styles.controls}>
          <button 
            className={`${styles.controlButton} ${readMode === 'webtoon' ? styles.active : ''}`}
            onClick={() => setReadMode('webtoon')}
          >
            Webtoon
          </button>
          <button 
            className={`${styles.controlButton} ${readMode === 'manga' ? styles.active : ''}`}
            onClick={() => setReadMode('manga')}
          >
            Manga
          </button>
        </div>
      </header>

      {/* Viewer Area */}
      <main className={`${styles.viewer} ${readMode === 'webtoon' ? styles.webtoonMode : styles.mangaMode}`}>
        
        {readMode === 'webtoon' && (
          <div className={styles.pageWrapper}>
            {chapterData.pages.map((pageUrl, index) => (
              <div key={index} style={{ position: 'relative', width: '100%', minHeight: '500px', backgroundColor: '#1a1a24', marginBottom: '-1px' }}>
                <Image 
                  src={pageUrl} 
                  alt={`Page ${index + 1}`} 
                  width={800} 
                  height={1200}
                  className={styles.page}
                  unoptimized={true}
                  // Using unoptimized to allow placeholder image services or direct links without Next.js image optimization limits
                  onError={(e) => {
                    // Fallback to a styled skeleton/placeholder if the image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.classList.add(styles.imageSkeleton);
                    e.currentTarget.parentElement!.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#555;">Page ${index + 1}</div>`;
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {readMode === 'manga' && (
          <>
            <div className={styles.pageWrapper} onClick={nextPage}>
              <div style={{ position: 'relative', height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Image 
                  src={chapterData.pages[currentPage]} 
                  alt={`Page ${currentPage + 1}`} 
                  width={800} 
                  height={1200}
                  className={styles.page}
                  unoptimized={true}
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.width = '500px';
                    e.currentTarget.parentElement!.classList.add(styles.imageSkeleton);
                    e.currentTarget.parentElement!.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#555;">Page ${currentPage + 1}</div>`;
                  }}
                />
              </div>
            </div>
            
            <div className={styles.mangaControls}>
              <button 
                className={styles.navButton} 
                onClick={(e) => { e.stopPropagation(); prevPage(); }}
                disabled={currentPage === 0}
              >
                &larr;
              </button>
              <button 
                className={styles.navButton} 
                onClick={(e) => { e.stopPropagation(); nextPage(); }}
                disabled={currentPage === chapterData.pages.length - 1}
              >
                &rarr;
              </button>
            </div>
          </>
        )}

      </main>

      {/* Footer / Chapter Navigation */}
      <footer className={styles.footerControls}>
        <div>
          {readMode === 'manga' && (
            <span style={{ fontSize: '0.9rem', color: '#888' }}>
              Page {currentPage + 1} / {chapterData.pages.length}
            </span>
          )}
        </div>
        <div className={styles.chapterNav}>
          <button className={styles.chapterButton} disabled={!chapterData.hasPrev}>
            &larr; Prev Ch
          </button>
          <button className={styles.chapterButton} disabled={!chapterData.hasNext}>
            Next Ch &rarr;
          </button>
        </div>
      </footer>
    </div>
  );
}
