import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, TextField, Tooltip, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./authStyles.css";
import { useStateValue } from "../../StateProvider/StateContext";
const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
});

function Login() {
  const [state] = useStateValue();
  const navigate = useNavigate();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  const onFormSubmit = (data) => console.log(data);

  // =====================================
  // =====================================
  useEffect(() => {
    if (state.token && state.user) return navigate("/");
  }, []);
  // =====================================
  // =====================================

  return (
    <>
      <Navigation />
      <br />
      <br />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
          <Typography gutterBottom variant="h3">
            Login
          </Typography>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                label="email"
                placeholder="email"
                type="email"
                size="small"
                variant="outlined"
              />
            )}
          />

          <Typography gutterBottom variant="body2" color="secondary">
            {errors.email?.message}
          </Typography>

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                label="password"
                placeholder="password"
                type="password"
                size="small"
                variant="outlined"
              />
            )}
          />

          <Typography gutterBottom variant="body2" color="secondary">
            {errors.password?.message}
          </Typography>
          <div className="form-footer">
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
            <Tooltip title="Click for signup">
              <Typography
                variant="body2"
                color="textSecondary"
                component={Link}
                to="/signup"
              >
                Don't have an account?
              </Typography>
            </Tooltip>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
