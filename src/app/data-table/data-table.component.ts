import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  tableData = JSON.parse('[{"first":"Valentine","last":"Meyer","email":"valentinemeyer@scentric.com"},{"first":"Silva","last":"Alexander","email":"silvaalexander@gmail.com"},{"first":"Hopkins","last":"Wong","email":"hopkinswong@hotmail.com"},{"first":"Joe","last":"Sherman","email":"joejoe@yahoo.com"},{"first":"Jane","last":"Bartlett","email":"jane@scentric.com"}]');

  constructor() { }

  ngOnInit() {
  }

}
