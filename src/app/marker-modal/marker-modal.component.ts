import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-marker-modal',
  templateUrl: './marker-modal.component.html',
  styleUrls: ['./marker-modal.component.css']
})
export class MarkerModalComponent {
  @Input() markerLabel: string;
  markerModalConfig = {
    imageUrl: 'assets/images/tertium.svg',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Bibendum ut tristique et egestas. Vitae elementum curabitur vitae nunc sed velit. Turpis tincidunt id aliquet risus feugiat. Accumsan in nisl nisi scelerisque eu.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Bibendum ut tristique et egestas. Vitae elementum curabitur vitae nunc sed velit. Turpis tincidunt id aliquet risus feugiat. Accumsan in nisl nisi scelerisque eu.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ]
  }
}
