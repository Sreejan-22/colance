import "./Signup.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import signup from "../../assets/signup.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import facebook from "../../assets/facebook.svg";
import { createTheme, ThemeProvider } from "@material-ui/core";

// customizing our theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#82869A",
    },
  },
});

const useStyles = makeStyles({
  root: {
    fontFamily: "Manrope",
  },
  textField: {
    width: "510",
    marginBottom: "1.5rem",
    color: "textPrimary",
  },
});

const Signup = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={`signup-wrapper ${classes.root}`}>
        <div className="left-signup-part">
          <img
            src={signup}
            alt=""
            // style={{ width: "100%", height: window.innerHeight }}
          />
          {/* <SignupSvg /> */}
        </div>
        <div className="right-signup-part">
          <div className="signup-heading">Sign In</div>
          <div className="signup-subheading">Welcome!</div>
          <form noValidate autoComplete="off" className="signup-form">
            <TextField
              // id="standard-password-input"
              label="Email"
              type="text"
              // autoComplete="current-password"
              className={classes.textField}
              required
            />
            <TextField
              // id="standard-password-input"
              label="Password"
              type="password"
              // autoComplete="current-password"
              className={classes.textField}
              required
            />
            <TextField
              // id="standard-password-input"
              label="Confirm Password"
              type="password"
              // autoComplete="current-password"
              className={classes.textField}
              required
            />
            <input
              type="submit"
              value="Sign Up"
              className="signup-submit-btn"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                margin: "1rem 0rem 1rem 0rem",
              }}
            >
              <div
                className="line"
                style={{ marginTop: "14px", marginRight: "6px" }}
              ></div>
              <div style={{ fontSize: "18px", color: "#B4B6C2" }}>
                or continue with
              </div>
              <div
                className="line"
                style={{ marginTop: "14px", marginLeft: "6px" }}
              ></div>
            </div>
            <div className="signup-logos">
              <div
                className="signup-options-container"
                style={{ backgroundColor: "white" }}
              >
                <img src={google} alt="" />
              </div>
              <div
                className="signup-options-container"
                style={{ backgroundColor: "#373C56" }}
              >
                <img src={apple} alt="" />
              </div>
              <div
                className="signup-options-container"
                style={{ backgroundColor: "white" }}
              >
                <img src={facebook} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Signup;
