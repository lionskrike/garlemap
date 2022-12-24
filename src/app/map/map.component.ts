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
  public coordsList = [];
  public coordMessage = "";

  private initMap(): void {
    this.map = L.map('map', {
      maxZoom: 24,
      minZoom: 1,
      crs: L.CRS.Simple
    }).setView([1024, 0], 1);
    this.map.setMaxBounds(new L.LatLngBounds([0,1024], [1024,0]));

    let imageUrl = `${environment.deployUrl}assets/images/garlemald-map.png`;
    let imageBounds = [[1024,0],[0,1024]];

    L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
