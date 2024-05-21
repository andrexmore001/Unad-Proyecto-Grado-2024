import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain-cost',
  templateUrl: './domain-cost.component.html',
  styleUrls: ['./domain-cost.component.css']
})
export class DomainCostComponent implements OnInit {

 phaseTasksCostos = [
    {
      phase: 'Quick Wins',
      tasks: [
        {
          implemented: true,
          implementationDate: '',
          observations: 'Optimización de instancias bajo uso',
          documents: ['Documento de análisis de uso'],
          avance: 100
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Uso de Savings Plans',
          documents: ['Guía de Savings Plans'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Eliminación de recursos no utilizados',
          documents: ['Informe de recursos no utilizados'],
          avance: 0
        }
      ]
    },
    {
      phase: 'Foundational',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          observations: 'Consolidación de facturas',
          documents: ['Guía de consolidación de facturas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Uso de instancias reservadas',
          documents: ['Informe de instancias reservadas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Optimización de almacenamiento',
          documents: ['Guía de optimización de almacenamiento'],
          avance: 0
        }
      ]
    },
    {
      phase: 'Efficient',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          observations: 'Uso de Spot Instances',
          documents: ['Guía de Spot Instances'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Automatización de escalado',
          documents: ['Informe de escalado automatizado'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Optimización de bases de datos',
          documents: ['Guía de optimización de bases de datos'],
          avance: 0
        }
      ]
    },
    {
      phase: 'Optimized',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          observations: 'Uso de herramientas de monitoreo y alertas',
          documents: ['Informe de monitoreo'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Optimización continua de costos',
          documents: ['Guía de optimización continua'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Uso de herramientas de análisis de costos',
          documents: ['Informe de análisis de costos'],
          avance: 0
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any, task: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      task.documents.push(files[i].name);
    }
  }

  updateAvance(task: any): void {
    if (task.implemented) {
      debugger
      task.avance = 100;
    } else {
      debugger
      if (task.avance === 100) {
        task.avance = 0;
      }
    }
  }

}
