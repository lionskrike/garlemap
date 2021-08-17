(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Robin\WebstormProjects\leaflet-map\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.component */ "cNoH");



class AppComponent {
    constructor() {
        this.title = 'leaflet-map';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map");
    } }, directives: [_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "cNoH");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);



class MapLabel {
    constructor(coords, label, side) {
        this.coords = coords;
        this.label = label;
        this.side = side;
    }
}
var Side;
(function (Side) {
    Side[Side["Nato"] = 0] = "Nato";
    Side[Side["Warsaw"] = 1] = "Warsaw";
    Side[Side["Neutral"] = 2] = "Neutral";
})(Side || (Side = {}));
class MapComponent {
    constructor() {
        this.natoIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
            iconUrl: '../../assets/bluesquare.png',
            iconSize: [8, 8],
            popupAnchor: [0, 0],
        });
        this.warsawIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
            iconUrl: '../../assets/redsquare.png',
            iconSize: [8, 8],
            popupAnchor: [0, 0],
        });
        this.neutralIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
            iconUrl: '../../assets/yellowsquare.png',
            iconSize: [8, 8],
            popupAnchor: [0, 0],
        });
        this.pathDistanceFt = 0;
        this.coordsList = [];
        this.coordMessage = "";
    }
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
            center: [35.843214, -81.320358],
            zoom: 17,
            scrollWheelZoom: true,
            zoomControl: false,
        });
        this.userMarkerGroup = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(this.map);
        this.lineGroup = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(this.map);
        this.startingMapMarkerGroup = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(this.map);
        this.initMapLabels();
    }
    initMapLabels() {
        let mapLabels = [
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.840745290176585, -81.32055248264838), "DZ 3", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84124139194742, -81.31957547534506), "Limberg", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84077932297236, -81.32155179977418), "DZ 7<br>Spetznas<br>Marberg & Limberg Required", Side.Warsaw),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84164037603739, -81.32099390029909), "Marburg", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.843378838291194, -81.31871938705446), "Frankfurt", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84251813856691, -81.3205647468567), "Fulda", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84130097149907, -81.32024288177492), "Wetzlar", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84295283656471, -81.31807565689088), "DZ 4<br>NATO Entry", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.842344258700734, -81.31989955902101), "Neuhof", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.842396422700624, -81.32492065429689), "DMZ", Side.Neutral),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.842813733464624, -81.32340788841249), "DMZ", Side.Neutral),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84334406272583, -81.32187366485597), "DMZ", Side.Neutral),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.843857000769, -81.32032871246338), "DMZ", Side.Neutral),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84176175837171, -81.32230281829835), "Bad Herzfeld", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.8417878405675, -81.32326841354372), "DZ 2<br>Special Forces<br>Romeo/Bad Herzfeld Required", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84350055264996, -81.32010340690614), "Camp Lee", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.842818737650305, -81.32188476184713), "OP Chickenhawk", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84225301856232, -81.32444867074231), "Kassel", Side.Nato),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84344537562233, -81.32393374343283), "Meiningen", Side.Warsaw),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84374998951491, -81.32347245438473), "DZ 5", Side.Warsaw),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.844080711845116, -81.32220659141556), "Ohrdruf", Side.Warsaw),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84420255656654, -81.32101582201237), "Gotha", Side.Warsaw),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84468123044564, -81.32008251626392), "DZ 8<br>Warsaw Entry", Side.Warsaw),
            new MapLabel(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](35.84364555059783, -81.32280733994331), "Suhl", Side.Warsaw),
        ];
        mapLabels.forEach(label => {
            let markerIcon = (label.side === Side.Nato) ? this.natoIcon : (label.side === Side.Warsaw) ? this.warsawIcon : this.neutralIcon;
            leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"](label.coords, { icon: markerIcon }).bindTooltip(label.label).addTo(this.startingMapMarkerGroup);
        });
    }
    drawLine(marker1, marker2) {
        let coords = [];
        coords.push(marker1.getLatLng());
        coords.push(marker2.getLatLng());
        leaflet__WEBPACK_IMPORTED_MODULE_1__["polyline"](coords, { color: 'red' }).addTo(this.lineGroup);
    }
    static getDistanceFeet(from, to) {
        // returns distance in ft (m->yd->ft)
        return from.distanceTo(to).valueOf() * 1.09361 * 3;
    }
    clearCoordsList() {
        this.coordsList = [];
        this.userMarkerGroup.clearLayers();
        this.lineGroup.clearLayers();
        this.pathDistanceFt = 0;
        this.lastMarker = undefined;
    }
    ngAfterViewInit() {
        this.initMap();
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
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
            let newMarker = leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"]([lat, lng], { radius: 2 }).addTo(this.userMarkerGroup);
            if (this.lastMarker !== undefined) {
                this.drawLine(newMarker, this.lastMarker);
                this.pathDistanceFt += MapComponent.getDistanceFeet(this.coordsList[this.coordsList.length - 1], this.coordsList[this.coordsList.length - 2]);
            }
            this.lastMarker = newMarker;
        });
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 8, vars: 1, consts: [[1, "map-container"], [1, "map-frame"], ["id", "map"], [3, "click"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_button_click_6_listener() { return ctx.clearCoordsList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clear List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Distance (ft): ", ctx.pathDistanceFt, "");
    } }, styles: [".map-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: 30px;\r\n  height: 75%;\r\n  width: 95%;\r\n}\r\n\r\n.map-frame[_ngcontent-%COMP%] {\r\n  border: 2px solid black;\r\n  height: 100%;\r\n}\r\n\r\n#map[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IDMwcHg7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLm1hcC1mcmFtZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jbWFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map