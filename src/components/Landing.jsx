import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import image from "../images/image.jpg";
import image2 from "../images/image2.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  AcUnit,
  AllInclusive,
  ArrowBack,
  ArrowDownward,
  ArrowUpward,
  Home,
} from "@material-ui/icons";
import {
  Collapse,
  Paper,
  Avatar,
  List,
  Toolbar,
  Typography,
  IconeButton,
  ListItem,
  Box,
  ListItemIcon,
  ListItemText,
  Fade,
  Zoom,
} from "@material-ui/core";
const useStyle = makeStyles({
  root: {
    height: 70,
    backgroundColor: "transparent",
  },
  range: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  icon: {
    color: "white",
    fontSize: "20px",
    width: "200px",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  active: {
    display: "none",
  },
  box: {
    height: "150vh",
  },
  image: {
    backgroundImage: `url(${image})`,
    height: "150vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "sans-serif",
  },
  tool: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "30%",
    flexDirection: "column",
  },
  btn: {
    color: "white",
    margin: "50px",
    width: "70px",
    height: "70px",
    cursor: "pointer",
    transition: "0.2s ease-in",
    "&:hover": {
      color: "black",
    },
    border: "2px solid white",
  },
  card: {
    width: "400px",
    height: "270px",
    margin: "0px 50px",
  },
  boxCard: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    alignItems: "flex-end",
  },
  cardImg: { backgroundSize: "cover", backgroundPosition: "center" },
});
const Landing = () => {
  const [state, setState] = useState(false);
  const [grow, setGrow] = useState(false);
  const [text, setText] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", width);
    setText(true);
  });
  const width = () => {
    if (window.innerWidth < 900) {
      setState(true);
    }
    if (window.innerWidth > 900) {
      setState(false);
    }
  };

  const classes = useStyle();
  return (
    <div className={classes.container}>
      {" "}
      <AppBar className={classes.root} position="fixed">
        <Toolbar className={classes.range}>
          <AcUnit style={{ width: 50, height: 50, margin: "10px" }} />
          <AllInclusive style={{ width: 50, height: 50, margin: "10px" }} />

          <List className={state ? classes.active : classes.list}>
            <ListItem className={classes.icon} button>
              <ListItemIcon style={{ color: "white" }}>
                {<ArrowBack />}
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem className={classes.icon} button>
              <ListItemIcon style={{ color: "white" }}>
                {<MenuOutlinedIcon />}
              </ListItemIcon>
              <ListItemText>Info</ListItemText>
            </ListItem>
            <ListItem button className={classes.icon}>
              <ListItemIcon style={{ color: "white" }}>{<Home />}</ListItemIcon>
              <ListItemText>More</ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
      <Box className={classes.box}>
        <Paper className={classes.image}>
          <Toolbar className={classes.tool}>
            <Zoom in={text} style={{ transitionDelay: text ? "500ms" : "0ms" }}>
              <Typography style={{ color: "white" }} variant="h2">
                HELLO IN MY WORLD
              </Typography>
            </Zoom>

            <Link activeClass="active" to="card" smooth={true} duration={800}>
              {" "}
              <ArrowDownward
                className={classes.btn}
                onClick={() => setGrow(true)}
              />
            </Link>
          </Toolbar>
          <Collapse in={grow} {...(grow ? { timeout: 1500 } : {})}>
            {" "}
            <Box id="card" className={classes.boxCard}>
              {" "}
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={image2}
                    title="Contemplative Reptile"
                    className={classes.cardImg}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={image2}
                    title="Contemplative Reptile"
                    className={classes.cardImg}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Collapse>
        </Paper>
      </Box>
    </div>
  );
};

export default Landing;
