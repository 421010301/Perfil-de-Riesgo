import { Pregunta, Respuesta } from '@/types/type';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TestContextInterface {
    testTerminado: boolean;
    mostrarTextoIntermedio: boolean;
    seleccionarOpcion: (opcion: string) => void;
    siguientePregunta: () => void;
    continuarSegundaParte: () => void;
    determinarPerfilDeRiesgo: () => string;
    calcularProgreso: () => number;
    respuestas: Respuesta[];
    scoreTotal: number;
    preguntaActual: number;
    parteActual: number;
    opcionSeleccionada: string | null;
    preguntasPrimeraParte: Pregunta[];
    preguntasSegundaParte: Pregunta[];
    perfilDeRiesgo: string;  // Nuevo campo para el perfil de riesgo
    resetTest: () => void;
}

const TestContext = createContext<TestContextInterface | undefined>(undefined);

export const TestProvider = ({ children }: { children: ReactNode }) => {
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
                { opcion: "A", descripcion: "Sí", puntaje: 2 },
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
                    opcion: "A", descripcion: "Sí",
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
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);
    const [respuestas, setRespuestas] = useState<Respuesta[]>([]);
    const [testTerminado, setTestTerminado] = useState(false);
    const [mostrarTextoIntermedio, setMostrarTextoIntermedio] = useState(false);
    const [parteActual, setParteActual] = useState(1);
    const [scoreTotal, setScoreTotal] = useState(0);
    const [perfilDeRiesgo, setPerfilDeRiesgo] = useState<string>('');  // Estado para el perfil de riesgo

    const seleccionarOpcion = (opcion: string) => {
        setOpcionSeleccionada(opcion);
    };

    const continuarSegundaParte = () => {
        setMostrarTextoIntermedio(false);
        setParteActual(2);
        setPreguntaActual(0);
        setOpcionSeleccionada(null);
    };

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
                // Actualizamos el perfil de riesgo al finalizar el test
                const perfil = determinarPerfilDeRiesgo();
                setPerfilDeRiesgo(perfil);  // Actualizamos el estado del perfil de riesgo
                setTestTerminado(true);
            }
        }
    };

    const calcularProgreso = () => {
        const totalPreguntasParte1 = preguntasPrimeraParte.length;
        const totalPreguntasParte2 = preguntasSegundaParte.length;
        const totalPreguntas = totalPreguntasParte1 + totalPreguntasParte2;

        const preguntasCompletadas = parteActual === 1 ? preguntaActual : totalPreguntasParte1 + preguntaActual;
        const porcentaje = (preguntasCompletadas / totalPreguntas) * 100;

        return porcentaje;
    };

    const resetTest = () => {
        setPreguntaActual(0);
        setOpcionSeleccionada(null);
        setRespuestas([]);
        setTestTerminado(false);
        setMostrarTextoIntermedio(false);
        setParteActual(1);
        setScoreTotal(0);
        setPerfilDeRiesgo('');  // Resetear el perfil de riesgo
    };
    return (
        <TestContext.Provider value={{
            testTerminado,
            mostrarTextoIntermedio,
            seleccionarOpcion,
            siguientePregunta,
            continuarSegundaParte,
            determinarPerfilDeRiesgo,
            calcularProgreso,
            respuestas,
            scoreTotal,
            preguntaActual,
            parteActual,
            opcionSeleccionada,
            preguntasPrimeraParte,
            preguntasSegundaParte,
            perfilDeRiesgo,
            resetTest
        }}>
            {children}
        </TestContext.Provider>
    );
};

export const useTestContext = () => {
    const context = useContext(TestContext);
    if (context === undefined) {
        throw new Error('useTestContext must be used within a TestProvider');
    }
    return context;
};
