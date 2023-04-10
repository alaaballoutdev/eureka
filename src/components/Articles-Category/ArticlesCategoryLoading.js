import Skeleton from "react-loading-skeleton"

const ArticlesCategoryLoading = () => {
  return (
    <div className="article-category-loading">
      <Skeleton height={35} width={300} className="card-skeletons"/>
      <div className="articles-wrapper">
        <Skeleton height={400} width={300} count={6} className="card-skeletons" containerClassName="articles-wrapper"/>
      </div>
    </div>
  )
}

export default ArticlesCategoryLoading
