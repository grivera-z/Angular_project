import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector:'empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
    
})


export class EmpleadoComponent {
    public people:string;
    public comodin:any;
    public trabajos:Array<Empleado>;
    public titulo:string;
    public empleado:Empleado;
    public ex:boolean;
    public color:string;
    public color_sel:string;

    constructor(){
        this.comodin = 45;
        this.people = 'Hola';
        this.trabajos=[
            new Empleado('Gabriel',23,'Programador',false),
            new Empleado('William',33,'todo',true),
            new Empleado('Barba',14,'no se',false),
            new Empleado('Ana',30,'Programador',true)];
        this.titulo='Empleados DXC';
        this.ex = false;
        this.color='blue';
        this.color_sel='#ccc';
        
      
        
    }

    ngOnInit(){
        //this.holamundo(this.comodin);
        this.empleado = new Empleado('Gabriel',23,'Programador',true);
        console.log(this.trabajos);

   }
   logcolsel(){
       alert(this.color_sel)
   }

   cambiarExterno(valor){
        this.ex = valor;
   }


    holamundo(comodin){
        alert('holamundo' + comodin);
    }
}



