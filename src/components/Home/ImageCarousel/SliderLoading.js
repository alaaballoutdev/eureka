import Skeleton from "react-loading-skeleton"
import { useMediaQuery } from "@mui/material";

const SliderLoading = () => {
    const  isMobile = useMediaQuery('(max-width:1100px)');
    
    return (
        <Skeleton width={isMobile?'90%':270} height={400}/>
    )
}

export default SliderLoading
