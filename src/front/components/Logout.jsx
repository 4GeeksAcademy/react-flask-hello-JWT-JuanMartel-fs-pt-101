import { useNavigate } from "react-router-dom";

export function LogoutButton({ className }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className={className}>
      Log out
    </button>
  );
}