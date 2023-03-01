import Home from './components/Home/Home'
import News from './components/News/News'
import ArticlesCards from './components/Articles/ArticlesCards'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Article from './components/Articles/Article'
import About from './components/About/About';
import Civil from './components/Articles-Category/Civil';
import Mechanical from './components/Articles-Category/Mechanical';
import Petro from './components/Articles-Category/Petro';
import General from './components/Articles-Category/General';
import Electrecitiy from './components/Articles-Category/Electrecity'
import{ Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Cerebro  from './components/Cerebro/Cerebro'
import NewsPaper from  './components/News/NewsPaper'
import Events from './components/events/Events';
import Event from './components/events/Event';
import Introduction from './components/Magazine/Introduction';
import Telecom from './components/Articles-Category/Telecom';
import MagazineFile from './components/Magazine/MagazineFile';
import Interview from './components/Magazine/Interview';
import Archive  from  './components/Archive/Archive.js';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound'
import './App.css'

const App = () => {
  return (
    <Router>

<div className="App" >
<Header/>
<ScrollToTop />
<div className='app-body'>
<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route exact path="/News" element={<News />} />
  <Route path={`News/:id`} element={<NewsPaper/>}/>
  <Route exact path="/Articles" element={<ArticlesCards />} />
  <Route path={`/Articles/:id`} element={<Article/>}/>
  <Route exact path={`/Articles/Civil`} element={<Civil/>}/>
  <Route path={`/Articles/Mechanical`} element={<Mechanical/>}/>
  <Route path={`/Articles/Petro`} element={<Petro/>}/>
  <Route path={`/Articles/Electrecitiy`} element={<Electrecitiy/>}/>
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

</div>
<Footer/>
</div>

  </Router>
  )
}

export default App
