import React, {useState} from 'react';

export const ComponentOne = () => {

//    let name = "Bruno";
    let web = "brunomodesti.es";

    const [Name, setNombre] = useState("bruce")

    //variaFible array
    let Data = [
        "First Name",
        "Surname",
        "Cellphone",
        "instagram",
        "Pasword"
    ];
    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

  return (
    <div>
        <h1>ESTE ES EL PRIMER COMPONENTE</h1>
        <p> TEXTO DE MI COMPONENTE</p>
        <p>mi nombre es: {Name}</p>
        <p>mi web es: {web}</p>

        <button onClick={ e => cambiarNombre("LA PUTA MADRE")}>
            CAMBIAR NOMBRE
        </button>
        <h2>Personal Data</h2>
        <ul>
            {
                Data.map(( Data, indice)=> {
                    return (<li key={indice}>
                        {Data}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}
