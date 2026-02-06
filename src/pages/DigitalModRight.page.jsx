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
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
            }}>
                {mod === "Productive" ?

                    <body
                        style={{
                            backgroundColor: "green",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100vw",
                            height: "100vh",
                            color: "white",
                        }}
                    />

                    : mod === "Tired" ?

                        <body
                            style={{
                                backgroundColor: "grey",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100vw",
                                height: "100vh",
                                color: "white",
                            }}
                        />

                        :

                        <body
                            style={{
                                backgroundColor: "cyan",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100vw",
                                height: "100vh",
                                color: "white",
                            }}
                        />
                }


                <h1>{mod}</h1>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <MyButton
                        label="Productive"
                        onClick={Productive} />
                    <MyButton
                        label="Tired"
                        onClick={Tired} />
                    <MyButton
                        label="Inspired"
                        onClick={Inspired} />

                </div>
            </div>
        </>
    )
}


export default DigitalModRightComponent;






