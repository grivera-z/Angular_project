import { Component } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';

@Component({
    selector:'contacto',
    templateUrl:'./contacto.component.html'
})

export class ContactoComponent{
    public Titulo:string;
    public parametro:string;

    constructor(private _route:ActivatedRoute, private _router:Router){
        this.Titulo ='Pagina Contacto';

    }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.parametro=params['page'];
        });    
    }

    redirigir(){
        this._router.navigate(['/contacto','5555']);
    }
    redirigir2(){
        this._router.navigate(['/contacto','2222']);
    }

}