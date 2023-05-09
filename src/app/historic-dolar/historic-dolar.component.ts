import { DolarHistory } from './../dolar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DolarService } from '../services/dolar.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { DatePipe } from '@angular/common';


interface ChartData {
  label: string;
  data: number[];
  id: number;
}

@Component({
  selector: 'app-historic-dolar',
  templateUrl: './historic-dolar.component.html',
  styleUrls: ['./historic-dolar.component.css']
})
export class HistoricDolarComponent implements OnInit {
  dolars: any[] = [];
  dolarHistory: any[] = [];
  selectedDolarId: string = '';

  displayedColumns: string[] = ['compra', 'venta', 'date'];
  dataSource: MatTableDataSource<DolarHistory>;

  lineChartData: ChartDataset[] = [];
  lineChartLabels: any;
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: any = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dolarService: DolarService) {
    this.dataSource = new MatTableDataSource<DolarHistory>([]);
    this.paginator = {} as MatPaginator;
  }
  
  ngOnInit(): void {
    this.getCurrentDolarRates();
  }

  getCurrentDolarRates(): void {
    this.dolarService.getCurrentDolarRates().subscribe((data: any) => {
      this.dolars = data as any[];
    });
  }

  getHistoricDolarRates(): void {
    this.dolarService.getHistoricDolarRates(this.selectedDolarId).subscribe((data: any) => {
      const compras: ChartData = {
        data: [],
        label: 'Compra',
        id: 0
      };
      const ventas: ChartData = {
        data: [],
        label: 'Venta',
        id: 0
      };
      const labels: (string | null)[] = [];

      data.forEach((dolarHistoric: DolarHistory) => {
        compras.data.push(dolarHistoric.compra);
        compras.label = dolarHistoric.dolar.name + ' Compra';
        compras.id = dolarHistoric.dolar_id;
        ventas.data.push(dolarHistoric.venta);
        ventas.label = dolarHistoric.dolar.name + ' Compra';
        ventas.id = dolarHistoric.dolar_id;
        const datePipe = new DatePipe('en-US');
        const formattedDate = datePipe.transform(dolarHistoric.created_at, 'HH:mm dd/MM/yyyy');
        labels.push(formattedDate);
      });
      
      this.dolarHistory = data as any[];
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      //labels.push(data.created_at);

      if (!this.lineChartData.find((chartData: any) => chartData.id === compras.id)) {
        this.lineChartData.push(compras);
        this.lineChartData.push(ventas);
        this.lineChartLabels = labels;
      }
      console.log("lineChartData:", this.lineChartData)
      console.log("lineChartLabels:", this.lineChartLabels)
    });
  }

  onSelectDolarChange(event: any): void {
    this.selectedDolarId = event.target.value;
    this.getHistoricDolarRates();
  }
}
