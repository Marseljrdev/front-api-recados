import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

interface DefaultLayoutProps {
  component: React.FC;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  component: Component,
}) => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, marginBottom: "15px" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <Container>
            <Component />
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DefaultLayout;
