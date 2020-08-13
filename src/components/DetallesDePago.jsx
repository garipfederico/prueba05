import React from 'react';
import LogoPago from '../images/LogoPagoPlan.GIF'
import PlanCompleto from '../images/Planes-Completo.png'
import '../css/styleDDP.css'
import {Link} from 'react-router-dom'

const DetallesDePago = (props) => {
    return(
        <div className="Muestra">
            <div className="divStyle">
                <p className="whoWeAre">► QUIENES SOMOS</p>
                <div className="divDetail">
                    <Link to={props.link}>
                        <img className="imagenLogo" src={LogoPago} alt="logo"/>
                    </Link>
                    <p className="textDetail">Detalles</p>
                    <div className="divTitle">
                        <img className="imagenPlan" src={PlanCompleto} alt="Imagen Plan"/>
                        <p className="textTitle">Plan<br /> Completo</p>
                    </div>
                    <div className="divBody">
                        <div className="divPar">
                            <ul className="listaPrincipal">
                                <li className="listaConTilde">Lorem ipsum</li>
                                <li className="listaConTilde">Lorem ipsum</li>
                                <li className="listaConTilde">Lorem ipsum</li>
                                <li className="listaConTilde">Lorem ipsum</li>
                                <li className="listaConTilde">Lorem ipsum</li>
                                <li className="listaConTilde">Lorem ipsum</li>
                                {/*<li className="lista">Lorem ipsum<img src={tilde} alt="logo"/></li>*/}
                            </ul>
                        </div>
                        <div className="divPar">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eusimod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscripit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eusimod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscripit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at</p>
                        </div>
                        <div className="divHor">
                            <div className="bottom">
                                <div className="lineOnTheRight">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing, sed diam nonummy</p>
                                    <form>
                                        <label>
                                            VISA:
                                            <input type="text" name="VISA"/>
                                        </label>
                                    </form>
                                    <ul>
                                        <li>x tres primeros meses $</li>
                                        <li>x mese $</li>
                                        <li>parck diseño 1 $</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="letraChica">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eusimod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscripit lobortis nisl ut aliquip ex ea commodo consequat. Duis</p>
                                </div>
                                <div>
                                    <p style={{textAlign: "right"}}>TOTAL</p>
                                </div>
                                <div className="lineHorizontal">
                                    <p style={{textAlign: "right"}}>$1.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetallesDePago;