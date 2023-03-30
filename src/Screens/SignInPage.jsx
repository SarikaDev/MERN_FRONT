import { useCallback, useState } from "react";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FormField from "../component/Form/FormField";
import FormBase from "../component/common/FormBase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../utils/constants";
import Link from "../component/common/Link";
import StyledButton from "../component/common/StyledButton";
const SignIn = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleChange = useCallback(e => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      axios
        .post("/signin", {
          email,
          password,
        })
        .then(data => {
          console.log("data", data.status);
          sessionStorage.setItem(
            "accessToken",
            JSON.stringify(data.data.token),
          );
          sessionStorage.setItem("userDetails", JSON.stringify(data.data.user));

          if (data.status === 200) {
            navigate(PATHS.home);
          }
        })
        .catch(error => console.log(error));
    },
    [email, password, navigate],
  );

  return (
    <FormBase title='Sign In'>
      <FormField
        placeholder='Email'
        name='email'
        type='email'
        onChange={handleChange}
      >
        <EmailIcon />
      </FormField>
      <FormField
        placeholder='Password'
        name='password'
        type='password'
        onChange={handleChange}
      >
        <LockOpenIcon />
      </FormField>
      <StyledButton type='submit' onClick={handleSubmit}>
        Submit
      </StyledButton>
      <Typography variant='body1' component={"p"}>
        Doesn't Have An Account
        <Link
          sx={{
            pl: 2,
            cursor: "pointer",
            "&:hover": {
              textDecoration: "none",
            },
          }}
          to={PATHS.signup}
        >
          Register Account
        </Link>
      </Typography>
    </FormBase>
  );
};

export default SignIn;
