import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
const DemoPaper = styled(Paper)(({ theme, backgroundImage, backgroundColor}) => ({
  width: "800px",
  height: "600px",
  // padding: theme.spacing(2),
  // ...theme.typography.body2,
  // textAlign: 'center',
  backgroundColor: backgroundColor || 'none',
  backgroundImage: backgroundImage || 'none', // Default to 'none' if no backgroundImage is provided
  backgroundSize: 'cover', // Adjust as needed
}));
const FullScreenPaper = styled(Paper)(({ theme, backgroundImage }) => ({
  width: '1450px', // Set the width to 100% to span the full length of the screen
  height: '750px', // Adjust the height as needed
  // padding: theme.spacing(2),
  // ...theme.typography.body2,
  // textAlign: 'center',
  backgroundImage: backgroundImage || 'none',
  backgroundSize:'cover',
}));

export default function SquareCorners() {
  return (
    <div>
       <FullScreenPaper square backgroundImage="url('https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg')"></FullScreenPaper>
       <Stack direction="row" spacing={0}>
       <DemoPaper square backgroundImage="url('https://cdn.pixabay.com/photo/2018/07/28/18/20/hotel-3568679_1280.jpg')">
       </DemoPaper>
       <DemoPaper square backgroundColor="black">
       <Typography variant="h1"
       color="white">
          Custom Text 1
        </Typography>
          </DemoPaper>
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
<Stack direction="row" spacing={3}>
<Card sx={{ Width: "800px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://cdn.pixabay.com/photo/2017/07/08/09/21/room-beach-view-2483881_1280.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ROOMS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: "800px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/01/10/0433/MADEL-P0806-Bathroom-Guest-Makeup.jpg/MADEL-P0806-Bathroom-Guest-Makeup.4x3.jpg?imwidth=1280"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ACCESSIBILITY
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: "800px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_1280.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            RESTAUTRENT
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
</Stack>

  </div>
  );
}

