import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes das páginas do site
import { HeaderComponent } from './components/header/header.component';
import { MainTextComponent } from './components/main-text/main-text.component';
import {FooterComponent} from './components/footer/footer.component';

// Componentes importados do angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import { LanguagesComponent } from './components/languages/languages.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MatCardModule } from '@angular/material/card';
import { SecondaryTextComponent } from './components/secondary-text/secondary-text.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainTextComponent,
    LanguagesComponent,
    ProjectsComponent,
    SecondaryTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
