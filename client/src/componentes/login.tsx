import React, { useEffect, useState } from "react";
import { CSSProperties } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.tsx";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Input = ({ label, type, value, onChange }) => {
  return (
    <div style={styles.inputGroup}>
      <label style={styles.label}>{label}</label>
      <input
        style={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

const Button = ({ text, onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setCookie("user", await user.user.getIdToken(), {
        path: "/",
        maxAge: 1728588542417,
      });
      navigate("/afiliates");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmitLogin}>
        <h2 style={styles.title}>Iniciar sesión</h2>
        <Input
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Ingresar" onClick={undefined} />
      </form>
    </div>
  );
};

// Estilos en línea con tipado CSSProperties
const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  form: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column", // Aquí está corregido el tipo
    width: "300px",
  },
  title: {
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  button: {
    marginTop: "1rem",
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Login;
