import React from "react";
import SavePII from "./components/SavePII.jsx";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./components/AppBar.jsx";
// import Web3 from "web3";
// import TruffleContract from "truffle-contract";
// import Election from "../build/contracts/Election.json";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

export class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       account: "0x0",
  //       candidates: [],
  //       hasVoted: false,
  //       loading: true,
  //       voting: false,
  //       web3Provider: null,
  //       contracts: {}
  //     };
  //   }

  //   TODO: HOOK up to truffleJS to push encrypted data to blockchain

  //   componentDidMount() {
  //     this.initWeb3();
  //   }

  //   initWeb3() {
  //     if (window.ethereum) {
  //       this.web3Provider = window.ethereum;
  //       try {
  //         window.ethereum.enable();
  //         console.log("Ethereum Enabled");
  //       } catch (error) {
  //         console.error("User denied account access");
  //       }
  //     } else if (window.web3) {
  //       this.web3Provider = window.web3.currentProvider;
  //     } else {
  //       this.web3Provider = new Web3.providers.HttpProvider(
  //         "http://localhost:7545"
  //       );
  //     }
  //     web3 = new Web3(this.web3Provider);
  //     return this.initContract();
  //   }

  //   initContract() {
  //     this.state.contracts.Election = TruffleContract(Election);
  //     this.state.contracts.Election.setProvider(this.web3Provider);
  //     console.log("CONTRACT", this.state.contracts);
  //     this.getContract();
  //   }

  //   getContract() {
  //     this.state.contracts.Election.deployed()
  //       .then(function(instance) {
  //         console.log("Instance", instance);
  //       })
  //       .catch(function(err) {
  //         console.log(err.message);
  //       });
  //   }

  render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <AppBar />
        <main className={classes.layout}>
          <SavePII />
        </main>
      </>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
