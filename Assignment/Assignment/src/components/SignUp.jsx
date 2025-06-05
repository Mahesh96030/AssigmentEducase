import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MainPage } from './MainPage';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const {register,handleSubmit,formState:{errors},reset} = useForm({mode:"onBlur"});
    const navigate = useNavigate();

    const submitHandler = (data) => {
        console.log(data)
        reset();
        navigate('/main', { state: { fullName: data.fullName, email: data.email } });
    }

    const validationSchema = {
        fullName:{
            required:{
                value:true,
                message:"Full Name is Required *"
            }
        },
        email:{
            required:{
                value:true,
                message:"E-mail is Required *"
            }
        },
        password:{
            required:{
                value:true,
                message:"Password is Required *"
            }
        },
        mobile:{
            required:{
                value:true,
                message:"Phone Number is Required *"
            }
        },
        companyName:{
            required:{
                value:true,
                message:"Company Name is Required *"
            }
        }
    }
  return (
    <Box
      sx={{
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fafbfc',
          height: "auto",
          width: "60vh",
          borderRadius: 2,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Sign in to your PopX Account
          </Typography>
          <Typography sx={{ color: "gray", pt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic totam quisquam molestias.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(submitHandler)}
            sx={{ mt: 2 }}
          >
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              placeholder='Enter full name'
              error={errors.fullName}
              {...register("fullName",validationSchema.fullName)}
              helperText={errors.fullName && errors.fullName.message}
            />
            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              placeholder='Enter phone number'
              error={errors.mobile}
              {...register("mobile",validationSchema.mobile)}
              helperText={errors.mobile && errors.mobile.message}
            />
            <TextField
              label="E-mail Address"
              fullWidth
              margin="normal"
              placeholder='Enter email address'
              error={errors.email}
              {...register("email",validationSchema.email)}
              helperText={errors.email && errors.email.message}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              placeholder='Enter password'
              error={errors.password}
              {...register("password",validationSchema.password)}
              helperText={errors.password && errors.password.message}
            />
            <TextField
              label="Company Name"
              fullWidth
              margin="normal"
              placeholder='Enter company name'
              error={errors.companyName}
              {...register("companyName",validationSchema.companyName)}
              helperText={errors.companyName && errors.companyName.message}
            />
            <FormControl component="fieldset" sx={{ mt: 2,pb:2 }}>
                <FormLabel component="legend">Are You an Agency?</FormLabel>
                <RadioGroup
                    row
                    name="agency"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            <Box sx={{ flexGrow: 1 }} />
            <Button
                type="submit"
                variant="contained"
                fullWidth
            >
                Create An Account
            </Button>
        </Box>
          </Box>
        </Box>
    </Box>
  )
}

