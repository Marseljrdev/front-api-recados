import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { loginAction } from "../store/modules/user.slice";
import { RootState } from "../store/store";
// import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const dispatch = useDispatch<any>();
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  useEffect(() => {
    console.log(user);
    if(user.id){
      navigate("/home");
      return;
    }
  }, [user, navigate]);


  
  const handleLogin = (e: any) => {
    e.preventDefault();

    const result = dispatch(loginAction({ email, password }));
    // console.log("Log result dispatch", result);
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundImage: "url(/images/programacao.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="600">
          Login
        </Typography>
        <FormControl sx={{ m: 1, width: "45ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">E-mail</InputLabel>
          <OutlinedInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-adornment-email"
            type="email"
            label="Email"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "45ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
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
        <Button onClick={handleLogin}>Acessar</Button>
        <Typography>
          Não tem um acesso? <Link to="/register">Registre-se</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
