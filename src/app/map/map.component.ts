import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import {MarkersImagesMap} from "./entities/markers-images-map";
import {MarkerPresets} from "./entities/map-markers";
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {MarkerModalComponent} from "../marker-modal/marker-modal.component";

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
    // map init
    console.log('initializing map');
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

  constructor(
    private modalService: NgbModal
  ) {
  }

  ngAfterViewInit(): void {
    this.initMap();

    this.map.on("click", event => {
      const coord = event.latlng; // get the coordinates
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

  private openModal(event) {
    const modalOptions: NgbModalOptions = {
      centered: true,
      size: 'xl',
      scrollable: true
    }

    const marker = MarkerPresets.find((marker) => {
      if(marker.coords === event.latlng) {
        return marker;
      }
    })
    const modalRef = this.modalService.open(MarkerModalComponent, modalOptions);
    modalRef.componentInstance.markerLabel = marker.label;
  }

  private initMapLabels(): void {
    MarkerPresets.forEach(label => {
      const newMarker = L.marker(label.coords, {icon: MarkersImagesMap.get(label.id)});
      newMarker.bindTooltip(label.label);
      newMarker.on('click', (event) => this.openModal(event));
      newMarker.addTo(this.startingMapMarkerGroup);
    })
  }
}
