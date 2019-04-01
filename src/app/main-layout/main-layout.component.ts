import { Component, OnInit } from '@angular/core';
import {HttpService} from '../app-shared';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }

    getValues(){
        this.httpService.get('values').subscribe();
    }
}
