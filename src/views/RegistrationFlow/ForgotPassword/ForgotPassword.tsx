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
import {Paper} from "@mui/material";
import {useState} from "react";
import {forgotPasswordRequest} from "../../actions/ForgotPasswordAction";
import {ForgotPassModel} from "../../models/ForgotPasswordModels";
import {connect} from "react-redux";

const theme = createTheme();

type Props = {
    forgotPasswordRequest: (payload: ForgotPassModel) => void,
    loading: boolean,
    error: any,
}

const ForgotPassword: React.FC<Props> = ({
    forgotPasswordRequest,
    loading,
    error,
                                         }) => {
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);

    const onChangeEmail = (event: any) => {
        setIsError(false);
        setEmail(event.target.value);
    }

    const handleSubmitForgotPasswordForm = () => {
        let isValidEmail = false;
        isValidEmail = email === '';
        setIsError(isValidEmail);
        if(!isValidEmail){
            forgotPasswordRequest({
                email: email
            });
        }
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
                            Forgot password
                        </Typography>
                        <Typography>
                            No worries, we'll send you reset instructions.
                        </Typography>
                        <Box sx={{mt: 1}}>
                            <TextField
                                error={isError}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Enter your email"
                                name="email"
                                value={email || ''}
                                onChange={(e) => {
                                    onChangeEmail(e)
                                }}
                                autoFocus
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                onClick={handleSubmitForgotPasswordForm}
                            >
                                Send Recovery Link
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/sign-in" variant="body2">
                                        Back to Sign In
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

function mapStateToProps(state: any) {
    let {loading, error } = state.forgotPass;
    return {
        loading,
        error,
    };
}

export default connect(mapStateToProps, {forgotPasswordRequest})(ForgotPassword);