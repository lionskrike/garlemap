import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  private map;
  private userMarkerGroup;
  private lineGroup;
  private lastMarker;
  public pathDistanceFt = 0;
  public coordsList;
  public coordMessage;



  private initMap(): void {
    this.map = L.map('map', {
      maxZoom: 24,
      minZoom: 1,
      crs: L.CRS.Simple
    }).setView([0, 0], 1);
    this.map.setMaxBounds(new L.LatLngBounds([0,512], [512,0]));

    let imageUrl = `${environment.deployUrl}assets/images/garlemald-map.png`;
    let imageBounds = [[512,0],[0,512]];

    L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
  }

  public clearCoordsList(): void {
    this.coordsList = [];
    this.userMarkerGroup.clearLayers();
    this.lineGroup.clearLayers();
    this.pathDistanceFt = 0;
    this.lastMarker = undefined;
  }

  constructor() {
    this.coordsList = [];
    this.coordMessage = "";
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
