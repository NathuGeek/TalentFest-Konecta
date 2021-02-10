import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';

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
    this.data$ = this.dataService.data$
  }
}

