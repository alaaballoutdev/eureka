import { lazy, Suspense } from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import{ Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import PageLoading from 'components/PageLoading';
import { HeaderProvider } from 'Context/HeaderContext';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import ScrollToTopButton from 'components/ScrollToTop/ScrollToTopButton';
const NewsPaper = lazy(()=>import('./components/News/NewsPaper')); 
const About = lazy(()=>import('./components/About/About'))
const Article =lazy(()=> import('./components/Articles/Article'));
const News =lazy(()=> import('./components/News/News'));
const AllArticles =lazy(()=> import('./components/Articles-Category/AllArticles'));
const NotFound= lazy(()=>import( './components/NotFound'));
const Archive = lazy(()=>import('./components/Archive/Archive'));
const Cerebro=lazy(()=>import( './components/Cerebro/Cerebro'));
const Civil = lazy(()=>import('./components/Articles-Category/Civil'))
const Mechanical = lazy(()=>import('./components/Articles-Category/Mechanical'))
const Petro = lazy(()=>import('./components/Articles-Category/Petro'))
const General =  lazy(()=>import('./components/Articles-Category/General'))
const Electrecitiy =  lazy(()=>import('./components/Articles-Category/Electrecity'))
const Events =lazy(()=>import('./components/Events/Events')) 
const Event =lazy(()=>import( './components/Events/Event'))
const Introduction =lazy(()=>import('./components/Magazine/Introduction'));
const Telecom =lazy(()=>import('./components/Articles-Category/Telecom'));
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
  <Route exact path="/Articles" element={<AllArticles />} />
  <Route path={`/Articles/:id`} element={<Article/>}/>
  <Route exact path={`/Articles/Civil`} element={<Civil/>}/>
  <Route path={`/Articles/Mechanical`} element={<Mechanical/>}/>
  <Route path={`/Articles/Petro`} element={<Petro/>}/>
  <Route path={`/Articles/Electrecity`} element={<Electrecitiy/>}/>
  <Route path={`/Articles/General`} element={<General/>}/>
  <Route path={`/Events`} element={<Events/>}/>
  <Route exact path='/About' element={<About/>}/>
  <Route exact path='/cerebro' element={<Cerebro/>}/>
  <Route path={`/Events/:id`} element={<Event/>}/>
  <Route exact path='/intro' element={<Introduction/>}/>
  <Route exact path={`/Articles/Telecom`} element={<Telecom/>}/>
  <Route exact path={`/magazine-f`} element={<MagazineFile/>}/>
  <Route exact path={`/interview`} element={<Interview/>}/>
  <Route exact path={`/Archive`} element={<Archive/>}/>
  <Route path="*"element={<NotFound/>}/>
</Routes>
</Suspense>

</div>

<Footer/>
<ScrollToTopButton/>

  </Router>
  </div>
  )
}

export default App
