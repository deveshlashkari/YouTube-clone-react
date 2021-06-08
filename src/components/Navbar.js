import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField, Button, Badge, Avatar, Grid } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { BASE_COLOR, SECONDARY_COLOR } from "../Constants/Constants";
const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,

    background: "#FFFFFF",
  },
  search: {
    marginLeft: "400px !important",
    position: "relative",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  input1: {
    height: "0px",
    width: "500px",
  },
  textfieldRoot: {
    borderRadius: "0px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  console.log(BASE_COLOR);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ boxShadow: "none" }}
      >
        <Toolbar>
          <MenuIcon style={{ color: "#565656" }} />
          <img
            src="https://cdn.svgporn.com/logos/youtube.svg"
            style={{ height: "20px", marginLeft: "20px" }}
          />
          <Typography
            variant="body2"
            style={{
              fontSize: "16px",
              color: "#565656",
              marginLeft: "10px",
              paddingTop: "4px",
            }}
          >
            IN
          </Typography>
          <div className={classes.search}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              style={{
                textAlign: "center",
                width: "500px",
                borderRadius: "0px",
              }}
              classes={{
                root: classes.textfieldRoot,
              }}
              InputProps={{
                classes: { input: classes.input1 },
                placeholder: "Search",
              }}
            />
            <Button
              variant="outlined"
              style={{ borderRadius: "2px", height: "37px" }}
            >
              <SearchIcon />
            </Button>
          </div>

          <MicIcon style={{ color: "#565656" }} />
          <div style={{ marginLeft: "400px" }}>
            <Grid container direction="row" spacing={4} alignItems="flex-end">
              <Grid item>
                <VideoCallIcon style={{ color: "#565656" }} />
              </Grid>
              <Grid item>
                <AppsIcon style={{ color: "#565656" }} />
              </Grid>
              <Grid item>
                <Badge
                  badgeContent={4}
                  color="error"
                  style={{ height: "31px" }}
                >
                  <NotificationsIcon style={{ color: "#565656" }} />
                </Badge>
              </Grid>
              <Grid item>
                <Avatar
                  alt="Remy Sharp"
                  src="https://yt3.ggpht.com/yti/ANoDKi79pbd_2uk3QJWzaAbmzRVfYR4nqveSoUlPYC7iYUk=s88-c-k-c0x00ffffff-no-rj-mo"
                />
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
