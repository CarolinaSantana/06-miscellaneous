import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

  alert:string ='alert-danger';
  loading:boolean = false;
  propiedades:any = {
    danger: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  execute() {
    this.loading = true;
    setTimeout( ()=> this.loading = false, 3000);
  }

}
