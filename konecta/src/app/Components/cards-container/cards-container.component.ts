import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import Quill from 'quill';

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
    this.getDataTags()
    // this.data$ = this.dataService.data$
  }

  getDataTags(){
    this.dataService.getDataTags().subscribe((res:any) => {
      // console.log('hola', res);
      var img1 = '';
      for (var i= 0; i < res.length; i++){
        var curr = JSON.parse(res[i]["obj"]).ops;
        // console.log(curr)
        for (var m= 0; m < curr.length; m++){
          if(curr[m]['insert']['image']){
            console.log('prueba', curr[m]['insert']['image']);
            img1 = 'https://nik.grupokonecta.co:7070' + curr[m]['insert']['image'];
            res[i].firstImage = img1;
          }
        }
      } 
      console.log('fghj', res);
      this.data$ = res
      // res[0]
    })
  }

  show(element) {
    let arrData = element.obj;
    console.log(element)
    var fix_article = JSON.parse(element.obj).ops;
    for (var i = 0; i < fix_article.length; i++) {
      console.log(fix_article[i]);
      if (fix_article[i]["insert"].image) {
        fix_article[i]["insert"].image = "https://nik.grupokonecta.co:7070/" + fix_article[i]["insert"].image
      }
    }
    console.log(fix_article)

    var quill = new Quill('#contenedor', {
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

