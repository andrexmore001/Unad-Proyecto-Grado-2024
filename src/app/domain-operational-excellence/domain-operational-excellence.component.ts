import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-domain-operational-excellence',
  templateUrl: './domain-operational-excellence.component.html',
  styleUrls: ['./domain-operational-excellence.component.css']
})
export class DomainOperationalExcellenceComponent implements OnInit {

  editForm!: FormGroup;
  // Checklist para el dominio de seguridad en tablas
  phaseTasksSecurity = [
    {
      phase: 'Quick Wins',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Automatización de tareas repetitivas',
          observations: '',
          documents: ['Guía de automatización'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Implementar monitoreo básico',
          observations: '',
          documents: ['Guía de monitoreo'],
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
          tarea: 'Estandarización de procesos',
          observations: '',
          documents: ['Documentación de procesos'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Capacitación del personal',
          observations: '',
          documents: ['Plan de capacitación'],
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
          tarea: 'Implementar CI/CD',
          observations: '',
          documents: ['Guía de CI/CD'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Mejorar la gestión de incidentes',
          observations: '',
          documents: ['Plan de gestión de incidentes'],
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
          tarea: 'Optimización de procesos con AI',
          observations: '',
          documents: ['Informe de optimización'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Integración total de DevOps',
          observations: '',
          documents: ['Plan de integración'],
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
