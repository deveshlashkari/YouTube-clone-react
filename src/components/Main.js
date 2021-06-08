import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";

import Navbar from "./Navbar";
import MainChips from "./MainChips";
import VideoCards from "./VideoCards";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#FFFFFF",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ExploreIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Explore"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SubscriptionsIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Subscriptions"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <VideoLibraryIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Library"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HistoryIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"History"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PlayCircleOutlineIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Your videos"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalMoviesIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Your movies"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WatchLaterIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Watch later"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ExpandMoreIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Show more"} />
            </ListItem>
          </List>
          <Divider />
          <Typography
            variant="body2"
            style={{
              fontSize: "15px",
              textTransform: "uppercase",
              color: "#565656",
              padding: "10px",
            }}
          >
            Subscriptions
          </Typography>
          <List>
            <ListItem button>
              <ListItemIcon>
                <img
                  src="https://cdn.svgporn.com/logos/javascript.svg"
                  style={{ height: "20px", width: "20px" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Javascript"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <img
                  src="https://cdn.svgporn.com/logos/react.svg"
                  style={{ height: "20px", width: "20px" }}
                />
              </ListItemIcon>
              <ListItemText primary={"React"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <img
                  src="https://cdn.svgporn.com/logos/material-ui.svg"
                  style={{ height: "20px", width: "20px" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Material ui"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ExpandMoreIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Show more"} />
            </ListItem>
          </List>
          <Divider />
          <Typography
            variant="body2"
            style={{
              fontSize: "15px",
              textTransform: "uppercase",
              color: "#565656",
              padding: "10px",
            }}
          >
            More from youtube
          </Typography>
          <List>
            <ListItem button>
              <ListItemIcon>
                <YouTubeIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"YouTube Premium"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalMoviesIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Movies"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SportsEsportsIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Gaming"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LiveTvIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Live"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EmojiObjectsIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Fashion"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EmojiObjectsIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Learning"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SportsCricketIcon style={{ color: "#565656" }} />
              </ListItemIcon>
              <ListItemText primary={"Sports"} />
            </ListItem>
          </List>
          <Divider />
          <div style={{ display: "flex", marginTop: "10px" }}>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              About
            </Typography>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              Press
            </Typography>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              Copyright
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              Contact us
            </Typography>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              Creators
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              Advertise
            </Typography>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              Developers
            </Typography>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              Terms
            </Typography>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              Privacy
            </Typography>
            <Typography
              variant="body2"
              style={{ marginLeft: "5px", color: "#565656" }}
            >
              Policy & Safety
            </Typography>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              How YouTube works
            </Typography>
          </div>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656" }}
            >
              Test new features
            </Typography>
          </div>
          <div
            style={{ display: "flex", marginTop: "10px", marginBottom: "30px" }}
          >
            <Typography
              variant="body2"
              style={{ marginLeft: "10px", color: "#565656", fontSize: "12px" }}
            >
              &copy; 2021 Google LLC
            </Typography>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Grid container>
          <Grid item xs={12}>
            <MainChips />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <VideoCards />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
