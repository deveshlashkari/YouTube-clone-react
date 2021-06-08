import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardMain: {
    boxShadow: "none",
  },
}));

export default function VideoCards() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.cardMain}>
              <CardMedia
                image={"/laptop.jpg"}
                title="rose"
                style={{ height: "200px" }}
              />
              <CardContent>
                <div style={{ display: "flex" }}>
                  <Avatar src="/laptop.jpg" style={{ marginTop: "10px" }} />
                  <Grid container spacing={0} style={{ marginLeft: "10px" }}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Video Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{
                          display: "block",
                        }}
                      >
                        Channel Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="textSecondary">
                        365k Views .
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        12 hours ago
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
