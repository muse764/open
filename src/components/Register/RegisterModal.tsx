import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { FormikProps } from "formik";

const RegisterModal = ({
  open,
  handleClose,
  formik,
}: {
  open: boolean;
  handleClose: any;
  formik: any;
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  } as const;

  return (
    <Modal open={open} onClose={handleClose}>
      <Container component="main" maxWidth="sm">
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={!!(formik.touched.full_name && formik.errors.full_name)}
              helperText={formik.touched.full_name && formik.errors.full_name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.full_name}
              margin="normal"
              required
              fullWidth
              id="full_name"
              label="Full Name"
              name="full_name"
              autoComplete="full_name"
              autoFocus
            />
            <TextField
              error={!!(formik.touched.username && formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.username}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              error={!!(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              error={!!(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            {formik.errors.submit && (
              <Typography color="error" component="span">
                {formik.errors.submit}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default RegisterModal;
