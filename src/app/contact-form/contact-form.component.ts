import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods=[{id:1,name:"Email"},{id:2,name:"Phone"}]
   log(x) {console.log(x);}
   submit(f) { console.log("submittted!");}
  constructor() { }

  ngOnInit(): void {
  }

}
