import Skeleton from "react-loading-skeleton"
const ArchiveLoading = () => {
  return (
    <>
    <h1 className='title'>أرشيف المجلة</h1>
    <div className='archive-container'>
      <Skeleton width={250} height={350} count={5} className="archive-card" containerClassName="archive-container" />
    </div>

  </>
  )
}

export default ArchiveLoading
