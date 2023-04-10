
const FacebookPage = () => {
const style={
    border:'none',
    overflow:'hidden',
    frameborder:0,
    
}  
  
return (
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Feurekaulfg3%2F&tabs=timeline&width=300&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
    width="300" 
    height="400" 
    style={style}
     
    title="Eureka Scientific Magazine" 
    allowFullScreen={true}
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  )
}

export default FacebookPage



