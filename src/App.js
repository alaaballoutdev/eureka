import { lazy, Suspense } from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import{ Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import PageLoading from 'components/PageLoading';
import { HeaderProvider } from 'Context/HeaderContext';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
const NewsPaper = lazy(()=>import('./components/News/NewsPaper')); 
const About = lazy(()=>import('./components/About/About'))
const Article =lazy(()=> import('./components/Articles/Article'));
const News =lazy(()=> import('./components/News/News'));
const NotFound= lazy(()=>import( './components/NotFound'));
const Archive = lazy(()=>import('./components/Archive/Archive'));
const Cerebro=lazy(()=>import( './components/Cerebro/Cerebro'));
const ArticleCategory = lazy(()=>import('./components/Articles-Category/ArticleCategory'));
const Events =lazy(()=>import('./components/events/Events')) 
const Event =lazy(()=>import( './components/events/Event'))
const Introduction =lazy(()=>import('./components/Magazine/Introduction'));
const MagazineFile =lazy(()=>import('./components/Magazine/MagazineFile'));
const Interview =lazy(()=>import( './components/Magazine/Interview'));

const App = () => {
  return (
    <div className='App'>
  <Router>
  <HeaderProvider>
    <Header/>
  </HeaderProvider>  
    <ScrollToTop/>

<div className='app-body'>
<Suspense fallback={<PageLoading/>} >
<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route exact path="/News" element={<News />} />
  <Route path={`News/:id`} element={<NewsPaper/>}/>

  <Route path={`/Article/:id`} element={<Article/>}/>
  <Route path={`/Articles/:category`} element={<ArticleCategory/>} />
  <Route path={`/Events`} element={<Events/>}/>
  <Route exact path='/About' element={<About/>}/>
  <Route exact path='/cerebro' element={<Cerebro/>}/>
  <Route path={`/Events/:id`} element={<Event/>}/>
  <Route exact path='/intro' element={<Introduction/>}/>
  <Route exact path={`/magazine-f`} element={<MagazineFile/>}/>
  <Route exact path={`/interview`} element={<Interview/>}/>
  <Route exact path={`/Archive`} element={<Archive/>}/>
  <Route path="*"element={<NotFound/>}/>
</Routes>
</Suspense>
</div>
<Footer/>
</Router>
  </div>
  )
}

export default App
