import Image from 'next/image'
import styles from './styles/Background.module.scss';
 
export default function Background() {
  return (
    <div className={styles.background}>
    <Image
      alt="Mountains"
      src="/Background.svg"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
    </div>
  )
}