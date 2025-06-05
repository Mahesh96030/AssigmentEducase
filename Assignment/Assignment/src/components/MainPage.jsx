import React from 'react';
import { Card, CardContent, Avatar, Typography, Box, IconButton, Divider } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useLocation } from 'react-router-dom';

export const MainPage = () => {
    const location = useLocation();
    const {fullName,email} = location.state || {}
  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Card sx={{ maxWidth: 400, width: '100%', p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Account Settings
        </Typography>
        <Divider />
        <Box display="flex" alignItems="center" gap={2} mt={3}>
          <Box position="relative">
            <Avatar
              alt="Marry Doe"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              sx={{ width: 64, height: 64 }}
            />
            <IconButton
              size="small"
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              <PhotoCameraIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {fullName}
            </Typography>
            <Typography variant="body2">{email}</Typography>
          </Box>
        </Box>

        <CardContent sx={{ pl: 0, pt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};


