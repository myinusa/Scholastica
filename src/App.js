import React from "react";
import { Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonIcon from "@material-ui/icons/Person";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Calendar from "react-calendar";
//import ReactWeeklyDayPicker from "./react-weekly-day-picker/src";
import ReactWeeklyDayPicker from "react-weekly-day-picker";
import "./index.css";
const quote = require("inspirational-quotes");

var prnQuote = quote.getQuote();

const drawerWidth = 370;

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
var prnDt = new Date().toLocaleDateString("en-us", options);

/* TODO Add greeting dependent on the time, e.g. Good Morning < 12
 * Will involve state management
 * */
var today = new Date();
var curHr = today.getHours();

if (curHr < 12) {
  console.log("good morning");
} else if (curHr < 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  BottomNavigation: {
    //display: "grid",
    width: drawerWidth,
    //flexGrow: 1,
    position: "absolute",
    bottom: 0
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth
    //overflow: none
    //flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  // greeting: {
  //   marginBottom: 3
  // },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

class App extends React.Component {
  state = { quote: "" };
}

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
          {/* <div className="align-right"> */}
          {/* TODO Align Sign Out button to the right of Toolbar */}
          <ExitToAppIcon className="align-right" />
          {/* </div> */}
        </Toolbar>
      </AppBar>

      {/* Start of Drawer*/}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <div className="greeting">
          <p>
            <b>{prnDt}</b>
            <br />
            Morning/Afternoon/Evening
          </p>
        </div>

        <div className="calendar-widget">
          <p>
            {prnQuote.text}
            <blockquote>{prnQuote.author}</blockquote>
          </p>
        </div>

        {/* TODO Make the circles smaller to fit more dates */}
        {/* TODO Add week numbers */}
        <div className="greeting">
          <ReactWeeklyDayPicker classNames={classes.dayCircle} daysCount={3} />
        </div>

        {/* Start of Journal Block */}
        <div className="journal_text">
          <h4>
            Journals
            <EditIcon className="icon_settings" />
          </h4>
        </div>

        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Card className="cardone">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Journal #1
                </Typography>
                <Typography variant="h5" component="h2">
                  Text
                </Typography>
                <Typography color="textSecondary">adjective</Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="cardtwo">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Journal #2
                </Typography>
                <Typography variant="h5" component="h2">
                  Text
                </Typography>
                <Typography color="textSecondary">adjective</Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* End of Journal Block */}

        {/* Start of Bottom Navigation */}
        <Grid container spacing={3}>
          <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.BottomNavigation}
          >
            <Grid item s>
              <BottomNavigationAction value="recents" icon={<HomeIcon />} />
            </Grid>
            <Grid item s>
              <BottomNavigationAction value="favorites" icon={<MenuIcon />} />
            </Grid>
            <Grid item s>
              <BottomNavigationAction
                value="nearby"
                icon={<CalendarTodayIcon />}
              />
            </Grid>
            <Grid item s>
              <BottomNavigationAction value="folder" icon={<PersonIcon />} />
            </Grid>
          </BottomNavigation>
        </Grid>
        {/* End of Bottom Navigation */}
      </Drawer>
      {/* End of Drawer*/}

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio.
        </Typography>

        <form>
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" required />
            <label>Last Name</label>
            <input type="text" name="lastName" required />
          </div>
          <div>
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password1" />
          </div>
          <div>
            <label>Re-enter Password</label>
            <input type="password" name="password2" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </main>
    </div>
  );
}
