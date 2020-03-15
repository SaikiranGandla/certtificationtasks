import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usedirectives',
  templateUrl: './usedirectives.component.html',
  styleUrls: ['./usedirectives.component.css']
})
export class UsedirectivesComponent implements OnInit {
   names : any[]
   accountNumbers : any[]

  constructor() {
     this.names = ['sai', 'kiran','gandla', 'testname'];
     this.accountNumbers=['123232324','233443344','345454354','849545798'];

   }

  ngOnInit() {
    
  }

}
