import { Box, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => { 
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        // <div>
        //     <input type="text" />
        //     <input type="password" />
        //     <button onClick={() => {navigation('/dashboard')}}>Log In</button>
        // </div>
        <Box sx={{ flex: 1 }}>
           <Grid container spacing={2} style={{ backgroundColor: "red" }}>
                <Grid item xs={12} md={6} lg={3} xl={1} style={{ backgroundColor: "orange" }}>
                    <h2>Logo</h2>
                </Grid>
                <Grid item xs={12} md={6} lg={3} xl={1}>
                    <h2>xs=4</h2>
                </Grid>
                <Grid item xs={12} md={6} lg={3} xl={1} style={{ backgroundColor: "green" }}>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3} xl={1}>
                    <h2>xs=8</h2>
                </Grid>
            </Grid> 
        </Box>
        
    )
 }

 export default Login;