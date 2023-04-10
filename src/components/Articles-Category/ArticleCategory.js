import {useEffect,useState} from 'react'
import ArticleCard from '../Articles/ArticleCard';
import ArticlesCategoryLoading from './ArticlesCategoryLoading';
import './categories.css';


const ArticleCategory = ({title,category}) => {
    const [cards , setCards]=useState();
        useEffect(()=>{
            const getCards =async  ()=>{
                await fetch("../json-data/articles.json")
                .then(res=>res.json())
                .then(data=>setCards(data.articles))
                .catch(err=>console.log(err));
            }

            getCards();
        },[]);
    
if(!cards)
        return <ArticlesCategoryLoading/>

const getArticlesByCategory=()=>{
    
    return( 
        <>
        {cards.map((article)=>
                        article.category===category?
                        <ArticleCard art={article} key={article.id}/> :null
                    )
        }
        </>
    )

}
const getAllArticles=()=>{
    return( 
    
        <>
        {cards.map((article)=><ArticleCard art={article} key={article.id}/>)} 
        </>
    )
}


return (
    <div  className="category-page">
        <h1 className='title'>{title}</h1>
        <div className="articles-wrapper">
            {
                category==='All'?getAllArticles():getArticlesByCategory()
            }
        </div>
    </div>
  )
}

export default ArticleCategory
