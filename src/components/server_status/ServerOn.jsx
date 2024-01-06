import { useEffect, useState } from "react";
import Game from "../pages/Game";
import Home from "../pages/Home";

export default function ServerOn() {
    const [page, setPage] = useState();

    useEffect(() => {
        if(localStorage.getItem("token") != null)
            setPage("GAME");
        else
            setPage("HOME");
        
    }, []);

    return (
        <>
            {
                page === "GAME" ? <Game /> : <Home />
            }
        </>
    );
}

