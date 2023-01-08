import * as L from 'leaflet';
import {Marker} from "../entities/marker";

export class MapLabel {
  constructor(coords, label: string, id: Marker) {
    this.coords = coords;
    this.label = label;
    this.id = id;
  }

  coords: L.LatLng;
  label: string;
  id: Marker;
}
