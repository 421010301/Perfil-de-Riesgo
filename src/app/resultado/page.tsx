"use client"
import { useTestContext } from '@/utils/test-context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Resultado() {
    const { perfilDeRiesgo, respuestas, resetTest } = useTestContext()
    const router = useRouter()

    const handleClick = () => {
        resetTest()
        router.push("/test")
    }

    if (!perfilDeRiesgo || !respuestas) {
        router.replace("/")
        return <></>
    }

    return (
        <div className="mt-5 container">
            <h1>Resultados</h1>
            <div className="mt-4">
                {perfilDeRiesgo === 'Adverso al riesgo' && (
                    <div className="alert alert-danger mt-3" role="alert">
                        <h4 className="alert-heading">Inversionista Adverso al Riesgo</h4>
                        <p>
                            Prefiere una menor exposición al riesgo, lo que podría significar una menor rentabilidad,
                            pero con una mayor probabilidad de preservar el capital.
                        </p>
                        <hr />
                        <p className="mb-0">Busca opciones de inversión más seguras y menos volátiles.</p>
                    </div>
                )}

                {perfilDeRiesgo === 'Moderado' && (
                    <div className="alert alert-warning mt-3" role="alert">
                        <h4 className="alert-heading">Inversionista Moderado</h4>
                        <p>
                            Está dispuesto a invertir parte de su capital en títulos con cierta exposición al riesgo,
                            esperando una mayor rentabilidad en el largo plazo.
                        </p>
                        <hr />
                        <p className="mb-0">Mantiene un equilibrio entre riesgo y seguridad.</p>
                    </div>
                )}

                {perfilDeRiesgo === 'Propenso al riesgo' && (
                    <div className="alert alert-primary mt-3" role="alert">
                        <h4 className="alert-heading">Inversionista Propenso al Riesgo</h4>
                        <p>
                            Asume una fuerte exposición al riesgo, apostando por obtener una elevada rentabilidad a
                            cambio de la posibilidad de sufrir mayores pérdidas.
                        </p>
                        <hr />
                        <p className="mb-0">Se enfoca en inversiones con alto potencial de retorno, aunque sean más volátiles.</p>
                    </div>
                )}

                {perfilDeRiesgo === 'Sofisticado' && (
                    <div className="alert alert-success mt-3" role="alert">
                        <h4 className="alert-heading">Inversionista Sofisticado</h4>
                        <p>
                            Busca una elevada rentabilidad tomando posiciones de mayor riesgo. Es conocedor del mercado
                            y de los riesgos inherentes al mismo, y se hace responsable de sus propias inversiones.
                        </p>
                        <hr />
                        <p className="mb-0">Es un inversionista informado y con experiencia en mercados financieros.</p>
                    </div>
                )}
            </div>

            <div className='d-flex justify-content-between align-items-center mb-3'>
                <h3 className="m-0">Resumen de tus respuestas:</h3>
                <div>
                    <button onClick={handleClick} className="btn btn-primary">
                        Volver a realizar el test
                    </button>
                </div>
            </div>
            <div className="row">
                {respuestas.map((respuesta, index) => (
                    <div key={index} className="col-md-6 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{respuesta.pregunta}</h5>
                                <p className="card-text">
                                    <strong>Respuesta:</strong> {respuesta.respuesta} <br />
                                    {/* <strong>Puntaje:</strong> {respuesta.puntaje} */}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}