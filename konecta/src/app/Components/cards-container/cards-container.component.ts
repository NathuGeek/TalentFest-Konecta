import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.sass']
})
export class CardsContainerComponent implements OnInit {

  @Input() Article: any;

    data : any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getDataId()
  }
  getDataId() {
    this.dataService.getDataId().subscribe((res: any) => {
      return this.data = res;
    })
  }
}

