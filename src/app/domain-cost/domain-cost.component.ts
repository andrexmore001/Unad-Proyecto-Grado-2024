import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-domain-cost',
  templateUrl: './domain-cost.component.html',
  styleUrls: ['./domain-cost.component.css']
})
export class DomainCostComponent implements OnInit {
  editForm!: FormGroup;
  // Checklist para el dominio de seguridad en tablas
  phaseTasksSecurity = [
    {
      phase: 'Quick Wins',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Analizar costos actuales',
          observations: '',
          documents: ['Informe de costos'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Optimización de instancias reservadas',
          observations: '',
          documents: ['Guía de optimización'],
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
          tarea: 'Implementar políticas de ahorro',
          observations: '',
          documents: ['Políticas de ahorro'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Automatizar la gestión de costos',
          observations: '',
          documents: ['Guía de automatización'],
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
          tarea: 'Optimización de uso de recursos',
          observations: '',
          documents: ['Informe de uso'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Monitoreo continuo de costos',
          observations: '',
          documents: ['Guía de monitoreo'],
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
          tarea: 'Estrategia de ahorro avanzado',
          observations: '',
          documents: ['Plan de estrategia'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Integración de AI para predicción de costos',
          observations: '',
          documents: ['Informe de integración'],
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
