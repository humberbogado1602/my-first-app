import "./LoginForm.css";
import "./LoginFormSuccess.css";

export function LoginFormSuccess() {
  const profesion = window.localStorage.getItem("profesion");
  const email = window.localStorage.getItem("email");

  function handleClick() {
    window.localStorage.setItem("isLogged", false);
    window.localStorage.setItem("profesion", false);
    document.location.reload();
  }

  return (
    <div className="LoginFormSuccess">
      <img
        className="SuccessImg"
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-760x428,f_auto,q_auto:best/MSNBC/Components/Video/201609/a_ov_Pepe_160928.jpg"
        alt="Bienvenido pic"
      ></img>
      <h3 className="LoginFormSuccessTitle">
        Bienvenido {profesion} {email}
      </h3>
      <button
        className="LoginFormButton CloseSesionButton"
        onClick={handleClick}
      >
        Cerrar sesion
      </button>
    </div>
  );
}
