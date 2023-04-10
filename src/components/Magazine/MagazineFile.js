import {useState,useEffect} from 'react'
import Section from '../Articles/Section';
import './magazine.css';
import {AttachFile} from '@mui/icons-material';
import ArticleLoading from 'components/Articles/ArticleLoading';

const MagazineFile = () => {
const [article, setArticle]=useState();
useEffect(()=>{
const getArticles = async ()=>{
  await fetch("./magazineJson/magazineFile.json")
    .then(res=>{console.log(res.status);return res.json()})
    .then(data=>setArticle(data))
    .catch(err=>console.log(err));
}

getArticles();

},[]
);
if(!article){
return <ArticleLoading/>

}



  return (
    <div>
      <div className="cover">
        <AttachFile sx={{fontSize:100}}/>
      </div>
      <div className="article-file"  >
        <h1 className='magazine-file-title'>{article.title}</h1>
        <h4 className="author">{article.author}</h4>
        <div className='image-wrapper'>
          <img className="initial-image" alt='i' src={article.image} />
        </div>
        <div className="body">
          {article.body.map((s,index)=>
            <Section key={index} paragraph={s.paragraph} subtitle={s.subtitle} imagesCards={s.imagesCards} />
          )}
        </div>
      </div>
    </div>
  )
}

export default MagazineFile
