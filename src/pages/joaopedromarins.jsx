import { useState, useEffect } from "react";

const Card = ({ user, color = "#f9f9f9" }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px 20px 20px 20px",
        maxWidth: "350px",
        margin: "20px auto",
        backgroundColor: color
      }}
    >
      <h1> {user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

const Button = ({ text, onClick, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 16px",
        backgroundColor: disabled ? "#ccc" : "#0099ff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "16px"
      }}
    >
      {text}
    </button>
  );
};

export default function JoaoPedroMarinsPage() {

   const cores = ["#f9f9f9", "#d0ebff", "#ffd6d6", "#d6ffd6", "#fff3bf"];
   const [indiceCor, setIndiceCor] = useState(0);


   const jpbmData = {
    name: "João Pedro Marins",
    email: "jpbm@cin.ufpe.br"
  };

   const mudarCor = () => {
    setIndiceCor((indiceCor + 1) % cores.length);
  };

  useEffect(() => {
    console.log("Cor alterada");
  },[indiceCor]); 
 
  return (
    <div style={{ padding: '20px' }}>
      <Card 
        user={jpbmData}
        color={cores[indiceCor]}
      />

      <Button 
        text="Mudar cor do Card" 
        onClick={mudarCor}
      />

    </div>
  );
}