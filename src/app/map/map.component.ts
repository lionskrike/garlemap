import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import {environment} from "../../environments/environment";

class MapLabel {
  constructor(coords, label, side) {
    this.coords = coords;
    this.label = label;
    this.side = side;
  }

  coords: L.LatLng;
  label: string;
  side: number;
}

enum Side {
  Nato,
  Warsaw,
  Neutral
}

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
  private startingMapMarkerGroup;
  private natoIcon = L.icon({
    iconUrl: `${environment.deployUrl}assets/bluesquare.png`,
    iconSize: [8,8],
    popupAnchor: [0,0],
  });
  private warsawIcon = L.icon({
    iconUrl: `${environment.deployUrl}assets/redsquare.png`,
    iconSize: [8,8],
    popupAnchor: [0,0],
  });
  private neutralIcon = L.icon({
    iconUrl: `${environment.deployUrl}yellowsquare.png`,
    iconSize: [8,8],
    popupAnchor: [0,0],
  });
  public pathDistanceFt = 0;
  public coordsList;
  public coordMessage;



  private initMap(): void {
    this.map = L.map('map', {
      center: [35.843214, -81.320358],
      zoom: 17,
      scrollWheelZoom: true,
      zoomControl: false,
    });
    this.userMarkerGroup = L.layerGroup().addTo(this.map)
    this.lineGroup = L.layerGroup().addTo(this.map);
    this.startingMapMarkerGroup = L.layerGroup().addTo(this.map);
    this.initMapLabels();
  }

  private initMapLabels(): void {
    let mapLabels: MapLabel[] = [
      new MapLabel(new L.LatLng(35.840745290176585, -81.32055248264838), "DZ 3", Side.Nato),
      new MapLabel(new L.LatLng(35.84124139194742, -81.31957547534506),"Limberg", Side.Nato),
      new MapLabel(new L.LatLng(35.84077932297236, -81.32155179977418),"DZ 7<br>Spetznas<br>Marberg & Limberg Required", Side.Warsaw),
      new MapLabel(new L.LatLng(35.84164037603739, -81.32099390029909),"Marburg",Side.Nato),
      new MapLabel(new L.LatLng(35.843378838291194, -81.31871938705446), "Frankfurt",Side.Nato),
      new MapLabel(new L.LatLng(35.84251813856691, -81.3205647468567),"Fulda",Side.Nato),
      new MapLabel(new L.LatLng(35.84130097149907, -81.32024288177492),"Wetzlar",Side.Nato),
      new MapLabel(new L.LatLng(35.84295283656471, -81.31807565689088),"DZ 4<br>NATO Entry",Side.Nato),
      new MapLabel(new L.LatLng(35.842344258700734, -81.31989955902101),"Neuhof",Side.Nato),
      new MapLabel(new L.LatLng(35.842396422700624, -81.32492065429689),"DMZ",Side.Neutral),
      new MapLabel(new L.LatLng(35.842813733464624, -81.32340788841249),"DMZ",Side.Neutral),
      new MapLabel(new L.LatLng(35.84334406272583, -81.32187366485597),"DMZ",Side.Neutral),
      new MapLabel(new L.LatLng(35.843857000769, -81.32032871246338),"DMZ", Side.Neutral),
      new MapLabel(new L.LatLng(35.84176175837171, -81.32230281829835),"Bad Herzfeld",Side.Nato),
      new MapLabel(new L.LatLng(35.8417878405675, -81.32326841354372),"DZ 2<br>Special Forces<br>Romeo/Bad Herzfeld Required",Side.Nato,),
      new MapLabel(new L.LatLng(35.84350055264996, -81.32010340690614),"Camp Lee",Side.Nato),
      new MapLabel(new L.LatLng(35.842818737650305, -81.32188476184713), "OP Chickenhawk",Side.Nato),
      new MapLabel(new L.LatLng(35.84225301856232, -81.32444867074231),"Kassel",Side.Nato),
      new MapLabel(new L.LatLng(35.84344537562233, -81.32393374343283),"Meiningen",Side.Warsaw),
      new MapLabel(new L.LatLng(35.84374998951491, -81.32347245438473),"DZ 5",Side.Warsaw),
      new MapLabel(new L.LatLng(35.844080711845116, -81.32220659141556),"Ohrdruf",Side.Warsaw),
      new MapLabel(new L.LatLng(35.84420255656654, -81.32101582201237),"Gotha",Side.Warsaw),
      new MapLabel(new L.LatLng(35.84468123044564, -81.32008251626392),"DZ 8<br>Warsaw Entry",Side.Warsaw),
      new MapLabel(new L.LatLng(35.84364555059783, -81.32280733994331),"Suhl",Side.Warsaw),
    ]

    mapLabels.forEach(label => {
      let markerIcon = (label.side === Side.Nato) ? this.natoIcon : (label.side === Side.Warsaw) ? this.warsawIcon : this.neutralIcon;
      L.marker(label.coords, {icon: markerIcon}).bindTooltip(label.label).addTo(this.startingMapMarkerGroup);
    })
  }

  private drawLine(marker1, marker2){
    let coords = [];
    coords.push(marker1.getLatLng());
    coords.push(marker2.getLatLng());
    L.polyline(coords, {color: 'red'}).addTo(this.lineGroup);
  }

  private static getDistanceFeet(from: L.LatLng, to: L.LatLng) {
    // returns distance in ft (m->yd->ft)
    return from.distanceTo(to).valueOf() * 1.09361 * 3;
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
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 17,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.map.on("click", event => {
      const coord = event.latlng; // get the coordinates
      this.coordsList.push(coord);
      let lat = coord.lat;
      let lng = coord.lng;
      let newMarker = L.circleMarker([lat, lng], {radius: 2}).addTo(this.userMarkerGroup);
      if(this.lastMarker !== undefined) {
        this.drawLine(newMarker, this.lastMarker);
        this.pathDistanceFt += MapComponent.getDistanceFeet(this.coordsList[this.coordsList.length-1],this.coordsList[this.coordsList.length-2]);
      }
      this.lastMarker = newMarker;
    });
  }
}
