import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from "react-redux";
import { addPII } from "../actions/index.js";

const message = ["success", "failure"];

export class Enter extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      pii: "",
      snackbarOpen: false
    };
  }

  addTitle(title) {
    this.setState({ title });
  }

  addPII(pii) {
    this.setState({ pii });
  }

  submit() {
    this.props.addPII(this.state.title, this.state.pii);
  }

  handleOpen = message => {
    console.log("triggered");
    this.setState({ snackbarOpen: true });
    this.handleSnackbar(message);
  };

  handleClose = () => {
    this.setState({ snackbarOpen: false });
  };

  handleSnackbar(message) {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={this.state.snackbarOpen}
        onClose={this.handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{message}</span>}
      />
    );
  }

  render() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Information to encrypt
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              onChange={e => this.addTitle(e.target.value)}
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="message"
              name="message"
              label="Information to secure"
              onChange={e => this.addPII(e.target.value)}
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.submit()}
            // className={classes.button}
          >
            {/* {activeStep === steps.length - 1 ? "Place order" : "Next"} */}
            {"Submit"}
          </Button>
        </Grid>
      </>
    );
  }
}

const mapDispatchToProps = { addPII };

export default connect(
  null,
  mapDispatchToProps
)(Enter);
