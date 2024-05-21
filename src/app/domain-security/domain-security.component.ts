import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-domain-security',
  templateUrl: './domain-security.component.html',
  styleUrls: ['./domain-security.component.css']
})
export class DomainSecurityComponent implements OnInit {

  // Checklist para el dominio de seguridad en tablas
  phaseTasksSecurity = [
    {
      phase: 'Quick Wins',
      tasks: [
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Multi-Factor Authentication',
          observations:'' ,
          documents: ['Documento de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'IAM Access Analyzer',
          observations:'' ,
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Security Hub: Buenas prácticas',
          observations:'' ,
          documents: ['Informe de análisis'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'WAF con reglas gestionadas',
          observations:'' ,
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Evitar el uso de Root',
          observations:'' ,
          documents: ['Informe de análisis'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'GuardDuty: Detección de amenazas',
          observations:'' ,
          documents: ['Documento de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'CloudTrail: Auditoría',
          observations:'' ,
          documents: ['Informe de auditoría'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Limitar los Security Groups',
          observations:'' ,
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Asignar contactos de seguridad',
          observations:'' ,
          documents: ['Documento de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Macie: Políticas de datos',
          observations:'' ,
          documents: ['Informe de políticas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'AWS Trusted Advisor',
          observations:'' ,
          documents: ['Informe de análisis'],
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
          tarea: 'KMS: Cifrado de Datos',
          observations:'' ,
          documents: ['Documento de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'GuardDuty: Investigar hallazgos/S3',
          observations:'' ,
          documents: ['Informe de investigación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Seguridad en Desarrollo',
          observations:'' ,
          documents: ['Guía de seguridad en desarrollo'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Sin Secretos en Código',
          observations:'' ,
          documents: ['Guía de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'SCPs: Políticas Organizacionales',
          observations:'' ,
          documents: ['Documento de políticas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Segmentación de redes (VPCs)',
          observations:'' ,
          documents: ['Guía de configuración'],
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
          tarea:'Anti-Malware / EDR',
          observations:'' ,
          documents: ['Guía de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Análisis de flujos de red',
          observations:'',
          documents: ['Informe de análisis'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Automatizar corrección de desvíos',
          observations:'',
          documents: ['Guía de automatización'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Automatizaciones en seguridad',
          observations:'',
          documents: ['Informe de automatización'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'CIAM: Usuarios de aplicaciones',
          observations:'' ,
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Security Champions',
          observations:'' ,
          documents: ['Plan de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Integración con SIEM/SOAR',
          observations:'' ,
          documents: ['Informe de integración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Modelado de Amenazas',
          observations:'' ,
          documents: ['Informe de modelado'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Shield Advanced: Mitigación DDoS',
          observations:'' ,
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Infraestructura como código',
          observations:'' ,
          documents: ['Guía de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'WAF con reglas custom',
          observations:'' ,
          documents: ['Guía de configuración'],
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
          tarea: 'Red Team',
          observations:'' ,
          documents: ['Informe de pruebas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Detective: Análisis de causa raíz',
          observations:'' ,
          documents: ['Informe de análisis'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Amazon Fraud Detector',
          observations:'' ,
          documents: ['Informe de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Blue Team',
          observations:'' ,
          documents: ['Informe de pruebas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Control de accesos según contexto',
          observations:'' ,
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'DevSecOps',
          observations:'' ,
          documents: ['Guía de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'Feeds de inteligencia',
          observations:'' ,
          documents: ['Informe de inteligencia'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          tarea: 'IAM Pipeline',
          observations:'' ,
          documents: ['Guía de configuración'],
          avance: 0
        }
      ]
    }
  ];




  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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

}
