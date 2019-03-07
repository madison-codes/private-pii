import React from "react";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  appBar: {
    position: "relative",
    width: "100vw"
  }
});

export class Nav extends React.Component {
  render() {
    return (
      <AppBar position="absolute" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Message Encryptor
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
