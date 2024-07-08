import Narbar from './Navbar'
import Footer from './footer';
import Background from './Background';
import styles from "./styles/News.module.scss";
import Image from 'next/image';
import Link from 'next/link'

function Index() {
    return (
        <div>
            <Narbar />
            <main className={styles.NewsPage}>
                <h2 className={styles.Newstitle}>News</h2>
                <div className={styles.divider}></div>
                <section className={styles.NewsSection}>
                    <h3 className={styles.Wackentitle}>July 21, 2024 - LIVE IN LIVE x MakeMake《17808 Anti-bullying》
                    </h3>
                    <div className={styles.June14}>
                        <div className={styles.iamlife}>
                            <Image
                            src="/20240721.svg"
                            width={400}
                            height={400}
                            alt="2024 B'IN LIVE SPACE - KEELUNG Opening Concert"
                            />
                        </div>
                        <div className={styles.news2}>
                            <p>✦ 2024 B&apos;IN LIVE SPACE - KEELUNG Opening Concert ✦</p>
                            <p>LIVE IN LIVE x MakeMake 17808 &quot;Anti-bullying&quot; </p>
                            <p>Tired of school bullying, cyberbullying, and workplace <br />
                                harassment? We&apos;ve had enough of verbal violence! 
                            </p>
                            <p>People think they can hide behind their keyboards and say<br />
                                anything without consequences. But there are better ways <br />
                                to find care and support.
                            </p>
                            <p>Life can be tough, but you don&apos;t have to face it alone.</p>
                            <p>Join us for an evening to let it all out together!</p>
                            <p>⚡️Information⚡️</p>
                            <p>▹ Date｜July 21, 2024 Sun. 18:00<br />
                            ▹ Venue｜B&apos;IN LIVE SPACE -KEELUNG 3F (3F, No. 103, <br />
                            Zhongzheng Rd., Zhongzheng District, Keelung City)<br />
                            ▹ Organizer｜B&apos;IN LIVE Entertainment<br />
                            </p>
                            <p>⚡️Ticket ⚡️</p>
                            <Link 
                                href="https://binliveco.kktix.cc/events/af3a1bew-50721"
                                target="_blank"
                            >
                            https://binliveco.kktix.cc/events/af3a1bew-50721
                            </Link>
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <h3 className={styles.Wackentitle}>June 16, 2024 - WACKEN METAL BATTLE</h3>
                    <div className={styles.June16}>
                        <div className={styles.WACKEN_METAL_BATTLE}>
                            <Image
                            src="/WACKEN_METAL_BATTLE.svg"
                            width={400}
                            height={520}
                            alt="MWACKEN METAL BATTLE PHILIPPINES"
                            />
                        </div>
                        <div className={styles.news1}>
                            <p>⚡️WACKEN METAL BATTLE⚡️</p>
                            <p>Philippines!!! 🇵🇭</p>
                            <p>We’ll be performing at WACKEN METAL BATTLE PHILIPPINES<br />
                                2024 in this summer! (❁´ω`❁)*✲ﾟ*
                            </p>
                            <p>First time to be there!</p>
                            <p>Can’t wait to see you guys sooooon!!🤘🤘🤘</p>
                            <p>⚡️Information⚡️</p>
                            <p>▹ Date｜June 16, 2024 Sun.<br />
                            ▹ Venue｜MetroTent Convention Center, Pasig<br />
                            ▹ Gates open 1PM<br />
                            ▹ Show starts 2PM</p>
                            <p>⚡️Ticket ⚡️</p>
                            <Link 
                                href="https://reurl.cc/NQDLy5"
                                target="_blank"
                            >
                            WACKEN METAL BATTLE
                            </Link>
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                    <h3 className={styles.Wackentitle}>June 14, 2024 - I AM LIFE-SIZED ADULT - MAX’N Mini Tour in Taipei</h3>
                    <div className={styles.June14}>
                        <div className={styles.iamlife}>
                            <Image
                            src="/iamlife.svg"
                            width={400}
                            height={490}
                            alt="I AM LIFE-SIZED ADULT - MAX’N Mini Tour in Taipei"
                            />
                        </div>
                        <div className={styles.news2}>
                            <p>I may be a bit impatient, but I am still myself, and I<br />
                            am also a life-sized adult.
                            </p>
                            <p>Is it true that every individual in the hustle and <br />
                            bustle of the crowd is trying to make sense of the<br />
                            distance between them and the world and every <br />
                            other person? Do you suffer from a little bit, a little<br />
                            bit, a little bit of Human Allergy?<br />
                            </p>
                            <p>First time to be there!</p>
                            <p>Can’t wait to see you guys sooooon!!🤘🤘🤘</p>
                            <p>⚡️Information⚡️</p>
                            <p>▹ Performer｜MAX’N（JP）, MakeMake<br />
                            ▹ Date｜2024.06.14 (Fri) 19:30 open / 20:00 start<br />
                            ▹ Venue｜Revolver Taipei<br />
                            ▹ Co-organizer｜生波計畫 SHENG BO</p>
                            <p>⚡️Ticket ⚡️</p>
                            <Link 
                                href="https://reurl.cc/GjDLKD"
                                target="_blank"
                            >
                            Buy Now
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Background />
        </div>
    );
}

export default Index;