import {useState,useEffect} from 'react';
import ArchivedVersion from './ArchivedVersion';
import './archive.css';
const Archive = () => {
const [archive ,setArchive]=useState();

  useEffect(()=>{
    const getArticles = async ()=>{
      await fetch("../json-data/archive.json").then(res=>res.json()).then(data=>setArchive(data.archive.reverse()))
      .catch(err=>console.log(err));

    }

    getArticles();
    },[]
    );


if(!archive){

return   <div className="loading"> <h3  style={{textAlign:'center',color:'rgb(100,100,100)'}}>...Loading</h3></div>


}


else {

  return (
<center>
{archive.map((arch, index)=><ArchivedVersion key={index} version={arch} />)}




</center>
  )
}}

export default Archive
