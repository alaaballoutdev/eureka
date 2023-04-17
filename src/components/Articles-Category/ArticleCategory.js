import {useEffect,useState} from 'react'
import ArticleCard from '../Articles/ArticleCard';
import ArticlesCategoryLoading from './ArticlesCategoryLoading';
import './categories.css';
import NotFound from 'components/NotFound';


const ArticleCategory = ({title,category}) => {
    const [cards , setCards]=useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const getCards =async  ()=>{
            setLoading(true);
            await fetch("../json-data/articles.json")
            .then(res=>res.json())
            .then(data=>{
                if(category === 'All'){
                    setCards(data.articles);
                    return;
                }
                setCards(data.articles.filter(article =>article.category===category))
            })
            .catch(err=>console.log(err));
            setLoading(false);
        }
        getCards();
    },[category]);
    
    if(loading)
        return <ArticlesCategoryLoading/>
    if(!loading&&!cards)
        return <NotFound/>
    
    return (
        <div  className="category-page">
            <h1 className='title'>{title}</h1>
            <div className="articles-wrapper">
                { cards.map(card=>
                    <ArticleCard art={card} key={card.id}/>) 
                }
            </div>
        </div>
  )
}

export default ArticleCategory
