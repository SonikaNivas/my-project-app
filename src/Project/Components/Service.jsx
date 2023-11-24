// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';



// const images = [
//   {
//     url: 'https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg',
//     title: 'Restaurant',
//     width: '30%',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2016/08/11/02/23/massage-therapy-1584711_1280.jpg',
//     title: 'Spa',
//     width: '30%',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2021/10/07/15/25/car-6688969_1280.jpg',
//     title: 'Car Rental',
//     width: '30%',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2013/10/07/13/34/pool-191972_1280.jpg',
//     title: 'Swimming',
//     width: '30%',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2021/08/04/14/16/tower-6521842_1280.jpg',
//     title: 'Tour',
//     width: '30%',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2017/08/28/17/22/table-2690488_1280.jpg',
//     title: 'Event Hall',
//     width: '30%',
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: "200px",
//   [theme.breakpoints.down('sm')]: {
//     width: '100% !important', // Overrides inline-style
//     height: "100px",
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid currentColor',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

// export default function ButtonBaseDemo() {
//   return (
//     <div>
//         <h1>ALL U NEED</h1>
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',marginLeft:"70px",marginBottom:"50px",marginTop:"50px"}}>
//       {images.map((image) => (
//         <ImageButton
//           focusRipple
//           key={image.title}
//           style={{
//             width: image.width,
//           }}
//         >
//           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={{
//                 position: 'relative',
//                 p: 4,
//                 pt: 2,
//                 pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//               }}
//             >
//               {image.title}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))}
//     </Box>
//     </div>
//   );
// }
