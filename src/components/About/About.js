import {useState,useEffect} from 'react';
import styles from './About.module.css'
import ArticleLoading from 'components/Articles/ArticleLoading';
import FacebookPage from './FacebookPage';
import NotFound from 'components/NotFound';
const About = () => {
const [about,setAbout] = useState();
const [loading,setLoading] = useState(true);
useEffect(()=>{
  async function fetchAbout(){
    setLoading(true);
    await fetch('./json-data/about.json')
    .then(res=>res.json())
    .then(data=>setAbout(data))
    .catch(err=>console.log(err));
    setLoading(false);
  }
  
  fetchAbout();
 
},[])

if(loading){
  return <ArticleLoading/>
}

if(!loading&&!about ){
  return <NotFound/>
}

return (
  <div className={styles.about}>
    <h1>{about.title}</h1>
    <div className={styles.imageWrapper}>
      <img src='./images/about.jpeg' alt='i' width="100%" className={styles.aboutImage}/>
    </div>
    {about.body.map((paragraph,index)=><p key={index} dangerouslySetInnerHTML={{__html:paragraph}} className={styles.aboutBody}></p>)}
    <div className={styles.facebookPageContainer}>
      <h4 className={styles.follow}>تابعنا عبر صفحاتنا على مواقع التواصل</h4>

      <FacebookPage/>
    </div>
  </div>
      )
}


export default About
