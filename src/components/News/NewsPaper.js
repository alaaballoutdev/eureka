import {useState ,useEffect}from 'react'
import NotFound from '../NotFound'
import Section from '../Articles/Section'
import {useParams} from 'react-router-dom';

const NewsPaper = () => {
const [articles , setArticles]=useState();

useEffect(()=>{

      let isActive=true;

async function fetchData (){
try{
let res= await fetch("../json-data/news.json")
let data=await res.json();
if(isActive){
    setArticles(data.news);}
}
catch(err){
console.log(err);
}
}
fetchData();
    return ()=>{isActive=false;};
},[setArticles]);

const {id }=useParams();


if(!articles){
  return <div className="loading"><center><h1 style={{color:'rgb(100,100,100)'}}>...Loading</h1></center></div>
}
else{
const article= articles.find((art)=> art.id === parseInt(id));

if(!article){
return <NotFound />
}




  return (

    <div className="article">

      <center>
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <h4 className="author">{article.author} </h4>
      <img className="initial-image" alt='i' src={article.image} /></center>
    <div className="body">

    {article.body.map((s,index)=>
       <Section key={index} paragraph={s.paragraph} subtitle={s.subtitle} imagesCards={s.imagesCards}/>
    )}

    </div>
</div>
  )
}
}
export default NewsPaper;
