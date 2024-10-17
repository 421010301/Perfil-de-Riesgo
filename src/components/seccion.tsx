import { Pregunta } from "@/app/test/page";
import { useTestContext } from "@/utils/test-context";
import Link from "next/link";

interface SeccionProps {
    pregunta: Pregunta;
    isUltimaPregunta: boolean;
}

const Seccion: React.FC<SeccionProps> = ({
    pregunta,
    isUltimaPregunta,
}) => {
    const { testTerminado, opcionSeleccionada, seleccionarOpcion, siguientePregunta } = useTestContext()
    return (
        <div className="mt-3">
            <div className="card text-center py-3 shadow-sm">
                <h4 className="m-0 mx-3">{pregunta.pregunta}</h4>
            </div>
            <div className="row">
                {pregunta.opciones.map((opcion) => (
                    <div className="col-md-6 mt-3" key={opcion.opcion}>
                        <div
                            className={`card p-3 h-100 ${opcionSeleccionada === opcion.opcion ? 'alert alert-primary m-0' : ''
                                }`}
                            onClick={() => seleccionarOpcion(opcion.opcion)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="form-check ">
                                <input
                                    type="radio"
                                    name="opcion"
                                    value={opcion.opcion}
                                    className="form-check-input"
                                    checked={opcionSeleccionada === opcion.opcion}
                                    onChange={() => seleccionarOpcion(opcion.opcion)}
                                    style={{ display: 'none' }}
                                />
                                <h5 className="card-title m-0">{opcion.opcion}.- {opcion.descripcion}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {testTerminado ? <Link href="/resultado" className="btn btn-primary my-3 w-100" scroll replace>Finalizar</Link> : <button
                className="btn btn-primary my-3 w-100"
                onClick={siguientePregunta}
                disabled={!opcionSeleccionada}
            >
                {isUltimaPregunta ? 'Finalizar' : 'Siguiente'}
            </button>}
        </div>
    );
};


export default Seccion;
