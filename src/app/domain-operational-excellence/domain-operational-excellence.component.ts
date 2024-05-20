import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain-operational-excellence',
  templateUrl: './domain-operational-excellence.component.html',
  styleUrls: ['./domain-operational-excellence.component.css']
})
export class DomainOperationalExcellenceComponent implements OnInit {


  phaseTasks= [
    {
      phase: 'Quick Wins',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          observations: 'Implementar la autenticación multifactor.',
          documents: ['Documento de implementación'],
          avance: '15%'
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Configurar la alarma de facturación para alertas.',
          documents: ['Guía de configuración'],
          avance: '25%'
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Analizar el acceso de IAM para detectar permisos innecesarios.',
          documents: ['Informe de análisis'],
          avance: '10%'
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    console.log(event);
  }

}
