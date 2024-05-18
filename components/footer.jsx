'use client'
import Image from 'next/image';
import styles from './styles/Footer.module.scss';

function Footer() {
    return (
        <div className={styles.FooterContainer}>
            <footer className={styles.AllFooter}>
                <p>
                    &copy; 2024 All rights reserved - MakeMake
                </p>
                <div className={styles.LogoContainer}>
                <a target="_blank" href="https://www.instagram.com/makemake_band/">
                    <Image
                        src="/instagram Logo.svg"
                        width={30}
                        height={30}
                        alt="MakeMake instagram"
                    />
                </a>
                <a target="_blank" href="https://www.facebook.com/makemakeband.official">
                    <Image
                        src="/facebook.svg"
                        width={30}
                        height={30}
                        alt="MakeMake facebook"
                    />
                </a>
                <a target="_blank" href="https://www.youtube.com/c/%E9%BA%A5%E7%90%AA%E9%BA%A5%E7%90%AAMakeMake">
                    <Image
                        src="/youtube logo.svg"
                        width={30}
                        height={30}
                        alt="MakeMake youtube"
                    />
                </a>
                <a target="_blank" href="https://open.spotify.com/artist/5DlnA3fCaF6p4KZuhBHgLN?si=llNwj_auSo6vwOPQrw8KnQ&nd=1&dlsi=082f18fdc03b4141">
                    <Image
                        src="/spotify.svg"
                        width={30}
                        height={30}
                        alt="MakeMake spotify"
                    />
                </a>
                <a target="_blank" href="https://music.apple.com/tw/artist/%E9%BA%A5%E7%90%AA%E9%BA%A5%E7%90%AA-makemake/1734595755?l=en-GB">
                    <Image
                        src="/music.svg"
                        width={30}
                        height={30}
                        alt="MakeMake Apple music"
                    />
                </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
