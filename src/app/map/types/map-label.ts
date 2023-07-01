import * as L from 'leaflet';
import {Marker} from "../entities/marker";

export class MapLabel {
  constructor(coords, label: string, id: Marker, text: string[]) {
    this.coords = coords;
    this.label = label;
    this.id = id;
    this.text = text;
  }

  coords: L.LatLng;
  label: string;
  id: Marker;
  text: string[];
}
