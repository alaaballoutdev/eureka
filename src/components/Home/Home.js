import './home.css'
import NewestArticles from './NewestArticles/NewestArticles';
import TopNews from './TopNews/TopNews'
import LatestVersion from './LatestVersion';
import LastEvent from './LastEvent';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import Cover from 'components/Cover';


const Home = () => {
return (
    <>
    <Cover>
    <h1>نافذةٌ الى شتّى أنواع المعرفة</h1>
    </Cover>  
      <div className="content">
        <div>
          
          <NewestArticles />
          <h2 className='section-title'>اخر الأخبار</h2>
          <TopNews />
          <h2 className='section-title'>اخر نشاطاتنا</h2>
          <LastEvent />
          <h2 className='section-title'>افتتاحية العدد الأخير</h2>
          <LatestVersion />
        </div>
        <div className='sliders-container'>
          <ImageCarousel type='QuoteSlider' title='تأمل'/>
          <ImageCarousel type='Knowledge' title='هل تعلم'/>
        </div>
      </div>
    </>
  )
}

export default Home
