import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import Quill from 'quill';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.sass']
})
export class CardsContainerComponent implements OnInit {

  @Input() Article: any;

  data$: Observable<any[]>
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data$ = this.dataService.data$.pipe(
      map((res) => {
        let image = '';
        console.log(res)
        for (let i= 0; i < res.length; i++){
          const curr = JSON.parse(res[i]["obj"] || '{}').ops || [];
          for (let m= 0; m < curr.length; m++){
            if(curr[m]['insert']['image']){
              image = 'https://nik.grupokonecta.co:7070' + curr[m]['insert']['image'];
              res[i].firstImage = image;
            }
          }
        }
      return res
      })
    )

  }

  show(element) {
    let arrData = element.obj;
    console.log(element)
    const fix_article = JSON.parse(element.obj).ops;
    for (let i = 0; i < fix_article.length; i++) {
      if (fix_article[i]["insert"].image) {
        fix_article[i]["insert"].image = "https://nik.grupokonecta.co:7070/" + fix_article[i]["insert"].image
      }
    }

    const quill = new Quill('#contenedor', {
      theme: 'bubble'
    });
    
    try{
      quill.setContents([{ insert: '\n' }]);
      quill.updateContents(fix_article);
    }
    catch(err){
    }
  }
}

