import { Component } from '@angular/core';

@Component({
    selector:'plantilla',
    templateUrl:'./plantillas.component.html'
})

export class PlantillasComponent{
    public Titulo:string;
    public administrador:boolean;

    constructor(){
        this.Titulo="Plantillas ngTemplate en Angular";
        this.administrador=false;
    }
    cambiar(){
        this.administrador = (!this.administrador);
    }
}