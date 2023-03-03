import './home.css'
import NewestArticles from './NewestArticles';
import TopNews from './TopNews'
import LatestVersion from './LatestVersion';
import LastEvent from './LastEvent';
import ImageCarousel from './ImageCarousel';


const Home = () => {
return (
    <div className="Home">
      <div className="content">
        <div className="base">
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

    </div>
  )
}

export default Home
