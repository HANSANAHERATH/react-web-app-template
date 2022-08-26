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
import {connect} from "react-redux";
import {Gender} from "../../models/ReferenceDataModels";
import {signUpRequest} from "../../actions/SignUpAction";
import {SignUpModel} from "../../models/SignUpModels";

const theme = createTheme();

type Props = {
    signUpRequest: (singUp: SignUpModel) => void,
    //signInRequestReset: () => void,
    genderData: Gender [],
    loading: boolean,
    error: any,
}

const SignUp: React.FC<Props> = ({
                                     genderData,
                                     loading,
                                     error,
                                     signUpRequest,
                                 }) => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState<Gender>(genderData[0]);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isError, setIsError] = useState({
        firstname: false,
        lastname: false,
        email: false,
        phoneNumber: false,
        password: false,
        confirmPassword: false,
    })

    const onChangePhoneNumber = (event: any) => {
        if(isError.phoneNumber){
            setIsError({...isError, phoneNumber: false})
        }
        setPhoneNumber(event.target.value);
    }

    const onChangeFirstName = (event: any) => {
        if(isError.firstname){
            setIsError({...isError, firstname: false})
        }
        setFirstname(event.target.value);
    }

    const onChangeLastName = (event: any) => {
        if(isError.lastname){
            setIsError({...isError, lastname: false})
        }
        setLastname(event.target.value);
    }

    const onChangeGender = (event: any, value: Gender) => {
        setGender(value);
    }

    const onChangeEmail = (event: any) => {
        if(isError.email){
            setIsError({...isError, email: false})
        }
        setEmail(event.target.value);
    }

    const onChangePassword = (event: any) => {
        if(isError.password){
            setIsError({...isError, password: false})
        }
        setPassword(event.target.value);
    }

    const onChangeConfirmPassword = (event: any) => {
        if(isError.confirmPassword){
            setIsError({...isError, confirmPassword: false})
        }
        setConfirmPassword(event.target.value);
    }

    const validate = () => {
        let isErrorPrev = {...isError};
        isErrorPrev.firstname = firstname === '';
        isErrorPrev.lastname = lastname === '';
        isErrorPrev.email = email === '';
        isErrorPrev.phoneNumber = phoneNumber === '';
        isErrorPrev.password = password === '' || confirmPassword !== password;
        isErrorPrev.confirmPassword = confirmPassword === '' || confirmPassword !== password;
        setIsError(isErrorPrev);
        return isErrorPrev.firstname || isErrorPrev.lastname || isErrorPrev.email || isErrorPrev.phoneNumber || isErrorPrev.password || isErrorPrev.confirmPassword;
    }

    const handleSubmitSignUpForm = () => {
        if(!validate()){
            signUpRequest({
                firstname: firstname,
                lastname: lastname,
                gender: gender.displayName,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
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
                            Sign up
                        </Typography>
                        <Box sx={{mt: 1}}>
                            <Grid item container xs={12} sm={12} md={12}>
                                <Grid>
                                    <TextField
                                        error={isError.firstname}
                                        margin="normal"
                                        required
                                        id="firstname"
                                        label="First Name"
                                        name="firstname"
                                        value={firstname || ''}
                                        onChange={(e) => {
                                            onChangeFirstName(e)
                                        }}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid>
                                    <TextField
                                        error={isError.lastname}
                                        margin="normal"
                                        required
                                        id="lastname"
                                        label="Last Name"
                                        name="lastname"
                                        value={lastname || ''}
                                        onChange={(e) => {
                                            onChangeLastName(e)
                                        }}
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>

                            <Autocomplete
                                fullWidth
                                id="gender"
                                options={genderData}
                                getOptionLabel={(option) => option.displayName || ''}
                                value={gender}
                                onChange={(event, newValue: any) => {
                                    onChangeGender(event, newValue);
                                }}
                                renderInput={
                                    (params) =>
                                        <TextField {...params}
                                                   label="Gender"
                                                   required
                                        />}
                            />
                            <Grid item container>
                                <Grid>
                                    <TextField
                                        error={isError.email}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        value={email || ''}
                                        onChange={(e) => {
                                            onChangeEmail(e)
                                        }}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid>
                                    <TextField
                                        error={isError.phoneNumber}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone Number"
                                        name="phone"
                                        value={phoneNumber || ''}
                                        onChange={(e) => {
                                            onChangePhoneNumber(e)
                                        }}
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                error={isError.password}
                                //helperText="Incorrect entry."
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
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
                                label="Confirm Password"
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
                                onClick={handleSubmitSignUpForm}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    Already Have An Account?
                                    <Link href="/sign-in" variant="body2">
                                        Sign In
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
    let {loading, error, genderData} = state.referenceData;
    return {
        loading,
        error,
        genderData,
    };
}

export default connect(mapStateToProps, {signUpRequest})(SignUp);