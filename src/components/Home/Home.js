import './home.css'
import NewestArticles from './NewestArticles';
import Typography from'@mui/material/Typography'
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
<Typography variant='h5' sx={{mt:10,mb:2,mr:3}}>اخر الأخبار</Typography>
<TopNews />
<Typography variant='h5' sx={{mt:10,mb:2,mr:3}}>اخر نشاطاتنا</Typography>
<LastEvent />
<Typography variant='h5' sx={{mt:10,mb:2,mr:3}}>افتتاحية العدد الأخير</Typography>
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
