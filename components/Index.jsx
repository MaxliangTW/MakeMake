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
                    width={760}
                    height={108}
                    alt="MakeMake title"
                    layout="responsive"
                />
            </div>
            <div className={styles.MakeMakeHomeImage}>
                <Image 
                src={images[Index]}
                width={750}
                height={500}
                alt={`Image ${Index + 1}`}
                layout="responsive"
                />
            </div>  
        </div>
        <div className={styles.Intro}>
            <div className={styles.MakeMakeHomeIntro}>
                <h3 style={{ fontStyle: 'italic' }}>MakeMake</h3>
                <div>
                    <p>
                    An all-female Metal band from Taiwan, MakeMake <br />
                    masterfully combines ferocity and melody, delivering a<br />
                    powerful blend of striking appearances and exceptional<br />
                    talent.
                    </p>
                </div>
                <div>
                    <p>
                    Their distinctive style merges edgy coolness with <br />
                    endearing charm, making them one of the most<br />
                    captivating and contrasting female metal bands in the<br />
                    scene.
                    </p>
                </div>
        </div>
        </div>
        <div className={styles.FacebookPost}>
            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmakemakeband.official%2Fposts%2Fpfbid0VeS5KhWrqz1FT9iLYHFH2RM9zp88TkCbsfCNGBwyBiAYmBp3tA7WR1b98xEK2eowl&show_text=true&width=500&is_preview=true" 
                width="450" 
                height="625" 
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