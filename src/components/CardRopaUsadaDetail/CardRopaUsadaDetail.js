import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const CardRopaUsadaDetail = ({data}) => {
  return (
    <Card sx={{ maxWidth: 300 }} className = "Card" >
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.img}
          alt="imagen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.prenda}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.estado}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.detalle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardRopaUsadaDetail;
