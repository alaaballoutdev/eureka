import Skeleton from 'react-loading-skeleton';
import styles  from  './Event.module.css';
const EventCardsLoading = () => {
  return (
    <>
    <h1 className={styles.title}>نشاطات الكلية</h1>
    <div className={styles.events}>
      <Skeleton width={300} height={350} count={5} className={styles.eventCardLoading} containerClassName={styles.events} />
    </div>
  </>
  )
}

export default EventCardsLoading
