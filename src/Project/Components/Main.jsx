// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

// export default function Main() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 3,
//           width: 128,
//           height: 128,
//         },
//       }}
//     >
//       <Paper elevation={3} />
//     </Box>
//   );
// };



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_95,w_1824,h_1026,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-naini-retreat-nainital/Facade_quf8jy',
    title: 'WELCOME',
    width: '40%',

  },
  
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
    <div style={{backgroundImage:'url("data:image/jpeg;base64,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")',
    backgroundRepeat:"no-repeat",
    background:"close"}}>
    <Box sx={{ display: 'flex', flexWrap: 'wrap',alignItems:'center',justifyContent:'center', minWidth: 300, width: '100%',marginTop:'100px',marginLeft:'50px' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </div>
  );
}
