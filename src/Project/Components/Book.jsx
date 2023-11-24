// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

// export default function SimplePaper() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         backgroundImage:'url("")',
//         alignContent:'center',
//         justifyContent:'center',
//         '& > :not(style)': {
//           m: 0,
//           marginLeft:0,
//           marginRigth:0,
//           width:"1440px",
//           height:"200px",
//         },
//       }}
//     >
//       <Paper square elevation={2} />
//     </Box>
//   );
// }
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "1600px",
  height: "400px",
//   padding: theme.spacing(2),
//   ...theme.typography.body2,
//   textAlign: 'center',
backgroundImage:'url("https://st4.depositphotos.com/16122460/40454/i/450/depositphotos_404548222-stock-photo-happy-family-inflatable-ring-swimming.jpg")',
backgroundSize:'',


}));

export default function SquareCorners() {
  return (
    <Stack direction="row">
      <DemoPaper square></DemoPaper>
      {/* <DemoPaper square>square corners</DemoPaper> */}
    </Stack>
  );
}