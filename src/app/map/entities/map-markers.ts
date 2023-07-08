import {MapLabel} from "../types/map-label";
import {Marker} from "./marker";
import * as L from 'leaflet';

const markerText = {
  generic: [
    'Placeholder text.',
    'Placeholder text.',
    'Placeholder text.'
  ],
  tertium: [
    'The third station along the rail network which serves the capital.  Equipped as a dispatch yard with generators and other facilities, it was taken over and fortified by the remnants of the Ist Legion during the civil war who used it as a shelter for civilians.',
    'Currently serves as the headquarters of the Tertium Vigiles Urbani.'
  ],
  brokenGlass: [
    'Originally known as Laterum, this village served two purposes: a checkpoint to any travellers arriving in the capital and a place that housed Juturna Platform G workers along with their families.',
    'Currently serves as the main camp of the Eorzean Continent.'
  ],
  senate: [
    'The former home of the Imperial Senate.'
  ],
  victorsSpoils: [
    'Former boarding home for military veterans.',
    'These buildings survived the civil war intact, although currently stand vacant given difficulties with supply and heating.'
  ],
  forumSolius: [
    'A park in Garlemald proper dedicated to the former Emperor Solus.',
    'Though it once featured heated pools to allow children to play in the water safely, the requisite infrastructure is no more.'
  ],
  jullusHouse: [
    'The former residence of Jullus pyr Norbanus and his family.'
  ],
  juturnaPlatformG: [
    'Part of the ceruleum extraction infrastructure together with Monitoring Station G, the platform was partially restored to operation, renewing flow of refined ceruleum to the capital.',
    'Inhabited, among others, by one Calavius lux Atavist, a Pureblood communications specialist and his Hrothgar friend and colleague, Halatius jen Arvina.'
  ],
  palatiumNovum: [
    'Once a pair of buildings, the eastern tower collapsed during the civil war. Houses a secret underground tunnel which reaches the bunkers under the Senaculum Imperialis.',
    'A radio transmitter installed on the top of the surviving building by the Tertium Vigiles Urbani provides a wide area radio coverage to any friendly forces over much of the Regios.'
  ],
  liminalStationIV: [
    'The elevated waiting lounge has been converted into an observation post or a temporary military shelter by the Eorzean troops, although it stands empty most of the time given reduction of threats.'
  ],
  auxiliaryRadioReceiver: [
    'Installed on the mountain peak in the relative the proximity of Camp Broken Glass, this radio receiver under Tertium Vigiles Urbani control boosts radio signal coverage over the Eblan Rime and the Cerulea Ingens.'
  ],
  tappersDen: [
    'A cave originally inhabited by the surviving crew of the Juturna Station G ceruleum rig who called themselves \"the tappers\", it serves as an auxiliary source of fuel.'
  ],
  enceladeum: [
    'Part of large industrial complex, currently in ruins, although subterranean infrastructure is still in good repair.',
    'There is a subway route in the bowels of the Enceladeum that leads directly into the Palace.'
  ],
  forumPatens: [
    'An Alliance-controlled supply dump garrisoned by the soldiers of the Ist legion.'
  ],
  runawayTrain: [
    'A Mark XLIX passenger train was forced off the tracks by tempered soldiers as it attempted to flee the capital, followed by a brief, but vicious battle. The train\'s bulk was left to rust in the ice and snow, although the Vigiles Urbani recovered the locomotive\'s engine to furnish the generators in Tertium with much-needed spares.'
  ]
};

const TertiumMarker = new MapLabel(new L.LatLng(704, 763), 'Tertium', Marker.Tertium, markerText.tertium);
const CampBrokenGlassMarker = new MapLabel(new L.LatLng(286, 320), 'Camp Broken Glass', Marker.Generic, markerText.brokenGlass);
const SenateMarker = new MapLabel(new L.LatLng(830, 400), 'Senaculum Imperialis', Marker.Generic, markerText.senate);
const VictorsSpoilsMarker = new MapLabel(new L.LatLng(425, 801), 'Victors\' Spoils', Marker.Generic, markerText.victorsSpoils);
const ForumSoliusMarker = new MapLabel(new L.LatLng(797, 716), 'Forum Solius', Marker.Generic, markerText.forumSolius);
const JullusHouse = new MapLabel(new L.LatLng(639.5, 648), 'Jullus\'s House', Marker.Generic, markerText.jullusHouse);
const JuturnaPlatformG = new MapLabel(new L.LatLng(221.5, 718), 'Juturna Platform G', Marker.Generic, markerText.juturnaPlatformG);
const PalatiumNovum = new MapLabel(new L.LatLng(731.25, 552), 'Palatium Novum', Marker.Generic, markerText.palatiumNovum);
const LiminalStationIV = new MapLabel(new L.LatLng(462, 551.5), 'Liminal Station IV', Marker.Generic, markerText.liminalStationIV);
const AuxiliaryRadioReceiver = new MapLabel(new L.LatLng(128, 376.5), 'Auxiliary Radio Receiver', Marker.Generic, markerText.auxiliaryRadioReceiver);
const TappersDen = new MapLabel(new L.LatLng(186.2, 574.4), 'Tapper\'s Den', Marker.Generic, markerText.tappersDen);
const Enceladeum = new MapLabel(new L.LatLng(840.25, 250.375), 'The Enceladeum', Marker.Generic, markerText.enceladeum);
const ForumPatens = new MapLabel(new L.LatLng(683, 283.5), 'Forum Patens', Marker.Generic, markerText.forumPatens);
const RunawayTrain = new MapLabel(new L.LatLng(474.5, 668), 'Runaway Train', Marker.Generic, markerText.runawayTrain);

export const MarkerPresets: MapLabel[] = [
  TertiumMarker,
  CampBrokenGlassMarker,
  SenateMarker,
  VictorsSpoilsMarker,
  ForumSoliusMarker,
  JullusHouse,
  JuturnaPlatformG,
  PalatiumNovum,
  LiminalStationIV,
  AuxiliaryRadioReceiver,
  TappersDen,
  Enceladeum,
  ForumPatens,
  RunawayTrain
]
