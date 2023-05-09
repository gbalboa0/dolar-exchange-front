import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentDolarComponent } from './current-dolar/current-dolar.component';
import { HistoricDolarComponent } from './historic-dolar/historic-dolar.component';


const routes: Routes = [
  { path: '', component: CurrentDolarComponent },
  { path: 'historic', component: HistoricDolarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
