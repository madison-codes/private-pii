import React from "react";
import { initialize } from "../actions/index.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

export class Password extends React.Component {
  constructor() {
    super();
    this.state = {
      password: ""
    };
  }

  addPassword(password) {
    this.setState({ password });
  }

  submit() {
    this.props.initialize(this.state.password);
  }

  render() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Enter your password
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              onChange={e => this.addPassword(e.target.value)}
              fullWidth
              autoComplete="fname"
            />
          </Grid>
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
      </>
    );
  }
}

const mapDispatchToProps = { initialize };

export default connect(
  null,
  mapDispatchToProps
)(Password);
