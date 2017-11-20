import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
    public nombre_prenda:string;
    public coleccion_ropa:Array<string>;

    constructor(){
        this.coleccion_ropa=['Pantalones Blancos','Comiseta Roja'];
    }

    prueba(nombre_prenda){
        return this.nombre_prenda=nombre_prenda;
    }

    addRopa(nombre_prenda:string):Array<string>{
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }
    getRopa():Array<string>{
        return this.coleccion_ropa;
    }
    deleteRopa(index:number){
        this.coleccion_ropa.splice(index,1);
        return this.getRopa();
    }

}