import { useState } from "react";
import MyButton from "../components/myButton";

function DigitalModRightComponent() {
    const [mod, setMod] = useState("Feliz");
    let valor = "Feliz";

    function Productive() {
        valor = "Productive";
        setMod(valor)
    }

    function Tired() {
        valor = "Tired";
        setMod(valor)
    }


    function Inspired() {
        valor = "Inspired";
        setMod(valor)
    }


    return (
        <>
            {mod === "Productive" ?

                <body
                    style={{
                        backgroundColor: "green",
                        width: "100%",
                        height: "100%",
                        color: "white",
                    }}
                />

                : mod === "Tired" ?

                    <body
                        style={{
                            backgroundColor: "grey",
                            width: "100%",
                            height: "100%",
                            color: "white",
                        }}
                    />

                    :

                    <body
                        style={{
                            backgroundColor: "cyan",
                            width: "100%",
                            height: "100%",
                            color: "white",
                        }}
                    />
            }


            <h1>{mod}</h1>
            <MyButton
                label="Productive"
                onClick={Productive} />
            <MyButton
                label="Tired"
                onClick={Tired} />
            <MyButton
                label="Inspired"
                onClick={Inspired} />
        </>
    )
}


export default DigitalModRightComponent;






