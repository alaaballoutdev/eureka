import Skeleton from "react-loading-skeleton"

const IntroLoading = () => {
  return (
    <div className="intro">
        <div className="introduction">
            <Skeleton width="90%" height={35} className="skeleton-spacing"/>
            <Skeleton width="90%" height={25} className="skeleton-spacing"/>
            <div className='intro-flex'>
                <div className='crop-loading'>
                    <Skeleton width="100%" height="100%" containerClassName="crop-loading"/>
                </div> 
                <div className="intro-body">
                <Skeleton width="80%" height={30} count={7} containerClassName="intro-body" className="skeleton-spacing"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroLoading
