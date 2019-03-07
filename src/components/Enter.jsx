import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addPII } from "../actions/index.js";

const message = ["success", "failure"];

export class Enter extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      snackbarOpen: false
    };
  }

  addMessage(message) {
    this.setState({ message });
  }

  submit() {
    this.props.addPII(this.state.message);
  }

  render() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Information to encrypt
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} />
          <Grid item xs={12}>
            <TextField
              required
              id="message"
              name="message"
              label="Information to secure"
              onChange={e => this.addMessage(e.target.value)}
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
