import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-domain-reliability',
  templateUrl: './domain-reliability.component.html',
  styleUrls: ['./domain-reliability.component.css']
})
export class DomainReliabilityComponent implements OnInit {

  editForm!: FormGroup;
  // Checklist para el dominio de seguridad en tablas
  phaseTasksSecurity = [
    {
      phase: 'Quick Wins',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Optimización del uso de recursos',
          observations: '',
          documents: ['Informe de optimización'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Eliminación de recursos no utilizados',
          observations: '',
          documents: ['Lista de recursos'],
          avance: 0,
          editar: 'editar'
        }
      ]
    },
    {
      phase: 'Foundational',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Automatización del escalado',
          observations: '',
          documents: ['Guía de escalado'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Monitoreo de eficiencia',
          observations: '',
          documents: ['Informe de monitoreo'],
          avance: 0,
          editar: 'editar'
        }
      ]
    },
    {
      phase: 'Efficient',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Implementación de soluciones serverless',
          observations: '',
          documents: ['Guía de implementación'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Optimización de la arquitectura de red',
          observations: '',
          documents: ['Plan de optimización'],
          avance: 0,
          editar: 'editar'
        }
      ]
    },
    {
      phase: 'Optimized',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Automatización avanzada de operaciones',
          observations: '',
          documents: ['Informe de automatización'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Estrategia de infraestructura como código',
          observations: '',
          documents: ['Guía de infraestructura'],
          avance: 0,
          editar: 'editar'
        }
      ]
    }
  ];

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      tarea: [''],
      observaciones: [''],
      fechaImplementación:[],
      avance:[]
    });
    this.data();
  }

  onFileSelected(event: any, task: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      task.documents.push(files[i].name);
    }
  }
  updateAvance(event:string,task: any) {
    debugger
    if (event==="Curso")
      {task.avance = 0;}
    else
    {task.avance = 100;}

  }

  data(){
  jQuery(function() {$("#example").DataTable(); })
 }

 ngAfterViewInit() {
  this.data();
 }

 openEditForm(task: any) {
  const modal = document.getElementById('editTaskModal'); // Suponiendo que tienes un elemento modal con este ID
  if (modal) {
    modal.style.display = 'block'; // Mostrar el modal

    // Poblar el formulario con datos de la tarea
    this.editForm.controls['tarea'].setValue(task.tarea);
    this.editForm.controls['observaciones'].setValue(task.observaciones);
    this.editForm.controls['fechaImplementación'].setValue(task.fechaImplementación);
    this.editForm.controls['avance'].setValue(task.avance);
  }
}

closeModal() {
  debugger
  const modal = document.getElementById('editTaskModal');
  if (modal) {
    modal.style.display = 'none'; // Oculta el modal
    // Limpia los valores del formulario (opcional)
    this.editForm.reset();
  }
}

}
