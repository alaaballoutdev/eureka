import ImageCard from './ImageCard'
import styles from './article.module.css'

const Section = ({subtitle, paragraph,imagesCards}) => {
  return (
  <div className={styles.sectionWrapper}>
    <h2  className={styles.subtitle}>{subtitle}</h2>
    <div  className={styles.section}>
      <div className={imagesCards.length!==0?styles.text:styles.fillText}>
        {paragraph.map((sentence,index)=>
          <p  key={index} >{sentence}</p>)
        }
      </div>
      <div className={styles.imageCards}>
        {imagesCards.map((c, index)=><ImageCard key={index} photo={c.photo} caption={c.caption}  />)}
      </div>
    </div>
</div>

  )
}

export default Section
