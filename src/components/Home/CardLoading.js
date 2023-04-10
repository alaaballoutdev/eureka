import { useMediaQuery ,Card,CardContent} from "@mui/material";
import Skeleton from "react-loading-skeleton";


const CardLoading = () => {
  
  const isTabOrGreater =  useMediaQuery('(min-width:1000px)');

  
  return (
    <div className="latest-version">
    
      <div className='last-event'>
        <Card >
          <Skeleton  height={isTabOrGreater?400:200} width='100%'/>
          <CardContent>
          <Skeleton width={100} height={35}/>
          <Skeleton width='100%' height={30}/>
          <Skeleton width='100%' height={30}/>
          <Skeleton width='100%' height={30}/>
         
          
          </CardContent>
        </Card>
      </div>

   
  </div>
  )
}

export default CardLoading
