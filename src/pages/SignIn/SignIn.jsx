import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import sign_in_svg from "../../assets/sign_in_svg.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import facebook from "../../assets/facebook.svg";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#82869A",
    },
  },
});

const useStyles = makeStyles({
  root: {
    fontFamily: "DM Sans",
  },
  textField: {
    width: "510",
    marginBottom: "1.5rem",
    color: "textPrimary",
  },
});

const SignIn = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={`signin-wrapper ${classes.root}`}>
        <div className="left-signin-part">
          <img
            src={sign_in_svg}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="right-signin-part">
          <div className="signin-heading">Sign In</div>
          <div className="signin-subheading">Welcome Back!</div>
          <form noValidate autoComplete="off" className="signin-form">
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
            <a href="#" class="forgot-password-text">
              Forgot Password?
            </a>
            <br />
            <input
              type="submit"
              value="Sign In"
              className="signin-submit-btn"
            />
            <div className="continue-with-wrapper">
              <div className="line"></div>
              <div className="continue-with-text-wrapper">
                <div className="continue-with-text">or continue with</div>
              </div>
            </div>
            <div className="signin-logos">
              <div
                className="signin-options-container"
                style={{ backgroundColor: "white" }}
              >
                <img src={google} alt="" />
              </div>
              <div
                className="signin-options-container"
                style={{ backgroundColor: "#373C56" }}
              >
                <img src={apple} alt="" />
              </div>
              <div
                className="signin-options-container"
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

export default SignIn;
