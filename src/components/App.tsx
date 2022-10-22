import React, {useEffect, useState} from "react";

import getWords from "../api/randomWordApi";

import "../stylesheets/App.css";

export default function App(): JSX.Element {
    const [wordComps, setWordComps] = useState([]);

    useEffect(() => {
        getWords().then((words) => {
            let comps: JSX.Element[] = [];

            for (let i: number = 0; i < words.length; i++) {
                comps.push(
                    <h3 key={i} className={'key'}>{words[i]}</h3>
                );
            }

            // @ts-ignore
            setWordComps(comps);
        });

        setInterval(() => {
            const comps = document.querySelectorAll(".key");
            const value = (document.getElementById("search-bar") as HTMLInputElement).value.toLowerCase();

            for(let i: number = 0; i < comps.length; i++) {
                if(!comps[i].innerHTML.includes(value)) {
                    comps[i].setAttribute("hidden", "");
                } else {
                    comps[i].removeAttribute("hidden");
                }
            }
        }, 500);
    }, []);

    return (
        <>
            <div id={"container"}>
                <input id={"search-bar"} autoComplete={"off"} placeholder={"Enter search query..."}/>
                {wordComps}
            </div>
        </>
    );
};