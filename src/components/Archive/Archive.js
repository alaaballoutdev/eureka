import {useState,useEffect} from 'react';
import ArchivedVersion from './ArchivedVersion';
import './archive.css';
import ArchiveLoading from './ArchiveLoading';
import NotFound from 'components/NotFound';
const Archive = () => {
const [archive ,setArchive]=useState();
const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const getArticles = async ()=>{
      setLoading(true);
      await fetch("../json-data/archive.json")
        .then(res=>res.json())
        .then(data=>setArchive(data.archive.reverse()))
        .catch(err=>console.log(err));
      setLoading(false);  
    }

    getArticles();
  },[]);

if(loading){
  return <ArchiveLoading/>
}

if(!loading&&!archive){
  return <NotFound/>
}


return (
  <>
    <h1 className='title'>أرشيف المجلة</h1>
    <div className='archive-container'>
      {archive.map((version)=>
        <ArchivedVersion key={version.id} version={version} />)
      }
    </div>

  </>

  )
}

export default Archive
