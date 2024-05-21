import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-domain-performance',
  templateUrl: './domain-performance.component.html',
  styleUrls: ['./domain-performance.component.css']
})
export class DomainPerformanceComponent implements OnInit {
  editForm!: FormGroup;
  phaseTasksSecurity = [
    {
      phase: 'Quick Wins',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Monitoreo del rendimiento de aplicaciones',
          observations: '',
          documents: ['Informe de monitoreo'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Optimización del tiempo de respuesta',
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
          tarea: 'Implementación de caché',
          observations: '',
          documents: ['Guía de implementación'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Estrategia de balanceo de carga',
          observations: '',
          documents: ['Plan de balanceo'],
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
          tarea: 'Optimización de consultas a la base de datos',
          observations: '',
          documents: ['Informe de optimización'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Implementación de CDN',
          observations: '',
          documents: ['Guía de implementación'],
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
          tarea: 'Monitoreo avanzado del rendimiento',
          observations: '',
          documents: ['Informe de monitoreo'],
          avance: 0,
          editar: 'editar'
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Estrategia de mejora continua del rendimiento',
          observations: '',
          documents: ['Plan de mejora'],
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
