import {MapLabel} from "../types/map-label";
import {Marker} from "./marker";
import * as L from 'leaflet';

const TertiumMarker = new MapLabel(new L.LatLng(704, 763), 'Tertium', Marker.Tertium);
const CampBrokenGlassMarker = new MapLabel(new L.LatLng(286, 320), 'Camp Broken Glass', Marker.Generic);
const SenateMarker = new MapLabel(new L.LatLng(830, 400), 'Senaculum Imperialis', Marker.Generic);
const VictorsSpoilsMarker = new MapLabel(new L.LatLng(425, 801), 'Victors\' Spoils', Marker.Generic);
const ForumSoliusMarker = new MapLabel(new L.LatLng(797, 716), 'Forum Solius', Marker.Generic);

export const MarkerPresets: MapLabel[] = [
  TertiumMarker,
  CampBrokenGlassMarker,
  SenateMarker,
  VictorsSpoilsMarker,
  ForumSoliusMarker
]
