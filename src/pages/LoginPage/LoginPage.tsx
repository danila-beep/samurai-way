import React from "react";
import s from "./loginPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Redirect } from "react-router-dom";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "redux-form";
import { spawn } from "child_process";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch";
import { loginTC } from "../../store/reducers/authReducer";

type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginPage = () => {
  const isAuthorized = useSelector<RootState, boolean>(
    (state) => state.auth.isAuthorized
  );
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  if (isAuthorized) {
    return <Redirect to={"/"} />;
  }

  return createPortal(
    <div className={s.loginPageWrapper}>
      <form
        onSubmit={handleSubmit((data) => {
          dispatch(loginTC(data));
        })}
      >
        <h1>Login</h1>
        <label>E-Mail</label>
        <input {...register("email", { required: true })} />
        {errors.email && <span>{errors.email.message}</span>}

        <label>Password</label>
        <input
          {...register("password", { required: true, minLength: 4 })}
          type="password"
        />
        {errors.password && <span>{errors.password.message}</span>}

        <div className={s.rememberMeCheckBox}>
          <label>Remember Me</label>
          <input type="checkbox" {...register("rememberMe")} />
        </div>

        <input type="submit" className={s.submitButton} />
      </form>
    </div>,
    document.body
  );
};

export default LoginPage;
