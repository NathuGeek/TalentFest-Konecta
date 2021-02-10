import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable(
    { providedIn: 'root'}
    )

    export class DataService {  
        constructor(private http: HttpClient) {}    

            public dataToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pa2NvcGlhIiwiaWF0IjoxNjEyODQwMzk4LCJleHAiOjE2MTMzNTg3OTh9.MCSp3rjPSsFgxmxbB-sm0jrt97t8BI7GYEwG_ghVezQ'
        
        getDataId(){
        return this.http.get(
           'https://nik.grupokonecta.co:7070/api/pcrc/0/articulos?from=1&size=100&orderby=update&query=Tarjetas de credito&state=1', 
           {headers: new HttpHeaders({
            'Content-Type':'application/json,charset=utf-8',
            Authorization: this.dataToken
           })}  
           )  
      
     }
    }
 
  
  