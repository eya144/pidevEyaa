import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeEmploiService } from 'serviceEntretien/demande-emploi.service';

@Component({
  selector: 'app-demande-emploi',
  templateUrl: './demande-emploi.component.html',
  styleUrls: ['./demande-emploi.component.css']
})
export class DemandeEmploiComponent {
  demandeEmploiForm: FormGroup;

  // Ajoute Router dans le constructeur
constructor(private fb: FormBuilder, private demandeEmploiService: DemandeEmploiService, private router: Router) {
  this.demandeEmploiForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(18)]],
    experience: ['', Validators.required],
    specialite: ['', Validators.required],
    adresseMail: ['', [Validators.required, Validators.email]],
  });
}

onSubmit() {
  if (this.demandeEmploiForm.valid) {
    this.demandeEmploiService.ajouterDemandeEmploi(this.demandeEmploiForm.value).subscribe(response => {
      console.log('Demande envoyée avec succès', response);
      
      // Rediriger vers la page des détails avec l'ID de la demande créée
      this.router.navigate(['demandeEmploi/details', response.idDemandeEmploi]);

    }, error => {
      console.error('Erreur lors de l\'envoi de la demande', error);
    });
  }
}}