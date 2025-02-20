import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogistiqueComponent } from './logistique/logistique.component';
import { RHComponent } from './rh/rh.component';
import { FinanceComponent } from './finance/finance.component';
import { InspectionComponent } from './inspection/inspection.component';

import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ServiceComponent } from './service/service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackMenuAdminComponent } from './back-menu-admin/back-menu-admin.component';
import { BackHeaderComponent } from './back-header/back-header.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadeerComponent } from './headeer/headeer.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMaterielComponent } from './edit-materiel/edit-materiel.component';
import { CommandeComponent } from './commande/commande.component';
import { DashboardLogistiqueComponent } from './dashboard-logistique/dashboard-logistique.component';
import { CommandeDashComponent } from './commande-dash/commande-dash.component';
import { StocksComponent } from './stocks/stocks.component';
import { CommandeFournisseurComponent } from './commande-fournisseur/commande-fournisseur.component';
import { DemandeEmploiComponent } from './demande-emploi/demande-emploi.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { DetailsDemandeEmploiComponent } from './details-demande-emploi/details-demande-emploi.component';
import { EntretienComponent } from './entretien/entretien.component';
import { OrganisationEntretienComponent } from './organisation-entretien/organisation-entretien.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    LoginComponent,
    LogistiqueComponent,
    RHComponent,
    FinanceComponent,
    InspectionComponent,
    ContactComponent,
      InscriptionComponent,
      ServiceComponent,
      DashboardComponent,
      BackMenuAdminComponent,
      BackHeaderComponent,
      HeadeerComponent,
      AddMaterielComponent,
      EditMaterielComponent,
      CommandeComponent,
      DashboardLogistiqueComponent,
      CommandeDashComponent,
      StocksComponent,
      CommandeFournisseurComponent,
      DemandeEmploiComponent,
      FooterHomeComponent,
      DetailsDemandeEmploiComponent,
      EntretienComponent,
      OrganisationEntretienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
