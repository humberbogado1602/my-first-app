import { useState } from "react";

import { LoginHero } from "./LoginHero";
import { LoginForm } from "./LoginForm";
import { LoginFormSuccess } from "./LoginFormSuccess";

import "./Login.css";

export default function Login() {
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("isLogged")
  );

  function onSuccess() {
    setIsLogged("true");
  }

  return (
    <main>
      <section className="LoginHeroContainer">
        <LoginHero />
      </section>
      <section className="LoginFormContainer" style={{ height: "100vh" }}>
        {isLogged === "true" ? (
          <LoginFormSuccess />
        ) : (
          <LoginForm onSuccess={onSuccess} />
        )}{" "}
      </section>
    </main>
  );
}
