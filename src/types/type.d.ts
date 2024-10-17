export interface Opcion {
    opcion: string;
    descripcion: string;
    puntaje: number;
}

export interface Pregunta {
    pregunta: string;
    opciones: Opcion[];
}

export interface Respuesta {
    pregunta: string;
    respuesta: string;
    puntaje: number;
}
