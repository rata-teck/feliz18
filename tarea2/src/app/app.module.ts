import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletoComponent } from './completo/completo.component';
import { SopaipillaComponent } from './sopaipilla/sopaipilla.component';
import { EmpanadaComponent } from './empanada/empanada.component';
import { AnticuchoComponent } from './anticucho/anticucho.component';
import { HumitaComponent } from './humita/humita.component';
import { PastelDeChocloComponent } from './pastel-de-choclo/pastel-de-choclo.component';
import { TerremotoComponent } from './terremoto/terremoto.component';
import { MoteConHuesillosComponent } from './mote-con-huesillos/mote-con-huesillos.component';
import { ChoripanComponent } from './choripan/choripan.component';
import { ChorrillanaComponent } from './chorrillana/chorrillana.component';
import { PiscolaComponent } from './piscola/piscola.component';

@NgModule({
  declarations: [
    AppComponent,
    CompletoComponent,
    SopaipillaComponent,
    EmpanadaComponent,
    AnticuchoComponent,
    HumitaComponent,
    PastelDeChocloComponent,
    TerremotoComponent,
    MoteConHuesillosComponent,
    ChoripanComponent,
    ChorrillanaComponent,
    PiscolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
