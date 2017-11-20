import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componentes

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'empleado',component: EmpleadoComponent},
    {path: 'fruta',component: FrutaComponent},
    {path: 'contacto',component: ContactoComponent},
    {path: 'contacto/:page',component: ContactoComponent},  
    {path: 'home',component: HomeComponent},
    {path: 'coches',component:CochesComponent},
    {path: 'plantilla',component:PlantillasComponent},   
    {path: '**',component: FrutaComponent}
]

export const appRoutingProviders: any[]=[];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);