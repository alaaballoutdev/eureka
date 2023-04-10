import {Card} from '@mui/material'




const StyledCard = ({children}) => {
    const CardStyle={
        width:'90%',
        margin:'auto',
        boxShadow:'0px 0px 10px 1px rgba(0,0,0,0.2)'
    }


    return (
    
      <Card sx={CardStyle}>
        {children}
      </Card>

  )
}

export default StyledCard
