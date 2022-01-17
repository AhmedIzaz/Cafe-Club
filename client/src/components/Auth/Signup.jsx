import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, TextField, Tooltip, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./authStyles.css";
import { useStateValue } from "../../StateProvider/StateContext";
import useMethods from "../../StateProvider/useMethods";
const schema = Yup.object({
  name: Yup.string().min(3).max(20).required(),
  email: Yup.string().email().required(),
  number: Yup.string().min(5).max(15).required(),
  password: Yup.string().min(8).max(32).required(),
  confirm_password: Yup.string().oneOf([Yup.ref("password"), null]),
});

function Signup() {
  const [state] = useStateValue();
  const navigate = useNavigate();
  const { signup } = useMethods();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  // ================================
  // ================================

  useEffect(() => {
    if (state.token && state.user) return navigate("/");
  }, []);
  // ================================
  // ================================

  const onFormSubmit = (data) => signup(data);
  return (
    <>
      <Navigation />
      <br />
      <br />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
          <Typography gutterBottom variant="h3">
            Signup
          </Typography>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                label="username"
                placeholder="username"
                size="small"
                variant="outlined"
              />
            )}
          />

          <Typography gutterBottom variant="body2" color="secondary">
            {errors.name?.message}
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
            name="number"
            render={({ field }) => (
              <TextField
                {...field}
                label="number"
                placeholder="number"
                type="text"
                size="small"
                variant="outlined"
              />
            )}
          />

          <Typography gutterBottom variant="body2" color="secondary">
            {errors.number?.message}
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
          <Controller
            control={control}
            name="confirm_password"
            render={({ field }) => (
              <TextField
                {...field}
                label="confirm password"
                placeholder="confirm password"
                type="password"
                size="small"
                variant="outlined"
              />
            )}
          />

          <Typography gutterBottom variant="body2" color="secondary">
            {errors.confirm_password && "Both password should matched!"}
          </Typography>
          <div className="form-footer">
            <Button variant="contained" color="primary" type="submit">
              Signup
            </Button>
            <Tooltip title="Click for login">
              <Typography
                variant="body2"
                color="textSecondary"
                component={Link}
                to="/login"
              >
                Already have an account?
              </Typography>
            </Tooltip>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
