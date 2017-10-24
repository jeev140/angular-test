import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	studentData=null;
   constructor(private http: Http) {

         this.getJSON().subscribe(data => this.studentData=data, error => console.log(error));
       
    }
     public getJSON(): Observable<any> {
         return this.http.get("assets/document.json")
                         .map((res:any) => res.json());

     }
                   
}