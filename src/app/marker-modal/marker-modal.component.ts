import {Component, Input, OnInit} from '@angular/core';
import { MarkerModalConfig } from './entities/marker-modal-config';
import { MapLabel } from '../map/types/map-label';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-marker-modal',
  templateUrl: './marker-modal.component.html',
  styleUrls: ['./marker-modal.component.css']
})
export class MarkerModalComponent implements OnInit {
  @Input() marker: MapLabel = undefined;

  markerModalConfig: MarkerModalConfig;

  constructor(public activeModal: NgbActiveModal) {
    
  }

  ngOnInit() {
    this.markerModalConfig = {
      imageUrl: 'assets/images/tertium.svg',
      text: this.marker?.text
    }
  }

  close() {
    this.activeModal.close();
  }
}
