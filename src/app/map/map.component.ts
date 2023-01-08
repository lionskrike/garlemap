import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Marker } from "./entities/marker";
import { MapLabel } from "./types/map-label";
import {MarkersImagesMap} from "./entities/markers-images-map";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  private map;
  public coordsList = [];
  public coordMessage = "";
  private startingMapMarkerGroup;

  private initMap(): void {
    // map
    this.map = L.map('map', {
      maxZoom: 24,
      minZoom: 1,
      crs: L.CRS.Simple
    }).setView([1024, 0], 1);
    this.map.setMaxBounds(new L.LatLngBounds([0,1024], [1024,0]));
    let imageUrl = `assets/images/garlemald-map.png`;
    let imageBounds = [[1024,0],[0,1024]];
    L.imageOverlay(imageUrl, imageBounds).addTo(this.map);

    // marker init
    this.startingMapMarkerGroup = L.layerGroup().addTo(this.map);
    this.initMapLabels();
  }

  constructor() {
    console.log('constructed');
  }

  ngAfterViewInit(): void {
    console.log('init map');
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
      new MapLabel(new L.LatLng(704, 763), 'Tertium', Marker.Tertium),
    ]

    mapLabels.forEach(label => {
      const newLabel = L.marker(label.coords, {icon: MarkersImagesMap.get(label.id)});
      newLabel.bindTooltip(label.label);
      newLabel.addTo(this.startingMapMarkerGroup);
      console.log(newLabel);
    })
  }
}
