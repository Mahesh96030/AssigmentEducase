import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        height:"100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fafbfc',
          border:"1px solid #fff",
          height:"70vh",
          width:"50vh",
          borderRadius: 2,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems:"flex-start",
          p: 2,
          m:2
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Welcome to PopX
        </Typography>
        <Typography variant='p' sx={{color:"gray",pt:2}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic totam quisquam molestias.
        </Typography>
        <Button variant='contained' fullWidth sx={{mt:2}} onClick={()=>navigate("/register")}>Create Account</Button>
        <Button variant='contained' fullWidth sx={{mt:2,backgroundColor:"lightgray",color:"#000"}} onClick={()=>navigate("/login")}>Already Registered? Login</Button>
      </Box>
    </Box>
  );
};
