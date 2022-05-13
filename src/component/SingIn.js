import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(http://localhost:3000/SideImage.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
           sx={{
            my: 60,
            mx: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:170,
          }}
           >
          <Typography>Choose a data range</Typography>
          <p>Lorem Ipsum has been the industry's standard dummy text 
          </p>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 7,
              display: 'flex',
              flexDirection: 'column',
            //   alignItems: 'center',
            }}
          >
            <Typography  sx={{ fontWeight: 'bold' }} component="h5" variant="h5">
              Create Account
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Typography variant='h6'>Your email adress</Typography>
              <TextField
                sx={{width:360}}
                error
                helperText="Enter your email"
                margin="normal"
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Typography variant='h6'>Your password</Typography>
              <TextField
                sx={{width:360}}
                error
                helperText="Enter your password"
                margin="normal"
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Typography variant='h6'>Confirm your password</Typography>
              <TextField
              sx={{width:360}}
                margin="normal"
                error
                helperText="Enter your confirm password"
                name="confirmpassword"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />
              <Typography variant='h6'>Your full name</Typography>
              <TextField
                sx={{width:360}}
                error
                helperText="Enter your name"
                margin="normal"
                name="fullname"
                type="text"
                id="fullname"
                autoComplete="current-password"
              />
              <Typography variant='h6'>Your phone number</Typography>
              <TextField
                error
                helperText="Enter your phone number"
                sx={{width:360}}
                margin="normal"
                name="phone"
                type="phone"
                id="phone_num"
                autoComplete="current-phone"
              />
              <div>
              <FormControlLabel
                sx={{width:360}}
                control={<Checkbox value="remember" color="primary" />}
                label="I read and agree Terms and Conditions"
              />
              </div>
              <Button
                type="submit"
                variant="contained"
                bgColor='#F0F8FF'
                sx={{ width:200,mt: 3, mb: 2,backgroundColor:"F0F8FF" }}
              >
                Create Account
              </Button>
            
            </Box>

          </Box>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}