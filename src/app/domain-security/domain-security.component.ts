import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-domain-security',
  templateUrl: './domain-security.component.html',
  styleUrls: ['./domain-security.component.css']
})
export class DomainSecurityComponent implements OnInit {

  // Checklist para el dominio de seguridad
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


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    console.log(event);
  }
}
