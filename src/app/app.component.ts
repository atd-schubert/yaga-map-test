import { Component } from '@angular/core';
import { YagaModule, OSM_TILE_LAYER_URL }   from '@yaga/leaflet-ng2';

@Component({
  selector: 'app-root',
    template: `<yaga-map><yaga-tile-layer [(url)]="tileLayerUrl"></yaga-tile-layer></yaga-map>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public tileLayerUrl: string = OSM_TILE_LAYER_URL;
  title = 'app';
}
