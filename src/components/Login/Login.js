// All imports
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Loading from "../Loading/Loading";

// Login functionality
const Login = () => {
  // All states
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Sign in with email and password functionality
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    const emailRegex = /\S+@\S+\.\S+/.test(event.target.value);
    if (emailRegex) {
      setEmail(event.target.value);
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "❌ Invalid Email" });
      setEmail("");
    }
  };

  const handlePasswordBlur = (event) => {
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        event.target.value
      );
    if (passRegex) {
      setPassword(event.target.value);
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "❌ Invalid Password" });
      setPassword("");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  });

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };



  // Password reset functionality
  const [sendPasswordResetEmail, sending, reseterror] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const SendPasswordReset = (event) => {
    event.preventDefault();
    if (reseterror) {
      return (
        <div>
          <p>Error: {reseterror.message}</p>
        </div>
      );
    }
    if (sending) {
      return <p>Sending...</p>;
    }
    if (email) {
      sendPasswordResetEmail(email);
      toast("Check your email");
    } else {
      toast("Please enter email address");
    }
  };

  return (
    <div className="">
      <h1 className="text-center pt-4 mt-4 text-primary">
        Welcome to To do! Please Login...
      </h1>
      <div className="form-container mx-auto mt-5 mb-5">
        <Form className="form-body mx-auto" onSubmit={handleUserSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {errors?.email && <p>{errors.email}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="position-relative">
              <Form.Control
                onBlur={handlePasswordBlur}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="position-absolute top-50 end-0 translate-middle-y"
                style={{ cursor: "pointer" }}
              >
                🗝
              </p>
            </div>
            {errors?.password && <p>{errors.password}</p>}
          </Form.Group>

          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}

          <Button
            className="mb-3 d-flex justify-content-center align-items-center"
            variant="primary"
            type="submit"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            <span className="mx-1">Login</span>
          </Button>
          <div className="google-siginn d-flex">
            <hr className="w-50" />
            <p className="w-25 text-center border rounded-3">Or</p>
            <hr className="w-50" />
          </div>
          <br />

          <br />
          <Button
            onClick={SendPasswordReset}
            className="form-link ps-0"
            variant="link"
          >
            Forgot Password?
          </Button>
          <p>
            New Here?{" "}
            <Link className="form-link" to="/register">
              Create an account!
            </Link>
          </p>
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
};

export default Login;
