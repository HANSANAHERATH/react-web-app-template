import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Autocomplete, Paper} from "@mui/material";
import {useState} from "react";

const theme = createTheme();

const ResetPassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isError, setIsError] = useState({
       password: false,
       confirmPassword: false
    });

    const onChangePassword = (event: any) => {
        if(isError.password){
            setIsError({ ...isError, password: false});
        }
        setPassword(event.target.value);
    }

    const onChangeConfirmPassword = (event: any) => {
        if(isError.password){
            setIsError({ ...isError, confirmPassword: false});
        }
        setConfirmPassword(event.target.value);
    }

    const handleSubmitResetPasswordForm = () => {
        
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        //backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Reset Password
                        </Typography>
                        <Box sx={{mt: 1}}>
                            <TextField
                                error={isError.password}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Enter a new password"
                                type="password"
                                id="password"
                                value={password || ''}
                                onChange={(e) => {
                                    onChangePassword(e)
                                }}
                            />
                            <TextField
                                error={isError.confirmPassword}
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Enter a new password again"
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword || ''}
                                onChange={(e) => {
                                    onChangeConfirmPassword(e)
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                onClick={handleSubmitResetPasswordForm}
                            >
                                Reset Password
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/sign-in" variant="body2">
                                        Back to Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default ResetPassword;