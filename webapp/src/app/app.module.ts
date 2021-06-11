import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'primeng/chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoTemperaturaUmiditaComponent } from './grafico-temperatura-umidita/grafico-temperatura-umidita.component';


@NgModule({
  declarations: [
    AppComponent,
    GraficoTemperaturaUmiditaComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
