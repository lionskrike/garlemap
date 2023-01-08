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
  private neutralIcon = L.icon({
    iconUrl: `${environment.deployUrl}assets/yellowsquare.png`,
    iconSize: [8,8],
    popupAnchor: [0,0],
  });

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

    this.map.on("click", event => {
      const coord = event.latlng; // get the coordinates
      console.log(coord);
      this.coordMessage = "Lat: " + coord.lat + ". Long: " + coord.lng;

      // this.coordsList.push(coord);
      // let lat = coord.lat;
      // let lng = coord.lng;
      // let newMarker = L.circleMarker([lat, lng], {radius: 2}).addTo(this.userMarkerGroup);
      // if(this.lastMarker !== undefined) {
      //   this.drawLine(newMarker, this.lastMarker);
      //   this.pathDistanceFt += MapComponent.getDistanceFeet(this.coordsList[this.coordsList.length-1],this.coordsList[this.coordsList.length-2]);
      // }
      // this.lastMarker = newMarker;
    });
  }

  private initMapLabels(): void {
    let mapLabels: MapLabel[] = [
      new MapLabel(new L.LatLng(35.840745290176585, -81.32055248264838), "DZ 3", Side.Nato),
    ]

    mapLabels.forEach(label => {
      let markerIcon = this.neutralIcon;
      L.marker(label.coords, {icon: markerIcon}).bindTooltip(label.label).addTo(this.startingMapMarkerGroup);
    })
  }
}
