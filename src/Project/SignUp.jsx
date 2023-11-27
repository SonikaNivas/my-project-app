// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// //import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link } from 'react-router-dom';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               {/* <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid> */}
//             </Grid>
//             <Link to="/login">
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               <Link to="/login" style={{textDecoration:"none",color:"white"}}>
//                   Sign Up
//               </Link>
//             </Button>
//             </Link>
//             {/* <Grid container justifyContent="flex-end">
//               <Grid item>
//               <Link to="/login" underline="hover">
//               {"Already have an account?"}
//             </Link>
//               </Grid>
//             </Grid> */}
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
// import React from "react";
// import useSignup from "./useSignup";


// const SignUp = () => {
//   const {
//     nameRef,
//     mailRef,
//     pwRef,
//     cpwRef,
//     error,
//     addNewUser,
//   } = useSignup();

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" ref={nameRef} />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" ref={mailRef} />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" ref={pwRef} />
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input type="password" id="confirmPassword" ref={cpwRef} />
//       </div>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       <button onClick={addNewUser}>Sign Up</button>
//     </div>

    
//   );
// };

// export default SignUp;
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import useSignup from './useSignup';

const SignUp = () => {
  const signIn = useSignup();

  return (
    <div >
    
    <Paper >
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height:'95vh',

      
      }}
    >
        <div style={{backgroundColor:'white',height:'500px',width:'480px'}}>
          <br></br>
          <center>
            <Typography component="h3" variant="h3">
              Welcome
            </Typography>
            <p>Please sign up to continue</p>
         </center>
          <br></br>
          <center>
      <Box>
        <br></br>
        <TextField
        label="*userName"
          size="small"
          style={{ width: '350px'}}
          inputRef={signIn.nameRef}
        />
      </Box>
      <Box>
       <br></br>
        <TextField
        label="*Email"
          size="small"
          style={{ width: '350px' }}
          inputRef={signIn.mailRef}
        />
      </Box>
      <Box>
        <br></br>
        <TextField
        label="* Password"
          size="small"
          style={{ width: '350px' }}
          type="password"
          inputRef={signIn.pwRef}
        />
      </Box>
      <Box>
        <br></br>
        <TextField
        label="*Confirm Password"
          size="small"
          style={{ width: '350px' }}
          type="password"
          inputRef={signIn.cpwRef}
        />
      </Box>
      <br></br>
      <Button
        variant="contained"
        style={{ width: '350px', marginTop: '12px' }}
        onClick={signIn.addNewUser}
      >
        Sign up
      </Button>
      <br></br>
      {signIn.error && (
        <Typography color="error" style={{ marginTop: '8px' }}>
          {signIn.error}
        </Typography>
      )}

      </center>
    </div>
    </Container>
    </Paper>
    </div>
  );
};

export default SignUp;