import React, { useEffect, useRef, useState } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  GroundOverlay
} from "react-google-maps";
import { Dimensions } from "react-native";
import { Link, useLocation } from 'react-router-dom'
const windowWidth = Dimensions.get('window').width;
  const isMobile = (windowWidth<1280)
function Map({center,left,right,overlay,posts}) {
  let google=window.google
  const location = useLocation();
  const coordinates={lat:Number(center.split(',')[0]),lng:Number(center.split(',')[1])}

  const mapRef = useRef(null);

    let postsToShow=posts
    const loc=location.pathname.split('/')
    if(loc.length>=4){
        postsToShow=posts.filter((item)=>(item.id==loc[3] && item.type==loc[2]))
    }

      const fitBounds = () => {
        const bounds = new window.google.maps.LatLngBounds();
        postsToShow.map(item => {
          bounds.extend({ lat:Number(item.acf.coordinate.split(',')[0]), lng: Number(item.acf.coordinate.split(',')[1]) });
          
          return item.id
        });
        mapRef.current.fitBounds(bounds);
      };

      useEffect(() => {
                fitBounds();
      }, [postsToShow]);
    const [selected, setSelected] = React.useState(null);
    // if(location.pathname=="/map/"){
    // }
    // React.useEffect(()=>{
    //     if(selected){
    //         postsToShow.push(selected)
    //         singleItem=selected
    //         console.log('sdflksd;fj')
    //     }
    // })
    console.log(postsToShow)
  return (
    <>
    <GoogleMap  defaultCenter={coordinates}  ref={mapRef}
      center={coordinates}
      options={{
            minZoom:11,
            maxZoom:16,
            styles: exampleMapStyles, mapTypeControl: false,
            zoomControl: true,
            zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
            },
            scaleControl: true,
            streetViewControl: false,
            fullscreenControlOptions:{
            position: google.maps.ControlPosition.RIGHT_CENTER,
            },
        }}
    >
    
    {postsToShow.map((item,index)=>(
        <>
        
      <Marker
        key={item.id}
        position={{ lat:Number(postsToShow[index].acf.coordinate.split(',')[0]), lng: Number(postsToShow[index].acf.coordinate.split(',')[1]) }}
        defaultAnimation={google.maps.Animation.DROP}
        icon={{
              url: `/images/pin.png`,
              origin: new window.google.maps.Point(0, 0),
              scaledSize: new window.google.maps.Size(20, 35),
            }}
        onClick={() => {
          setSelected(item);
        }}
      />
        </>
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
    </>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function BigMap({center,left,right,posts}) {
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
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]
