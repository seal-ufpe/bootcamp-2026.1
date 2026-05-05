
import { useState, useEffect } from "react";

export default function GioPage() {
    const [background, setBackground] = useState('#ffcbdb');

    useEffect(() => {
        console.log('Página de Gio Carregada <3');
    }, []);

    function changeColor() {
        const colorTwo = "#FFDAB9";
        setBackground(colorTwo);
    }

    
    return (
        <div style={{padding: "20px", display: "flex", flexDirection: "column",  alignItems: "center", justifyContent: "center"}}>
            <ProfileCard
                name="Giovanna Silva"
                text="oii, prazer! atualmente tenho 22 anos e sou estudante de engenharia da computação!"
                color={background}
            />
            <ColorButton onClick={changeColor}/>
     </div>
    );
}

// --------componete profilecard---------------
function ProfileCard({ name, text, color}) {
    return (
        <div style={{backgroundColor: color, padding: "20px", borderRadius: "10px", marginBottom: "10px", width: "350px"}}>
            <h1>{name}</h1>
            <p>{text}</p>
        </div>
    );    
}    

// --------componete backgroundcolor---------------
function ColorButton({onClick}) {
    return (
        <button style={{borderRadius: "10px", padding: "8px", backgroundColor: "#d195ce", border: "none"}} onClick={onClick}>
            Trocar cor
        </button>
    );
}
