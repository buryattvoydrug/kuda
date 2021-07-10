import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  GroundOverlay
} from "react-google-maps";
import { Link } from 'react-router-dom'

function Map({center,left,right,overlay,posts}) {
  console.log(posts)
  let google=window.google
  const centerNum1=Number(center.split(',')[0])
  const centerNum2=Number(center.split(',')[1])
  
  const [selected, setSelected] = React.useState(null);
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: centerNum1, lng:  centerNum2 }}
      options={{
            styles: exampleMapStyles, mapTypeControl: false,zoomControl: false,
        }}
    >
    {posts.map((item,index)=>(
      <Marker
        key={item.id}
        position={{ lat:Number(posts[index].acf.coordinate.split(',')[0]), lng: Number(posts[index].acf.coordinate.split(',')[1]) }}
        icon={{
              url: `/images/pin.png`,
              origin: new window.google.maps.Point(0, 0),
              scaledSize: new window.google.maps.Size(20, 35),
            }}
        onClick={() => {
          setSelected(item);
        }}
      />
    ))}
    
    {selected ? (
          <InfoWindow
            position={{ lat: Number(selected.acf.coordinate.split(',')[0]), lng: Number(selected.acf.coordinate.split(',')[1]) }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
          <div className="info-window">
            <img className="cafe-item__img" src={selected.acf["cafe-item-main-img"]} alt="" />
            <div className="item-info">
            <div className="prefs">
                        <div className="price">
                        { [...Array(Number(selected.acf["cafe-item-prices"]))].map((item, index) =>                       
                        <span className="active_price" key={index}><img src="/images/rub.svg" alt=""/></span>
                        ) }
                        { [...Array(5-Number(selected.acf["cafe-item-prices"]))].map((item, index) =>                       
                        <span key={index}><img src="/images/rub.svg" alt=""/></span>
                        ) }
                        </div>
                        {selected.acf["cafe-item-vegan"]? 
                        <img src="/images/vegan.svg" alt="" className="vegan-icon" />
                        : null}
                    </div>
                    <a href={'/#/map/'+selected.type+`/${selected.id}`}>
                        <h3 className="item__title">{selected.title.rendered}</h3>
                    </a>
            <div className="address">
                <img src="/images/pin.svg" alt="" className="pin" />
                <span className="address__text">{selected.acf["cafe-item-address"]}</span>
            </div>
            </div>
          </div>
          </InfoWindow>
        ) : null}
    
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function BigMap({center,left,right,posts}) {
    console.log(posts)
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapWrapped
        left={left}
        right={right}
        center={center}
        posts={posts}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=&key=AIzaSyDJtwCzTFMW8OY6bzLERX3UJdVDeujnP-k`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}





const exampleMapStyles=[
  {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "administrative.province",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.province",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#2c2c2c"
          },
          {
              "weight": "2.00"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#696969"
          }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#f6f6f6"
          },
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "weight": "0.50"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          },
          {
              "gamma": "5.45"
          },
          {
              "weight": "0.01"
          },
          {
              "lightness": "49"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#565656"
          },
          {
              "weight": "0.50"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "weight": "0.01"
          }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "weight": "0.50"
          },
          {
              "color": "#8e8e8e"
          }
      ]
  },
  {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "weight": "0.50"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#b7b7b7"
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#404040"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit.station",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#dedede"
          }
      ]
  }
]