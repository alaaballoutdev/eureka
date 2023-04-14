import Skeleton from 'react-loading-skeleton';

import styles from './Cerebro.module.css'
const CerebroLoading = () => {
  
  
  return (
    <div className={styles.cerebro} >
        <h1 className={styles.title}>فريق "CERRBRO"</h1>
        <div className={styles.skeletonWrapper}>
            <Skeleton width='100%' height={400} />
        </div>
    </div>



  )
}

export default CerebroLoading
