'use client'

import Narbar from './Navbar'
import Footer from './footer';
import Background from './Background';
import styles from "./styles/Merch.module.scss";
import Image from 'next/image';

function Merch() {
    return (
        <div>
            <Narbar />
            <main className={styles.MerchPage}>
                <h2 className={styles.Merchtitle}>Merch</h2>
                <div className={styles.divider}></div>
                <section className={styles.merchSection}>
                    <div className={styles.Merch_1}>
                        <Image
                        src="/周邊_1.svg"
                        width={500}
                        height={500}
                        alt="MakeMake Merchhandise"
                    />
                    </div>
                    <div className={styles.Merch_2}>
                        <Image
                        src="/周邊_2.svg"
                        width={500}
                        height={500}
                        alt="t-shirt size chart"
                    />
                    </div>
                    <div className={styles.Merch_3}>
                        <Image
                        src="/周邊_3.svg"
                        width={500}
                        height={500}
                        alt="we are one usb"
                    />
                    </div>
                    <div className={styles.Merch_4}>
                        <Image
                        src="/周邊_4.svg"
                        width={500}
                        height={750}
                        alt="we are one makemake"
                    />
                    </div>
                    <div className={styles.Merch_5}>
                        <Image
                        src="/周邊_5.svg"
                        width={500}
                        height={620}
                        alt="makemake t-shirt"
                    />
                    </div>
                    <div className={styles.ShopButton}>
                    <a href="https://shop.fantimate.com/pages/makemake">
                    <Image
                        src="/SHOPNOW.svg"
                        width={200}
                        height={80}
                        alt="makemake shop"
                    />
                    </a>
                    </div>
                    {/* <div className={styles.MerchPageintro}>
                        <p>Online shopping is coming soon. Stay tuned!</p>
                        <p>Follow us on Instagram to get the latest information!</p>
                    </div> */}
                </section>
            </main>
            <Footer />
            <Background />
        </div>
    );
}

export default Merch;