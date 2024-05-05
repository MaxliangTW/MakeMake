'use client'

import React from 'react';
import Navbar from './Navbar'
import styles from "./styles/index.module.scss";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
    '/Team.svg',
    '/MakeMake.svg'
];

function Index() {
    const [Index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 7000); // 每7秒切換一次首頁大圖，7000=7秒

        return () => clearInterval(interval);
    }, []);
    return (
        <body>
        <Navbar />
        <h1>Home</h1>
        <div className={styles.MakeMakeHomeBody}>
            <div className={styles.MakeMakeHomeTitle}>
                    <Image
                    src="/MakeMake.svg"
                    width={1041}
                    height={158}
                    alt="MakeMake title"
                />
                </div>
                <div className={styles.MakeMakeHomeImage}>
                <Image 
                src={images[Index]}
                width={1000}
                height={431} 
                alt={`Image ${Index + 1}`} 
                />
            </div>        
        </div>
        </body>
    );
}

export default Index;