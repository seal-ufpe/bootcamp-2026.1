import { useState, useEffect } from "react";

function Card({ nome, bio }) {
    return (
        <div
            style={{
                marginBottom: "20px"
            }}
        >
            <h2 style={{ marginBottom: "10px" }}>{nome}</h2>
            <p style={{ color: "#555" }}>{bio}</p>
        </div>
    );
}

function BotaoCurtir({ nomebotao }) {
    const [curtida, setcurtida] = useState(0);

    return (
        <button
            onClick={() => setcurtida(curtida + 1)}
            style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px"
            }}
        >
            {nomebotao} ({curtida})
        </button>
    );
}

function MostrarNaTela({ mensagem }) {
    const [mostrarMensagem, setMostrarMensagem] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setMostrarMensagem(false);
        }, 5000);
    }, []);

    return (
        mostrarMensagem && (
            <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
                {mensagem}
            </p>
        )
    );
}

export default function App() {
    return (
        <div
            style={{
                minHeight: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f4f4f4"
            }}
        >
            <div
                style={{
                    width: "450px",
                    padding: "30px",
                    borderRadius: "16px",
                    backgroundColor: "white",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    textAlign: "center"
                }}
            >
                <MostrarNaTela mensagem="Bem-vindo ao meu Card" />

                <Card
                    nome="João Vitor"
                    bio="Estudante de Ciência da Computação, apaixonado por tecnologia, desenvolvimento de software e aprendizado contínuo."
                />

                <BotaoCurtir nomebotao="Curtir" />
            </div>
        </div>
    );
}