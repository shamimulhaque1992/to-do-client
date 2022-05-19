import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfermPassword, setShowConfermPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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
      setErrors({...errors, password:""});
    } else {
      setErrors({...errors, password:"❌ Invalid Password"});
      setPassword("");
    }
  };

  const handleConfirmPasswordBlur = (event) => {
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        event.target.value
      );
    if (passRegex) {
      setConfirmPassword(event.target.value);
      setErrors({...errors, confirmPassword:""});
    } else {
      setErrors({...errors, confirmPassword:"❌ Invalid Password"});
      setConfirmPassword("");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two passwords did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container mt-5 mb-5">
      <Form onSubmit={handleCreateUser}>
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
              name="password"
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
        <Form.Group className="mb-3" controlId="formBasicConfermPassword">
          <Form.Label>Conferm Password</Form.Label>
          <div className="position-relative">
            <Form.Control
              onBlur={handleConfirmPasswordBlur}
              type={showConfermPassword ? "text" : "password"}
              placeholder="Conferm Password"
              name="confermPassword"
              required
            />
            <p
              onClick={() => setShowConfermPassword(!showConfermPassword)}
              className="position-absolute top-50 end-0 translate-middle-y"
              style={{ cursor: "pointer" }}
            >
              🗝
            </p>
          </div>
          {errors?.confirmPassword && <p>{errors.confirmPassword}</p>}
        </Form.Group>
        <p style={{ color: "red" }}>{error}</p>
        <Button className="mb-3 d-flex justify-content-center align-items-center" variant="primary" type="submit"><i class="fa-solid fa-address-card"></i>
          <span className="mx-1">Register</span>
        </Button>
        <p>
          Already Have an account?{" "}
          <Link className="form-link" to="/login">
            Login Here...
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
