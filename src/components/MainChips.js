import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    borderTop: "1px solid #E5E5E5",
    borderBottom: "1px solid #E5E5E5",
    padding: "10px",
  },
}));

export default function MainChips() {
  const classes = useStyles();

  let chipsList = [
    "All",
    "Mixes",
    "Music",
    "Stock Markets",
    "Javascript",
    "React",
    "Redux",
    "Context API",
    "Node",
    "Ruby",
    "Live Gaming",
    "Bitcoin",
    "Website",
    "Tourism",
    "Conversation",
    "Linux",
    "Street Food",
    "India",
  ];

  return (
    <div className={classes.root}>
      {chipsList.map((_data) => {
        return <Chip label={_data} />;
      })}
    </div>
  );
}
