import {Marker} from "./marker";
import * as L from 'leaflet';
import {environment} from "../../../environments/environment";

const TertiumIcon = L.icon({
  iconUrl: `${environment.deployUrl}assets/images/tertium.svg`,
  iconSize: [40,40],
  popupAnchor: [0,0],
})

export const MarkersImagesMap: Map<Marker, string> = new Map([
  [Marker.Tertium, TertiumIcon]
]);
