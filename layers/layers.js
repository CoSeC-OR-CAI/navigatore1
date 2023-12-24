var wms_layers = [];

 var lyr_Nessuno_11 = new ol.layer.Tile({
            'title': 'Nessuno',
            'type': 'base',
            'opacity': 0.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: ''
            })
        });



 var lyr_GoogleSatellite_10 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });



        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ortofoto2019_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webgis.regione.sardegna.it/geoserverraster/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "raster:ortofoto_2019",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2019",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofoto2019_1, 0]);
var lyr_Mappa110000_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webgis.regione.sardegna.it/geoserverraster/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "raster:Mosaico_DBGT_10K_22_V02",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Carta 1:10.000",
                            opacity: 0.900000,
                            
                            
                          });
              wms_layers.push([lyr_Mappa110000_2, 0]);
var lyr_Limiticomunali_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webgis.regione.sardegna.it/geoserver/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "dbu:dbgt_10k_22_v03_09_comune",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Comuni",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Limiticomunali_3, 0]);
var lyr_Mappali_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webgis.regione.sardegna.it/geoserver/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "dbu:CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mappali",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_Mappali_4, 0]);
var lyr_Fabbricati_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webgis.regione.sardegna.it/geoserver/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "dbu:fabbricati",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fabbricati",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_Fabbricati_5, 0]);
var lyr_Strade_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webgis.regione.sardegna.it/geoserver/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "dbu:strade",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Strade",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_Strade_6, 0]);
var lyr_Fogli_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webgis.regione.sardegna.it/geoserver/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "dbu:CP.CadastralZoning",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fogli",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_Fogli_7, 0]);
var lyr_Acque_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webgis.regione.sardegna.it/geoserver/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "dbu:acque",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Acque",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_Acque_8, 0]);
var lyr_Vestizioni_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webgis.regione.sardegna.it/geoserver/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "dbu:vestizioni",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Vestizioni",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_Vestizioni_9, 0]);
var group_Catasto = new ol.layer.Group({
                                layers: [lyr_Mappali_4,lyr_Fabbricati_5,lyr_Strade_6,lyr_Fogli_7,lyr_Acque_8,lyr_Vestizioni_9,],
                                title: "Catasto"});
var group_DBGT10K2022 = new ol.layer.Group({
                                layers: [lyr_Ortofoto2019_1,lyr_Mappa110000_2,lyr_Limiticomunali_3,],
                                title: "Geoportale RAS"});
var group_Sfondo = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_10,lyr_OpenStreetMap_0,lyr_Nessuno_11],
                                title: "Sfondo"});

lyr_Nessuno_11.setVisible(false);lyr_GoogleSatellite_10.setVisible(true);lyr_OpenStreetMap_0.setVisible(false);lyr_Ortofoto2019_1.setVisible(false);lyr_Mappa110000_2.setVisible(false);lyr_Limiticomunali_3.setVisible(true);lyr_Mappali_4.setVisible(false);lyr_Fabbricati_5.setVisible(false);lyr_Strade_6.setVisible(false);lyr_Fogli_7.setVisible(true);lyr_Acque_8.setVisible(false);lyr_Vestizioni_9.setVisible(true);
var layersList = [group_Sfondo,group_DBGT10K2022,group_Catasto];
