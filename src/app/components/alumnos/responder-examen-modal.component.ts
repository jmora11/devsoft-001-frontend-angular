import { Component, OnInit, Inject } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Alumno } from 'src/app/models/alumno';
import { Examen } from 'src/app/models/examen';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-responder-examen-modal',
  templateUrl: './responder-examen-modal.component.html',
  styleUrls: ['./responder-examen-modal.component.css']
})
export class ResponderExamenModalComponent implements OnInit {

  curso: Curso;
  alumno: Alumno;
  examen: Examen;

  respuestas: Map<number, Respuesta> = new Map<number, Respuesta>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public modalRef: MatDialogRef<ResponderExamenModalComponent> ) { }

  ngOnInit(): void {
    this.curso = this.data.curso as Curso;
    console.log('Curso',  this.curso);
    this.alumno = this.data.alumno as Alumno;
    console.log('alumno',  this.alumno);
    this.examen = this.data.examen as Examen;
    console.log('examen',  this.examen);
  }

  cancelar(): void {
    this.modalRef.close();
  }

  responder(pregunta: Pregunta, event): void {
    const texto = event.target.value as string;
    const respuesta  = new Respuesta();
    respuesta.student = this.alumno;
    respuesta.pregunta = pregunta;

    const examen = new Examen();
    examen.id = this.examen.id;
    examen.name = this.examen.name;

    respuesta.pregunta.examen = examen;
    respuesta.texto = texto;

    this.respuestas.set(pregunta.id, respuesta);
    console.log(this.respuestas);
  }

}
