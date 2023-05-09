import { DolarService } from './../services/dolar.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dolar } from '../dolar';
import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-current-dolar',
  templateUrl: './current-dolar.component.html',
  styleUrls: ['./current-dolar.component.css']
})
export class CurrentDolarComponent implements OnInit {
  displayedColumns: string[] = ['name', 'compra', 'venta'];
  dataSource: MatTableDataSource<Dolar>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dolarService: DolarService) {
    this.dataSource = new MatTableDataSource<Dolar>([]);
    this.paginator = {} as MatPaginator;
  }
  
  ngOnInit(): void {
  this.getCurrentDolarRates();
  }
  
  getCurrentDolarRates(): void {
    this.dolarService.getCurrentDolarRates().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
  });
  }
}