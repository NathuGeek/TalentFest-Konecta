import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  setSearchTerm(term: string) {
    this.dataService.setSearchTerm(term)
  }

  out(): void {
    if(document.getElementById('open-close').style.display='none'){document.getElementById('open-close').style.display='block'}
  }
}
