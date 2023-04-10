import Skeleton from "react-loading-skeleton"
import styles from './ArticleLoading.module.css'

const ArticleLoading = () => {
  return (
    <div className={styles.articleLoading}>
        <Skeleton height={35} width="100%" className={styles.skeletonSpacing} containerClassName={styles.articleLoading}/>
        <Skeleton  height={30} width="100%" className={styles.skeletonSpacing} containerClassName={styles.articleLoading} />
        <div className={styles.imageWrapper}>
          <Skeleton height={300} width="100%" className={styles.skeletonSpacing} containerClassName={styles.articleLoading}/>
        </div>
        <Skeleton height={30} width="100%" count={5} className={styles.skeletonSpacing}/>
              
      
    </div>
  )
}

export default ArticleLoading
