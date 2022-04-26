import { useState } from "react";
import "./LoginForm.css";

/**
 *
 * test@test.com
 * Profesor
 */

export function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleClick() {
    if (email === "test@test.com") {
      if (password === "profesor") {
        setError("");

        window.localStorage.setItem("isLogged", true);

        window.localStorage.setItem("email", email);

        onSuccess();

        return;
      }
    }

    window.localStorage.setItem("isLogged", false);
    setError("Datos Incorrectos");
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onChangeProfession(event) {
    window.localStorage.setItem("profesion", event.target.value);
  }

  return (
    <>
      <h2 className="LoginFormTitle">Stax Food Admin Login</h2>
      <div className="LoginForm">
        <h2 className="LoginFormDescription">
          Please fill in your unique admin login details below
        </h2>
        <div className="LoginFormContainer1">
          <label htmlFor="email" className="LoginFormInputLabel">
            Email address
          </label>
          <input
            name="email"
            id="email"
            type="email"
            className="LoginFormInput"
            value={email}
            onChange={onEmailChange}
          />
          <label htmlFor="password" className="LoginFormInputLabel">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="LoginFormInput LoginFormInputPassword"
            value={password}
            onChange={onPasswordChange}
          />
          <div onChange={onChangeProfession}>
            <input type="radio" value="Profesor" name="profesion" /> Profesor
            <input type="radio" value="Alumno" name="profesion" /> Alumno
          </div>
          <a
            href="https://www.google.com/"
            className="LoginFormInputLabel forgotPass"
          >
            forgot password?
          </a>
          <button className="LoginFormButton" onClick={handleClick}>
            Sign In
          </button>
          {error.length > 0 ? (
            <div className="LoginFormError">{error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
}
