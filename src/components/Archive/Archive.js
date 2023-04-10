import {useState,useEffect} from 'react';
import ArchivedVersion from './ArchivedVersion';
import './archive.css';
import ArchiveLoading from './ArchiveLoading';
const Archive = () => {
const [archive ,setArchive]=useState();

  useEffect(()=>{
    const getArticles = async ()=>{
      await fetch("../json-data/archive.json")
        .then(res=>res.json())
        .then(data=>setArchive(data.archive.reverse()))
        .catch(err=>console.log(err));
    }

    getArticles();
  },[]);


if(!archive){

return <ArchiveLoading />

}




 return (
  <>
    <h1 className='title'>أرشيف المجلة</h1>
    <div className='archive-container'>
      {archive.map((version, index)=><ArchivedVersion key={index} version={version} />)}
    </div>

  </>

  )
}

export default Archive
