import {useEffect, useState} from 'react'
import NewestArticleByCategory from './NewestArticleByCategory';
import {CategoryIconMap} from './CategoryIconMap';
import NewestArticlesLoading from './NewestArticlesLoading';
const NewestArticles = () => {
  const [cards,setCards]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    const fetchData= async ()=>{
      setLoading(true);
      await fetch("./json-data/articles.json")
      .then(res=>res.json()).then(data=>{
         setCards(data.articles)
        
        }
      )
      .catch(err=>console.log(err));
      setLoading(false);
    }
    fetchData();
  },[]
);




// I use this method because just i fecth data from json file which contains all articles
// When I use database, I can fetch the latest article from each category .
const getLatestArticle=(category)=>{
  return   cards.filter((article)=>article.category===category)
    .reduce((a,b)=>Date.parse(a.date)>Date.parse(b.date)?a:b,{})
}
if(loading){
  return <NewestArticlesLoading count={6}/>
}
if(!loading && !cards){
  return <></>
}

  
  return (
    <div>
      <h2 className='section-title'>احدث المقالات</h2>
      <div className='flex-newest-articles'>
        {Array.from (CategoryIconMap.keys()).map(category=>
          <NewestArticleByCategory 
            article={getLatestArticle(category)} 
            icon={CategoryIconMap.get(category)} 
            key={category}  />
          )
        }

      </div>
    </div>

)
}

export default NewestArticles
