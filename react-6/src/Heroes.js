import { useState } from "react";

function Heroes(){
    const[names, setNames] = useState(
        [
        "Шерлок Холмс", 
        "Доктор Ватсон", 
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
        ]
    );
    const newNames = names.map((item, index) =>
        <li key={index}>
            {item}
        </li>
        );
    return(
        <div>
            {newNames}
        </div>
    )
};
export default Heroes;