import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-domain-security',
  templateUrl: './domain-security.component.html',
  styleUrls: ['./domain-security.component.css']
})
export class DomainSecurityComponent implements OnInit {

  // Checklist para el dominio de seguridad en tablas
phaseTasks= [
    {
      phase: 'Quick Wins',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          observations: 'Implementar la autenticación multifactor.',
          documents: ['Documento de implementación'],
          avance: 100
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Configurar la alarma de facturación para alertas.',
          documents: ['Guía de configuración'],
          avance:25
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Analizar el acceso de IAM para detectar permisos innecesarios.',
          documents: ['Informe de análisis'],
          avance: 10
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
  updateAvance(task: any) {
    debugger
    if (task.estado === 'enCurso' && (task.avance < 0 || task.avance > 100)) {
      // Restringir el valor de avance a un rango válido si el estado es 'enCurso'
      task.avance = Math.min(Math.max(task.avance, 0), 100);
    } else if (task.estado === 'implementado') {
      // Establecer el avance al 100% si el estado es 'implementado'
      task.avance = 100;
    }
  }

}
