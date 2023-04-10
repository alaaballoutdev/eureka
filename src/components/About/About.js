import {useState,useEffect} from 'react';
import styles from './About.module.css'
import ArticleLoading from 'components/Articles/ArticleLoading';
import FacebookPage from './FacebookPage';
const About = () => {
const [about,setAbout]=useState();
useEffect(()=>{
  async function fetchAbout(){
    await fetch('./json-data/about.json')
    .then(res=>res.json())
    .then(data=>setAbout(data))
    .catch(err=>console.log(err));
  }
  fetchAbout();
},[])

if(!about){
  return <ArticleLoading/>
}
return (
  <div className={styles.about}>
    <h1>{about.title}</h1>
    <div className={styles.imageWrapper}>
      <img src='./images/about.jpeg' alt='i' width="100%" className={styles.aboutImage}/>
    </div>
    {about.body.map((paragraph,index)=><p key={index}  className={styles.aboutBody}>{paragraph}</p>)}
    <div className={styles.facebookPageContainer}>
      <h4 className={styles.follow}>تابعنا عبر صفحاتنا على مواقع التواصل</h4>

      <FacebookPage/>
    </div>
  </div>
      )
}


export default About
