import {useEffect,useState} from 'react'
import ArticleCard from '../Articles/ArticleCard';
import ArticlesCategoryLoading from './ArticlesCategoryLoading';
import './categories.css';
import NotFound from 'components/NotFound';
import { useParams } from 'react-router-dom';

const ArticleCategory = () => {
    const [cards , setCards]=useState();
    const [loading,setLoading] = useState(true);
    const {category}= useParams();
    useEffect( ()=>{
        
        async function fetchAll(){
            setLoading(true);
            await fetch('../json-data/articles.json')
            .then(res=>res.json())
            .then(data=>setCards(data.articles))
            .catch(err=>console.log(err))
            setLoading(false);
        }
        
        async function fetchCategory(category){
            setLoading(true);
            await fetch('../json-data/articles.json')
            .then(res=>res.json())
            .then(data=>setCards(data
                .articles
                .filter(article=>article.category===category.toLowerCase())
                ))
            .catch(err=>console.log(err))
            setLoading(false);
        }
        
        if(category==='All'){
            fetchAll();
        }
        else{
            fetchCategory(category);
        }
    
    },[category]);
    
    if(loading)
        return <ArticlesCategoryLoading/>
    if(!loading&&!cards)
        return <NotFound/>
    
    return (
        <div  className="category-page">
            <h1 className='title'>{category==='All'?"المقالات":cards[0].tag}</h1>
            <div className="articles-wrapper">
                { cards.map(card=>
                    <ArticleCard art={card} key={card.id}/>) 
                }
            </div>
        </div>
  )
}

export default ArticleCategory
