import {Marker} from "./marker";
import * as L from 'leaflet';

const GenericIcon = L.icon({
  iconUrl: `assets/images/marker.png`,
  iconSize: [20,20],
  popupAnchor: [0,0],
})

const TertiumIcon = L.icon({
  iconUrl: `assets/images/tertium.svg`,
  iconSize: [40,40],
  popupAnchor: [0,0],
})

export const MarkersImagesMap: Map<Marker, any> = new Map([
  [Marker.Tertium, TertiumIcon],
  [Marker.Generic, GenericIcon]
]);
