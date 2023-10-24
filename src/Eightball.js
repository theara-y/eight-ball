import ebMsgs from './eightball-msgs';
import { useState } from 'react';
import './Eightball.css';

const Eightball = ({messages = ebMsgs}) => {
    const [msg, setMsg] = useState("Think of a question");
    const [color, setColor] = useState("black");
    const changeMessage = () => {
        const randomMsg = ebMsgs[Math.floor(Math.random() * ebMsgs.length)]
        setMsg(randomMsg.msg);
        setColor(randomMsg.color);
    };

    return (
        <div className="Eightball" onClick={changeMessage} style={{backgroundColor: color}}>
            {msg}
        </div>
    );
};

export default Eightball;