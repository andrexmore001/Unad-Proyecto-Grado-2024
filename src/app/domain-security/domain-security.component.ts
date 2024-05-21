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
          observations: 'Multi-Factor Authentication',
          documents: ['Documento de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'IAM Access Analyzer',
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Security Hub: Buenas prácticas',
          documents: ['Informe de análisis'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'WAF con reglas gestionadas',
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Evitar el uso de Root',
          documents: ['Informe de análisis'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'GuardDuty: Detección de amenazas',
          documents: ['Documento de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'CloudTrail: Auditoría',
          documents: ['Informe de auditoría'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Limitar los Security Groups',
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Asignar contactos de seguridad',
          documents: ['Documento de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Macie: Políticas de datos',
          documents: ['Informe de políticas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'AWS Trusted Advisor',
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
          observations: 'KMS: Cifrado de Datos',
          documents: ['Documento de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'GuardDuty: Investigar hallazgos/S3',
          documents: ['Informe de investigación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Seguridad en Desarrollo',
          documents: ['Guía de seguridad en desarrollo'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Sin Secretos en Código',
          documents: ['Guía de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'SCPs: Políticas Organizacionales',
          documents: ['Documento de políticas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Segmentación de redes (VPCs)',
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
          observations: 'Anti-Malware / EDR',
          documents: ['Guía de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Análisis de flujos de red',
          documents: ['Informe de análisis'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Automatizar corrección de desvíos',
          documents: ['Guía de automatización'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Automatizaciones en seguridad',
          documents: ['Informe de automatización'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'CIAM: Usuarios de aplicaciones',
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Security Champions',
          documents: ['Plan de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Integración con SIEM/SOAR',
          documents: ['Informe de integración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Modelado de Amenazas',
          documents: ['Informe de modelado'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Shield Advanced: Mitigación DDoS',
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Infraestructura como código',
          documents: ['Guía de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'WAF con reglas custom',
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
          observations: 'Red Team',
          documents: ['Informe de pruebas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Detective: Análisis de causa raíz',
          documents: ['Informe de análisis'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Amazon Fraud Detector',
          documents: ['Informe de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Blue Team',
          documents: ['Informe de pruebas'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Control de accesos según contexto',
          documents: ['Guía de configuración'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'DevSecOps',
          documents: ['Guía de implementación'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'Feeds de inteligencia',
          documents: ['Informe de inteligencia'],
          avance: 0
        },
        {
          implemented: false,
          implementationDate: '',
          observations: 'IAM Pipeline',
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
