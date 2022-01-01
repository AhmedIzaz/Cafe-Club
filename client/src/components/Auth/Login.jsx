import React from "react";
import "./authStyles.css";
import useMethods from "../../StateProvider/useMethods";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const scheme = Yup.object({
  email: Yup.string().email().min(4).max(100).required(),
  password: Yup.string().min(8).max(100).required(),
});
function Login() {
  const { login } = useMethods();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(scheme) });
  const onSubmit = () => {
    login();
  };
  return <div></div>;
}

export default Login;
