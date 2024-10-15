import { Pregunta } from "@/app/test/page";

interface SeccionProps {
    pregunta: Pregunta;
    opcionSeleccionada: string | null;
    seleccionarOpcion: (opcion: string) => void;
    siguientePregunta: () => void;
    isUltimaPregunta: boolean;
}

const Seccion: React.FC<SeccionProps> = ({
    pregunta,
    opcionSeleccionada,
    seleccionarOpcion,
    siguientePregunta,
    isUltimaPregunta,
}) => {
    return (
        <div className="mt-5">
            <div className="card text-center py-3 shadow-sm">
                <h4 className="m-0">{pregunta.pregunta}</h4>
            </div>
            <div className="row my-3">
                {pregunta.opciones.map((opcion) => (
                    <div className="col-md-6 mb-3" key={opcion.opcion}>
                        <div
                            className={`card p-3 h-100 ${opcionSeleccionada === opcion.opcion ? 'border-primary' : ''
                                }`}
                            onClick={() => seleccionarOpcion(opcion.opcion)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="opcion"
                                    value={opcion.opcion}
                                    className="form-check-input"
                                    checked={opcionSeleccionada === opcion.opcion}
                                    onChange={() => seleccionarOpcion(opcion.opcion)}
                                    style={{ display: 'none' }}
                                />
                                <h5 className="card-title">{opcion.opcion}.- {opcion.descripcion}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="btn btn-primary mt-3 w-100"
                onClick={siguientePregunta}
                disabled={!opcionSeleccionada}
            >
                {isUltimaPregunta ? 'Finalizar' : 'Siguiente'}
            </button>
        </div>
    );
};


export default Seccion;
