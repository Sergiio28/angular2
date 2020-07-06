import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';

import {FormularioPageModule} from './formulario/formulario.module';
import {AjustesPageModule} from './ajustes/ajustes.module';
import {AvisosPageModule} from './avisos/avisos.module';
import {BorradoresPageModule} from './borradores/borradores.module';
import {NuevoPartePageModule} from './nuevo-parte/nuevo-parte.module';
import {PartesEnviadosPageModule} from './partes-enviados/partes-enviados.module';
import {DatabasePageModule} from './database/database.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {firebaseConfig} from '../environments/environment';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormularioPageModule,
    AjustesPageModule,
    AvisosPageModule,
    BorradoresPageModule,
    NuevoPartePageModule,
    PartesEnviadosPageModule,
    DataTablesModule,
    DatabasePageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule

    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
