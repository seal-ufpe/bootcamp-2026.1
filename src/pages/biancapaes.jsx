import {useEffect, useState} from "react";
import "../styles/biancapaes.css";

export default function ProfileCard() {
  return (
    <div className={'profile-card'}>

      <h1 className={'card-title'}>BIANCA PAES</h1>
        <span>&lt;bpas&gt;</span>
        <ul className={'card-list'}>
            <li>Ciência da Computação</li>
            <li>Eixo de Design e Arquitetura</li>
        </ul>
      <Button text={"👍 Curtir"}/>
    </div>
  )
}

export function Button({ text }) {
    const [numberLikes, setNumberLikes] = useState(() => {
        const likes = localStorage.getItem("numberOfLikes");
        return likes ? Number(likes) : 0;
    });
    const handleLikeClick = () => {
        setNumberLikes(prev => prev + 1);
    }

    useEffect(() => {
        localStorage.setItem("numberOfLikes", numberLikes);
    }, [numberLikes]);

  return (
    <div className={'card-button'}>
        <span>{numberLikes}</span>
        <button
            onClick={handleLikeClick}
            className={'like-button'}
        >{text}</button>
    </div>
  )
}