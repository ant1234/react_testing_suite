import { useState } from "react";
import Output from "./Output";

const Greeting = () => {

    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = event => {
        setChangeText(true);
    };

    return (
        <div>
            <h2>Hello world</h2>
            {!changeText && <Output>It's good to see you.</Output>}
            {changeText && <Output>No, it's great to see you!</Output>}
            <button onClick={changeTextHandler}>Change text</button>
        </div>
    );
};

export default Greeting;