import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-marker-modal',
  templateUrl: './marker-modal.component.html',
  styleUrls: ['./marker-modal.component.css']
})
export class MarkerModalComponent {
  @Input() markerLabel: string;
}
