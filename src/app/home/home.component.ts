import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    providers: [ RopaService ]
})

export class HomeComponent{
    public Titulo:string;
    public listado_ropa:Array<string>;
    public prenda_sav:string;
    public fecha:Date;
    public nombre:string;

    constructor(private _ropaService:RopaService){
        this.Titulo ='Pagina Home';
        this.fecha=new Date(2018,2,7);
        this.nombre='Gabriel Rivera';
    }
    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }
    guardarprenda(){
        this._ropaService.addRopa(this.prenda_sav);
        this.prenda_sav = null;
    }

    eliminarPrenda(index:number){
        this._ropaService.deleteRopa(index);
    }

}