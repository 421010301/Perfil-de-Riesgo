"use client"
import React from 'react';
import TextoInversionistaSofisticado from '@/components/texto-inversionista-sofisticado';
import Seccion from '@/components/seccion';
import { useTestContext } from '@/utils/test-context';

export interface Opcion {
    opcion: string;
    descripcion: string;
    puntaje: number;
}

export interface Pregunta {
    pregunta: string;
    opciones: Opcion[];
}

export default function Test() {
    const { calcularProgreso, continuarSegundaParte, mostrarTextoIntermedio, preguntaActual, parteActual, preguntasPrimeraParte, preguntasSegundaParte } = useTestContext()

    const renderContenido = () => {
        if (mostrarTextoIntermedio) {
            return (
                <div className="mt-5">
                    <h4>Por favor, lee el siguiente texto antes de continuar con la segunda parte del test.</h4>
                    <TextoInversionistaSofisticado />
                    <div className='d-flex justify-content-center mb-5'>
                        <button className="btn btn-primary mt-3 fw-bold fs-4" onClick={continuarSegundaParte}>
                            Continuar con el test
                        </button>
                    </div>
                </div>
            );
        } else {
            const preguntasActuales = parteActual === 1 ? preguntasPrimeraParte : preguntasSegundaParte;
            const isUltimaPregunta = preguntaActual === preguntasActuales.length - 1;

            return (
                <>
                    <div className="progress mt-3">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${calcularProgreso()}%` }}
                            aria-valuenow={calcularProgreso()}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        >
                        </div>
                    </div>

                    <Seccion
                        pregunta={preguntasActuales[preguntaActual]}
                        isUltimaPregunta={isUltimaPregunta}
                    />
                </>
            );
        }
    };

    return (
        <div className="container m-auto">
            <h2 className="my-4">Test de Evaluación de Perfil de Riesgo</h2>
            {renderContenido()}
        </div>
    );
}
