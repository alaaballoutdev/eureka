import './home.css'
import NewestArticles from './NewestArticles';
import Typography from'@mui/material/Typography'
import QuoteSlider from './QuoteSlider'
import TopNews from './TopNews'
import LatestVersion from './LatestVersion';
import LastEvent from './LastEvent';
import Know from './Know'

const Home = () => {
return (
    <div className="Home">
 <img src='./images/home-cover.jpg' width="100%"  alt='i'  />

<div className="content">
<div className="base">
<Typography variant='h5' sx={{mt:3,mr:1}}>احدث المقالات</Typography>
<NewestArticles />
<Typography variant='h5' sx={{mt:10,mb:2,mr:1}}>اخر الأخبار</Typography>
<TopNews />
<Typography variant='h5' sx={{mt:10,mb:2,mr:1}}>اخر نشاطاتنا</Typography>
<LastEvent />
<Typography variant='h5' sx={{mt:10,mb:2,mr:1}}>افتتاحية العدد الأخير</Typography>
<LatestVersion />
</div>
<div className='margin'>
<center>
<QuoteSlider/>
<Know />

</center>
</div>


</div>


    </div>
  )
}

export default Home
