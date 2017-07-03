import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeatmapPage } from './heatmap';

@NgModule({
  declarations: [
    HeatmapPage,
  ],
  imports: [
    IonicPageModule.forChild(HeatmapPage),
  ],
  exports: [
    HeatmapPage
  ]
})
export class HeatmapPageModule {}
