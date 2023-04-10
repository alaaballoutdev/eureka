const FacbookVideo = ({link}) => {
  const style={
    border:'none',
    frameborder:0,
    width:'100%',
    height:400,
  }
  

  
return (
    
      <iframe 
        src={`https://www.facebook.com/plugins/video.php?href=${link}&width=1920&height=1080&show_text=false&appId`}
        style={style}
        width="100%"
        
        allowFullScreen={true}
        title={link}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;" 
      ></iframe>
    
  )
}

export default FacbookVideo
