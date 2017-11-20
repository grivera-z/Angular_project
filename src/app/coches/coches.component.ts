import { Component } from '@angular/core';
import { Coche } from './coches';
import { PeticionsService } from '../services/peticiones.service';

@Component({
    selector:'coches',
    templateUrl:'./coches.component.html',
    styleUrls:['./coches.component.css'],
    providers:[PeticionsService]
})

export class CochesComponent{
    public Title:string;
    public coche:Coche;
    public coches:Array<Coche>;
    public articulos;

    constructor(private _peticionesService:PeticionsService){
        this.Title='Componente Coches';
        this.coche = new Coche("","","","");
        this.coches = [
            new Coche("chevy","2000","gris","true"),
            new Coche("vocho","4000","blanco","true"),
            new Coche("polo","1500","azul","false")
        ];
    }
    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos=result;
                if(!this.articulos)
                    console.log("Error in the server");
            },
            error =>{
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }
    onSubmit(){
        this.coches.push(this.coche);
        //this.coche = new Coche("","","","");
    }

}