import { useCallback, useState } from "react";
import { Button, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BadgeIcon from "@mui/icons-material/Badge";
import FormField from "../component/Form/FormField";
import FormBase from "../component/common/FormBase";
import axios from "axios";
import { PATHS } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import Link from "../component/common/Link";
const RegisterPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = values;
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
        .post("/signup", {
          firstName,
          lastName,
          email,
          password,
        })
        .then(data => {
          console.log("data", data.status);

          if (data.status === 200) {
            navigate(PATHS.signin);
          }
        })
        .catch(error => console.log(error));
    },
    [firstName, lastName, email, password, navigate],
  );

  return (
    <FormBase title='Register Account'>
      <FormField
        placeholder='First Name'
        name='firstName'
        type='text'
        onChange={handleChange}
      >
        <BadgeIcon />
      </FormField>

      <FormField
        placeholder='Last Name'
        name='lastName'
        type='text'
        onChange={handleChange}
      >
        <BadgeIcon />
      </FormField>
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
      <Button
        variant='contained'
        type='submit'
        onClick={handleSubmit}
        sx={{
          "&:hover": {
            background: theme.palette.primary.main,
          },
        }}
      >
        Submit
      </Button>
      <Typography variant='body1' component={"p"}>
        Already Have An Account
        <Link
          sx={{
            pl: 2,
            cursor: "pointer",
            "&:hover": {
              textDecoration: "none",
            },
          }}
          to={PATHS.signin}
        >
          SIGN IN
        </Link>
      </Typography>
    </FormBase>
  );
};

export default RegisterPage;
