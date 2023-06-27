import { Box, Toolbar } from "@mui/material";
import SideBar from "./SideBar";
import Footer from "./Footer";
import CssBaseline from "@mui/material/CssBaseline";
import CustomAppBar from "./AppBar";
import LoginModal from "../Login/LoginModal";
import { useCallback, useEffect, useState } from "react";
import RegisterModal from "../Register/RegisterModal";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useLoginMutation,
  useRefreshMutation,
  useRegisterMutation,
} from "../../redux/services/authApi";
import { useGetMyProfileQuery } from "../../redux/services/meApi";
import { useAddUserPlaylistMutation } from "../../redux/services/userApi";

const drawerWidth = 240;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const [refresh] = useRefreshMutation();
  const { data } = useGetMyProfileQuery(Cookies.get("accessToken"));
  const [auth, setAuth] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleLoginModalOpen = () => setLoginModalOpen(true);
  const handleLoginModalClose = () => setLoginModalOpen(false);

  const handleRegisterModalOpen = () => setRegisterModalOpen(true);
  const handleRegisterModalClose = () => setRegisterModalOpen(false);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setAuth(false);
  };

  const refreshToken = useCallback(
    async () => await refresh(Cookies.get("refreshToken")),
    [refresh]
  );

  useEffect(() => {
    Cookies.get("accessToken") ? setAuth(true) : setAuth(false);

    Cookies.get("refreshToken") ? refreshToken() : null;
  }, [refreshToken]);

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await login({
          email: values.email,
          password: values.password,
        }).unwrap();
        setAuth(true);
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        setLoginModalOpen(false);
      } catch (err: any) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      full_name: Yup.string().max(255).required("Full name is required"),
      username: Yup.string().max(255).required("Username is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await register({
          full_name: values.full_name,
          username: values.username,
          email: values.email,
          password: values.password,
        });
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
        setRegisterModalOpen(false);
        setLoginModalOpen(true);
      } catch (err: any) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar
        drawerWidth={drawerWidth}
        handleLogout={handleLogout}
        auth={auth}
      />
      <SideBar
        drawerWidth={drawerWidth}
        handleLoginModalOpen={handleLoginModalOpen}
        handleRegisterModalOpen={handleRegisterModalOpen}
        auth={auth}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", pb: 20 }}
      >
        <Toolbar />
        {children}
      </Box>
      <Footer drawerWidth={drawerWidth} />

      <LoginModal
        open={loginModalOpen}
        handleClose={handleLoginModalClose}
        formik={loginFormik}
      />
      <RegisterModal
        open={registerModalOpen}
        handleClose={handleRegisterModalClose}
        formik={registerFormik}
      />
    </Box>
  );
};

export default Layout;
