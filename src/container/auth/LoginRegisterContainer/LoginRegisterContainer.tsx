import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaSpinner } from "react-icons/fa";
import { BaseInput } from "../../../component/BaseInput/BaseInput";
import BaseApiService from "../../../common/service/baseApiService";
import { Link, useMatch } from "react-router-dom";
import { useEffect } from "react";
import { useStoreDispatch } from "../../../common/hook/useStoreDispatch";
import { actionAuthAuthenthicateUser } from "../../../store/authSlice";

const service = new BaseApiService("https://reqres.in/");

type TState = {
  isLogin: boolean;
  isLoading: boolean;
  isPasswordVisible: boolean;
  error: string;
};

export const LoginRegisterContainer = () => {
  const isLogin = useMatch("/auth/login");
  const dispatch = useStoreDispatch();
  const [state, setState] = useState<TState>({
    isLogin: true,
    isLoading: false,
    isPasswordVisible: false,
    error: "",
  });

  useEffect(() => {
    setState({ ...state, isLogin: isLogin ? true : false });
    formik.setFieldValue('email',"")
    formik.setFieldValue('password',"")
  }, [isLogin]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(3).required(),
    }),
    onSubmit: (ev) => {
      setState({ ...state, isLoading: true });
      service.basePOST(state.isLogin ? "api/login" : "api/register", {}, ev).then((ctx) => {
        if (ctx.isFailed) {
          setState({ ...state, isLoading: false, error: ctx.message });
        } else {
          setState({ ...state, isLoading: false });
          dispatch(actionAuthAuthenthicateUser({ auth_token: ctx.data.token, email: ev.email }));
        }
      });
    },
  });
  return (
    <div className="container vh-100 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-lg-4 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center mb-3">{state.isLogin ? "Login" : "Register"}</h5>
              <div>
                {state.error && (
                  <div className="alert alert-danger d-flex align-items-center" role="alert">
                    {JSON.parse(state.error)?.error}
                    <button
                      type="button"
                      className="btn-close ms-auto"
                      onClick={() => setState({ ...state, ...{ error: "" } })}
                    />
                  </div>
                )}
              </div>
              <form onSubmit={formik.handleSubmit}>
                <BaseInput
                  title="E - Mail"
                  prefix={<FaEnvelope className="text-secondary" />}
                  inputProps={{
                    onChange: formik.handleChange("email"),
                    value: formik.values.email,
                    disabled: state.isLoading,
                  }}
                  errorText={formik.touched.email && formik.errors.email}
                />
                <BaseInput
                  title="Password"
                  prefix={<FaLock className="text-secondary" />}
                  suffix={
                    state.isPasswordVisible ? (
                      <FaEyeSlash
                        onClick={() => setState({ ...state, ...{ isPasswordVisible: !state.isPasswordVisible } })}
                      />
                    ) : (
                      <FaEye
                        onClick={() => setState({ ...state, ...{ isPasswordVisible: !state.isPasswordVisible } })}
                      />
                    )
                  }
                  inputProps={{
                    onChange: formik.handleChange("password"),
                    value: formik.values.password,
                    type: state.isPasswordVisible ? "text" : "password",
                    disabled: state.isLoading,
                  }}
                  errorText={formik.touched.password && formik.errors.password}
                />
                <button className="btn btn-primary d-block w-100 mb-5" type="submit" disabled={state.isLoading}>
                  Submit {state.isLoading && <FaSpinner className="fa-spin animation__spinner" />}
                </button>
                <Link className="d-block text-center" to={state.isLogin ? `/auth/register` : "/auth/login"}>
                  {state.isLogin ? `Register` : "Login"}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
