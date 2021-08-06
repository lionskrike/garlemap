import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;
  private markerGroup;
  private lineGroup;
  private lastMarker;
  private mapLabels;
  public pathDistance = 0;
  public coordsList;
  public coordMessage;

  private initMap(): void {
    this.map = L.map('map', {
      center: [35.843214, -81.320358],
      zoom: 17,
      scrollWheelZoom: false
    });
    this.markerGroup = L.layerGroup().addTo(this.map)
    this.lineGroup = L.layerGroup().addTo(this.map);
  }

  private drawLine(marker1, marker2){
    let coords = [];
    coords.push(marker1.getLatLng());
    coords.push(marker2.getLatLng());
    L.polyline(coords, {color: 'red'}).addTo(this.lineGroup);
  }

  private static getDistance(from: L.LatLng, to: L.LatLng) {
    // returns distance in ft (m->yd->ft)
    return from.distanceTo(to).valueOf() * 1.09361 * 3;
  }

  public clearCoordsList(): void {
    this.coordsList = [];
    this.markerGroup.clearLayers();
    this.lineGroup.clearLayers();
    this.pathDistance = 0;
    this.lastMarker = undefined;
  }

  constructor() {
    this.coordsList = [];
    this.mapLabels = [];
    this.coordMessage = "";
  }

  ngAfterViewInit(): void {
    this.initMap();
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      minZoom: 17,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.map.on("click", event => {
      const coord = event.latlng; // get the coordinates
      this.coordsList.push(coord);
      let lat = coord.lat;
      let lng = coord.lng;
      let newMarker = L.circleMarker([lat, lng], {radius: 2}).addTo(this.markerGroup);
      if(this.lastMarker !== undefined) {
        this.drawLine(newMarker, this.lastMarker);
        this.pathDistance += MapComponent.getDistance(this.coordsList[this.coordsList.length-1],this.coordsList[this.coordsList.length-2]);
      }
      this.lastMarker = newMarker;
    });
  }
}
