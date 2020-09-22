import React from 'react';
import '../css/Horizontal.css'
import visa from '../images/Old_Visa_Logo.svg'
import {useFormik} from "formik";

const SignupForm = () =>
{
    const formik = useFormik({
        initialValues:
            {
                card: '',
            },
        onSummit: values =>
        {
            alert(JSON.stringify(values, null, 2))
        },
    });
    return(
        <div id="flexHor">
            <div id="izquierda">
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl magna lacus hac
                    inceptos efficitur pharetra dolor inceptos accumsan.</p>

                <div id="divEntrada">
                    <form onSubmit={formik.handleSubmit}>
                        <img src={visa} id="imagenVisa" alt="Imagen Visa"/>
                        <input
                            id="entrada"
                            name="card"
                            type="text"
                            placeholder="XX-XXX-XXX-XXX-XXXX"
                            onChange={formik.handleChange}
                            value={formik.values.card}
                        />
                    </form>
                </div>

                <p id="listaConLinea">x3 primeros meses $50</p>
                <p id="listaConLinea">x mes $20</p>
                <p id="listaConLinea">pack diseño 1 $100</p>
            </div>

            <div id="derecha">
                <p id="letraPequeña">Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl magna lacus hac
                    inceptos efficitur pharetra dolor inceptos accumsan. Nulla tristique scelerisque curabitur
                    bibendum consectetur et facilisis eleifend mollis. Leo commodo pulvinar ad litora molestie cras
                    orci mattis ultrices. Orci felis praesent proin inceptos torquent hac. Eros eu congue dui nisl
                    aenean efficitur curae tempus at. Laoreet tortor dictumst vitae senectus dolor mollis.
                    Consectetur suscipit quam mi; ridiculus vehicula tempus sollicitudin nam gravida. Montes
                    ultrices condimentum; porttitor eu leo quam.</p>
                <p id="total">Total</p><hr id="lineaHor"/><p id="total">$120</p>
                <button type="submit" id="boton">Finalizar</button>
            </div>
        </div>
    )
}

export default SignupForm;