import { useNavigate } from "react-router-dom";

export function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Borra el token
    navigate("/login"); // Redirige al login
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Cerrar sesión
    </button>
  );
}   