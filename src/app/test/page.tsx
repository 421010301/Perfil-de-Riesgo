"use client"
import React, { useState } from 'react';
import TextoInversionistaSofisticado from '@/components/texto-inversionista-sofisticado';
import Resultados from '@/components/resultado';
import Seccion from '@/components/seccion';

export interface Opcion {
    opcion: string;
    descripcion: string;
    puntaje: number;
}

export interface Pregunta {
    pregunta: string;
    opciones: Opcion[];
}

const preguntasPrimeraParte: Pregunta[] = [
    {
        pregunta: "¿Cuál es el objetivo fundamental de su inversión?",
        opciones: [
            { opcion: "A", descripcion: "Invertir en valores que son fácilmente convertibles en efectivo (Liquidez).", puntaje: 1 },
            { opcion: "B", descripcion: "Tratar de generar una renta periódica de la inversión en forma de intereses y/o dividendos (Ingreso).", puntaje: 2 },
            { opcion: "C", descripcion: "El objetivo de las inversiones es lograr un crecimiento a largo plazo del capital a través de la reinversión de los rendimientos en el principal (Crecimiento).", puntaje: 3 },
            { opcion: "D", descripcion: "Se busca realizar inversiones con el objetivo de obtener mayores rentabilidades a cambio de mayores niveles a la exposición al riesgo (Especulativo).", puntaje: 4 }
        ]
    },
    {
        pregunta: "¿En qué rango de edad se encuentra?",
        opciones: [
            { opcion: "A", descripcion: "Menor de 25 años.", puntaje: 4 },
            { opcion: "B", descripcion: "Entre 25 - 40 años.", puntaje: 3 },
            { opcion: "C", descripcion: "Entre 40 - 60 años.", puntaje: 2 },
            { opcion: "D", descripcion: "Más de 60 años.", puntaje: 1 }
        ]
    },
    {
        pregunta: "¿Ha tenido experiencia invirtiendo?",
        opciones: [
            { opcion: "A", descripcion: "Sí", puntaje: 2 },
            { opcion: "B", descripcion: "No", puntaje: 1 }
        ]
    },
    {
        pregunta: "En términos de tiempo, ¿cuál es su horizonte de inversión?",
        opciones: [
            { opcion: "A", descripcion: "Menos de 1 año.", puntaje: 1 },
            { opcion: "B", descripcion: "Entre 1 y 3 años.", puntaje: 2 },
            { opcion: "C", descripcion: "Más de 3 años.", puntaje: 3 }
        ]
    },
    {
        pregunta: "¿Conoce alguna de las siguientes opciones de inversión?",
        opciones: [
            { opcion: "A", descripcion: "Opciones en el mercado nacional (Bonos, Acciones, etc.).", puntaje: 2 },
            { opcion: "B", descripcion: "Opciones en el mercado internacional.", puntaje: 3 },
            { opcion: "C", descripcion: "No conozco ninguna.", puntaje: 1 },
        ],
    },
    {
        pregunta: "¿Utiliza medios propios para evaluar y dar seguimiento a instrumentos financieros?",
        opciones: [
            { opcion: "A", descripcion: "Sí, ¿cuáles?", puntaje: 2 },
            { opcion: "B", descripcion: "No", puntaje: 1 },
        ],
    },
    {
        pregunta: "A la hora de tomar una decisión de inversión, ¿Cuál de los siguientes factores inciden más sobre ésta?",
        opciones: [
            { opcion: "A", descripcion: "Análisis personales.", puntaje: 2 },
            { opcion: "B", descripcion: "Información técnica de la Casa de Bolsa.", puntaje: 1 },
            { opcion: "C", descripcion: "El criterio de su sucesor.", puntaje: 3 },
            { opcion: "D", descripcion: "Experiencias anteriores.", puntaje: 4 },
            { opcion: "E", descripcion: "Otra.", puntaje: 4 },
        ],
    },
    {
        pregunta: "En el caso de altas fluctuaciones de precios de sus inversiones, ¿Qué decisión tomaría?",
        opciones: [
            { opcion: "A", descripcion: "No me siento cómodo con las fluctuaciones.", puntaje: 1 },
            { opcion: "B", descripcion: "Liquidar inmediatamente.", puntaje: 2 },
            { opcion: "C", descripcion: "Esperar para analizar la tendencia.", puntaje: 3 },
            { opcion: "D", descripcion: "Mantener las posiciones esperando una recuperación.", puntaje: 4 },
        ],
    },
    {
        pregunta: "Si el valor de sus inversiones cae, ¿A partir de qué monto tomaría medidas extremas?",
        opciones: [
            { opcion: "A", descripcion: "-5%", puntaje: 1 },
            { opcion: "B", descripcion: "-10%", puntaje: 2 },
            { opcion: "C", descripcion: "-20%", puntaje: 3 },
            { opcion: "D", descripcion: "No me inquieto", puntaje: 4 },
        ],
    },
    {
        pregunta: "¿Cuál de las siguientes afirmaciones se ajusta más a sus preferencias?",
        opciones: [
            { opcion: "A", descripcion: "Mis inversiones deben ser lo más seguras posibles, aunque eso implique que los rendimientos sean bajos.", puntaje: 1 },
            { opcion: "B", descripcion: "Me interesan rendimientos competitivos manteniendo una adecuada seguridad, pero sabiendo que estoy expuesto a riesgos de pérdidas ocasionales.", puntaje: 2 },
            { opcion: "C", descripcion: "Busco rendimientos superiores a los del mercado y estoy dispuesto a aceptar un riesgo moderado para obtener estos rendimientos.", puntaje: 3 },
            { opcion: "D", descripcion: "Espero altos rendimientos en el largo plazo, aunque ello signifique aceptar fluctuaciones en el corto plazo.", puntaje: 4 },
        ],
    },
    {
        pregunta: "Defina su moneda de preferencia para realizar inversiones.",
        opciones: [
            { opcion: "A", descripcion: "Pesos", puntaje: 1 },
            { opcion: "B", descripcion: "Dólares", puntaje: 2 },
            { opcion: "C", descripcion: "Euros", puntaje: 2 },
            { opcion: "D", descripcion: "No tengo preferencia por una moneda en particular", puntaje: 3 },
            { opcion: "E", descripcion: "Otras", puntaje: 3 },
        ],
    }
];

const preguntasSegundaParte: Pregunta[] = [
    {
        pregunta: "De acuerdo a la definición anterior, ¿se considera como un inversionista sofisticado?",
        opciones: [
            { opcion: "A", descripcion: "Sí", puntaje: 2 },
            { opcion: "B", descripcion: "No", puntaje: 1 },
        ],
    },
    {
        pregunta: "¿Cuenta con portafolios de inversión en otras instituciones financieras?",
        opciones: [
            { opcion: "A", descripcion: "Sí", puntaje: 2 },
            { opcion: "B", descripcion: "No", puntaje: 1 },
        ],
    },
    {
        pregunta: "¿Cuenta con inversiones de naturaleza no financiera (negocios, bienes raíces, etc.)?",
        opciones: [
            {
                opcion: "A", descripcion: "Sí, en:",
                puntaje: 2
            },
            { opcion: "A1", descripcion: "Tecnología (software, equipo)", puntaje: 2 },
            { opcion: "A2", descripcion: "Inversión agrícola (semilla, cultivos, maquinaria, etc.)", puntaje: 2 },
            { opcion: "A3", descripcion: "Inversión en comercio", puntaje: 2 },
            { opcion: "A4", descripcion: "Inversión en infraestructura", puntaje: 2 },
            { opcion: "A5", descripcion: "Inversión inmobiliaria", puntaje: 2 },
            { opcion: "A6", descripcion: "Otras", puntaje: 2 },
            { opcion: "B", descripcion: "No", puntaje: 1 },
        ],
    },
];

export default function Test() {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);
    const [respuestas, setRespuestas] = useState<{ pregunta: string, respuesta: string, puntaje: number }[]>([]);
    const [testTerminado, setTestTerminado] = useState(false);
    const [mostrarTextoIntermedio, setMostrarTextoIntermedio] = useState(false);
    const [parteActual, setParteActual] = useState(1);
    const [scoreTotal, setScoreTotal] = useState(0);

    const seleccionarOpcion = (opcion: string) => {
        setOpcionSeleccionada(opcion);
    };

    const siguientePregunta = () => {
        const preguntasActuales = parteActual === 1 ? preguntasPrimeraParte : preguntasSegundaParte;

        if (opcionSeleccionada) {
            const opcion = preguntasActuales[preguntaActual].opciones.find(op => op.opcion === opcionSeleccionada);
            const nuevaRespuesta = {
                pregunta: preguntasActuales[preguntaActual].pregunta,
                respuesta: opcion?.descripcion || '',
                puntaje: opcion?.puntaje || 0,
            };

            setRespuestas([...respuestas, nuevaRespuesta]);
            setScoreTotal(scoreTotal + (opcion?.puntaje || 0));

            if (preguntaActual < preguntasActuales.length - 1) {
                setPreguntaActual(preguntaActual + 1);
                setOpcionSeleccionada(null);
            } else if (parteActual === 1) {
                setMostrarTextoIntermedio(true);
            } else {
                setTestTerminado(true);
            }
        }
    };

    const continuarSegundaParte = () => {
        setMostrarTextoIntermedio(false);
        setParteActual(2);
        setPreguntaActual(0);
        setOpcionSeleccionada(null);
    };

    // Función para determinar el perfil de riesgo
    const determinarPerfilDeRiesgo = () => {
        let perfil = '';
        if (respuestas.find((r) => r.pregunta.includes("pregunta 13") && r.respuesta === "Sí")) {
            perfil = 'Sofisticado';
        } else if (scoreTotal >= 0 && scoreTotal <= 14) {
            perfil = 'Adverso al riesgo';
        } else if (scoreTotal >= 15 && scoreTotal <= 28) {
            perfil = 'Moderado';
        } else if (scoreTotal >= 29 && scoreTotal <= 44) {
            perfil = 'Propenso al riesgo';
        }
        return perfil;
    };

    // Función para calcular el porcentaje de progreso, considerando ambas partes
    const calcularProgreso = () => {
        // Total de preguntas en ambas partes
        const totalPreguntasParte1 = preguntasPrimeraParte.length;
        const totalPreguntasParte2 = preguntasSegundaParte.length;
        const totalPreguntas = totalPreguntasParte1 + totalPreguntasParte2;

        // Cálculo del progreso tomando en cuenta ambas partes
        const preguntasCompletadas = parteActual === 1 ? preguntaActual : totalPreguntasParte1 + preguntaActual;
        const porcentaje = (preguntasCompletadas / totalPreguntas) * 100;

        return porcentaje;
    };

    const renderContenido = () => {
        if (testTerminado) {
            const perfilRiesgo = determinarPerfilDeRiesgo();
            return (
                <Resultados respuestas={respuestas} scoreTotal={scoreTotal} perfilRiesgo={perfilRiesgo} />
            );
        } else if (mostrarTextoIntermedio) {
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
                    {/* Barra de progreso */}
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

                    {/* Renderizar la pregunta y opciones */}
                    <Seccion
                        pregunta={preguntasActuales[preguntaActual]}
                        opcionSeleccionada={opcionSeleccionada}
                        seleccionarOpcion={seleccionarOpcion}
                        siguientePregunta={siguientePregunta}
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
