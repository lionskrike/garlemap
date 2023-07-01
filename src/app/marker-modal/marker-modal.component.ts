import {Component, OnInit} from '@angular/core';
import { MarkerModalConfig } from './entities/marker-modal-config';
import { MapLabel } from '../map/types/map-label';

@Component({
  selector: 'app-marker-modal',
  templateUrl: './marker-modal.component.html',
  styleUrls: ['./marker-modal.component.css']
})
export class MarkerModalComponent implements OnInit {
  marker: MapLabel = undefined;

  markerModalConfig: MarkerModalConfig;

  ngOnInit() {
    this.markerModalConfig = {
      imageUrl: 'assets/images/tertium.svg',
      text: this.marker?.text
    }
  }
}
