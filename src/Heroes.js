import {useState} from "react";

export default function Heroes() {
    const[names, setNames] = useState([
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ]);
    const handleDelete = (i) => {
        setNames(
            names.filter(function (item,index) {
                if (i === index) {
                    return false;
                }
                return true;
            })
        )
    }

    return(
        <ul>
            {names.map((item, index) => {
               return(
                   <li key={index} onClick={() => handleDelete(index) }>
                    {item}
                   </li>)
            } )}
        </ul>
    )
}