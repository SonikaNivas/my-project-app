// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// //import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// //import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { Link } from 'react-router-dom';


// const pages = [];

// export default function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
  
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
  

//    const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//    };

//    const { user, logout } = useAuth(); // Use useAuth hook


//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             RelaxInn!
//           </Typography>
//           <CustomLink to="/main" style={{ textDecoration: "none",color: "white"}}>
//             HOME &emsp;
//           </CustomLink>                    
//           <CustomLink to="/main" style={{ textDecoration: "none",color: "white"}}>
//             ABOUT &emsp;
//           </CustomLink>                    
//           <CustomLink to="/main" style={{ textDecoration: "none",color: "white"}}>
//             CONTACT &emsp;
//           </CustomLink>                    
//           <CustomLink to="/main" style={{ textDecoration: "none",color: "white"}}>
//             SERVICE &emsp;
//           </CustomLink>                    

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//              </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
         
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
        
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
      
//           <ul>
//               <button>
//               <CustomLink to="/login" style={{ textDecoration: "none" ,color:"blue"}}> 
//               Login
//               </CustomLink>
//               </button>

//             <button>
//             <CustomLink to="/sign" style={{ textDecoration: "none" ,color:"blue"}}>
//               SignUp
//               </CustomLink>
//              </button>
//           </ul>

//         </Toolbar>
//       </Container>
//     </AppBar>
    
//   );
// }
// function CustomLink({ to, children, ...props}){
//   return (
//     <Link to={to} {...props}>
//       {children}
//     </Link>
//   );
// }



// Navbar.js




// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth from AuthContext
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
  const { user, logout } = useAuth(); // Use useAuth hook for user authentication

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RelaxInn!
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ul>
              <CustomLink to="/main" style={{ textDecoration: 'none', color: 'white' }}>
                HOME &emsp;
              </CustomLink>
              <CustomLink to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                ABOUT &emsp;
              </CustomLink>
              <CustomLink to="/main" style={{ textDecoration: 'none', color: 'white' }}>
                SERVICE &emsp;
              </CustomLink>
            </ul>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Page 1</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Page 2</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Page 3</Typography>
              </MenuItem>
            </Menu>
          </Box>
{/* 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Page 1
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Page 2
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Page 3
            </Button>
          </Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {user ? (
              <>
                <Button onClick={logout} sx={{ my: 2, color: 'white', display: 'block' }}>
                  Logout
                </Button>
                <Typography variant="h6" sx={{ color: 'white', display: 'block', m: 1 }}>
                  Welcome, {user.name}!
                </Typography>
              </>
            ) : (
              <ul>
                <button>
                  <CustomLink to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
                    Login
                  </CustomLink>
                </button>
                <button>
                  <CustomLink to="/signup" style={{ textDecoration: 'none', color: 'blue' }}>
                    SignUp
                  </CustomLink>
                </button>
              </ul>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default Navbar;
