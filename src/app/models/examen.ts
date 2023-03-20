import { Pregunta } from './pregunta';
import { Asignatura } from './asignatura';
import { Generic } from './generic';

export class Examen implements Generic {
    id: number;
    name: string;
    createAt: string;
    preguntas: Pregunta[] = [];
    asignatura: Asignatura;
    asignaturaPadre: Asignatura;
    asignaturaHija: Asignatura;
    respondido: boolean;
}
