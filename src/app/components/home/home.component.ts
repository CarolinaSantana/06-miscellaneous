import { Component, OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewChecked,
   AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <br>
    <app-css></app-css>
    <br>
    <app-classes></app-classes>
    <br>
    <p [appHighlighted]="'orange'">Hello World</p>
    <br>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewChecked,
 AfterViewInit, OnDestroy {

  constructor() { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  } 
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
