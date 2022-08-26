import {Autocomplete, Button, Container, Grid, Paper} from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const MyAccountInfo = () => {
    return (
        <Container>
            <Grid>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: 240,
                    }}
                >
                    <Grid container spacing={1}>
                    <Box>
                        <Grid>My Account</Grid>
                        <Grid>Personal Info</Grid>
                        <Grid container>
                            <Grid>
                                <TextField
                                    //error={isError.firstname}
                                    margin="normal"
                                    required
                                    id="firstname"
                                    label="First Name"
                                    name="firstname"
                                    //value={firstname || ''}
                                    /*onChange={(e) => {
                                        onChangeFirstName(e)
                                    }}*/
                                    autoFocus
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                    //error={isError.lastname}
                                    margin="normal"
                                    required
                                    id="lastname"
                                    label="Last Name"
                                    name="lastname"
                                    /*value={lastname || ''}
                                       onChange={(e) => {
                                        onChangeLastName(e)
                                    }}*/
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Autocomplete
                                fullWidth
                                id="gender"
                                options={[]}
                                getOptionLabel={(option) => option || ''}
                                //value={gender}
                                /*onChange={(event, newValue: any) => {
                            onChangeGender(event, newValue);
                        }}*/
                                renderInput={
                                    (params) =>
                                        <TextField {...params}
                                                   label="Gender"
                                                   required
                                        />}
                            />
                        </Grid>
                        <Grid container>
                            <Grid>
                                <TextField
                                    //error={isError.email}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    /*value={email || ''}
                                onChange={(e) => {
                                onChangeEmail(e)
                            }}*/
                                    autoFocus
                                />
                            </Grid>
                            <Grid>
                                <TextField
                                    //error={isError.phoneNumber}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    /*value={phoneNumber || ''}
                                onChange={(e) => {
                                onChangePhoneNumber(e)
                            }}*/
                                    autoFocus
                                />
                            </Grid>

                        </Grid>
                        <Grid>
                            <Grid>
                                <TextField
                                    //error={isError.password}
                                    //helperText="Incorrect entry."
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    /*value={password || ''}
                                onChange={(e) => {
                                onChangePassword(e)
                            }}*/
                                />
                            </Grid>
                            <Grid item xs>
                                <Link href="/user-dashboard/business-profile" variant="body2">
                                    Change Password
                                </Link>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                //onClick={handleSubmitSignUpForm}
                            >
                                Update Info
                            </Button>
                        </Grid>

                    </Box>
                    </Grid>

                </Paper>
            </Grid>
        </Container>




        /*<Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: 240,
                        }}
                    >
                        <Box sx={{mt: 1}}>
                            <Grid item container xs={12} sm={12} md={12}>
                                <Grid>
                                    <TextField
                                        //error={isError.firstname}
                                        margin="normal"
                                        required
                                        id="firstname"
                                        label="First Name"
                                        name="firstname"
                                        //value={firstname || ''}
                                        /!*onChange={(e) => {
                                            onChangeFirstName(e)
                                        }}*!/
                                        autoFocus
                                    />
                                </Grid>
                                <Grid>
                                    <TextField
                                        //error={isError.lastname}
                                        margin="normal"
                                        required
                                        id="lastname"
                                        label="Last Name"
                                        name="lastname"
                                        /!*value={lastname || ''}
                                        onChange={(e) => {
                                            onChangeLastName(e)
                                        }}*!/
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>

                            <Autocomplete
                                fullWidth
                                id="gender"
                                options={[]}
                                getOptionLabel={(option) => option || ''}
                                //value={gender}
                               /!* onChange={(event, newValue: any) => {
                                    onChangeGender(event, newValue);
                                }}*!/
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
                                        //error={isError.email}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                       /!* value={email || ''}
                                        onChange={(e) => {
                                            onChangeEmail(e)
                                        }}*!/
                                        autoFocus
                                    />
                                </Grid>
                                <Grid>
                                    <TextField
                                        //error={isError.phoneNumber}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone Number"
                                        name="phone"
                                        /!*value={phoneNumber || ''}
                                        onChange={(e) => {
                                            onChangePhoneNumber(e)
                                        }}*!/
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <TextField
                                    //error={isError.password}
                                    //helperText="Incorrect entry."
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    /!*value={password || ''}
                                    onChange={(e) => {
                                        onChangePassword(e)
                                    }}*!/
                                />
                                <Grid item xs>
                                    <Link href="/user-dashboard/business-profile" variant="body2">
                                        Change Password
                                    </Link>
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                //onClick={handleSubmitSignUpForm}
                            >
                                Update Info
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>*/
    );
}

export default MyAccountInfo;