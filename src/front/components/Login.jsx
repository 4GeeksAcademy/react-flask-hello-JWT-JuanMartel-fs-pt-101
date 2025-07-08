import { useState } from "react";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
    const response = await fetch("https://congenial-enigma-4jwpr5rj495whq666-3001.app.github.dev/api/login", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Login Failed");
    }

    const data = await response.json(); 
    const token = data.access_token;

    if (token) {
      sessionStorage.setItem("token", token);
      console.log("Login exitoso, token guardado:", token);

      // Redireccionar a ruta privada :
      // window.location.href = "/private";
    }

  } catch (error) {
    console.error("Error en login:", error.message);
  }
};


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        /><br/>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}