import React from 'react';
import {Card,CardContent,CardMedia} from '@mui/material';

const ArchivedVersion = ({version}) => {
  return (
    <a href={`../Archive/${version.name}`} className="link">
      <div className="cards">
        <Card sx={{width:250,margin:'10px'}}  >
          <CardMedia component="img" height="300px" alt="p"  image={version.thumbnail}/>
          <CardContent>
            <h4>{version.title}</h4>
            <p className='version-date'>{version.date}</p>
          </CardContent>
        </Card>
      </div>
    </a>
  )
}

export default ArchivedVersion
