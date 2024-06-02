'use client'

import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import Background from './Background';
import styles from "./styles/index.module.scss";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
    '/makemake1.svg',
    '/makemake2.svg',
    '/makemake3.svg'
];

function Index() {
    const [Index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <body>
        <Background />
        <Navbar />
        <div className={styles.MakeMakeHomeBody}>
            <div className={styles.MakeMakeHomeTitle}>
                    <Image
                    src="/橫幅.svg"
                    width={800}
                    height={126}
                    alt="MakeMake title"
                    layout="responsive"
                />
            </div>
            <div className={styles.MakeMakeHomeImage}>
                <Image 
                src={images[Index]}
                width={900}
                height={600}
                alt={`Image ${Index + 1}`}
                layout="responsive"
                />
            </div>  
        </div>
        <div className={styles.Intro}>
            <div className={styles.MakeMakeHomeIntro}>
                <h2>About us</h2>
                <div>
                    <p>
                    texttexttexttexttexttexttexttexttexttexttexttexttexttext,<br />
                    texttexttexttexttexttexttexttexttexttexttexttext,<br />
                    texttexttexttexttexttexttexttexttexttexttexttext.
                    </p>
                </div>
        </div>
        </div>
        <div className={styles.FacebookPost}>
            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmakemakeband.official%2Fposts%2Fpfbid0VeS5KhWrqz1FT9iLYHFH2RM9zp88TkCbsfCNGBwyBiAYmBp3tA7WR1b98xEK2eowl&show_text=true&width=500&is_preview=true" 
                width="500" 
                height="665" 
                style={{ 
                border: 'none',
                overflow: 'hidden',
                backgroundColor: 'rgb(210, 210, 210)',
                }} 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            >
            </iframe>
        </div>
        <Footer />
        </body>
    );
}

export default Index;