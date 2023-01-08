import {Marker} from "./marker";
import * as L from 'leaflet';

const TertiumIcon = L.icon({
  iconUrl: `assets/garlemald.png`,
  iconSize: [40,40],
  popupAnchor: [0,0],
})

export const MarkersImagesMap: Map<Marker, string> = new Map([
  [Marker.Tertium, TertiumIcon]
]);
