import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../../utils/envs";
import { Flex } from "../Flex/Flex";
import Icons from "../../../public/assets/icons";
import { Location } from "../../utils/types";
import Link from "next/link";
import _ from "lodash";

interface Props {
  locations: Location[];
  style: React.CSSProperties;
  selectedLocation: Location | null;
  handleSelectedLocation: (location: Location | null) => void;
}

const customMapStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

const Map = ({
  locations,
  style,
  selectedLocation,
  handleSelectedLocation,
}: Props) => {
  const [mapCenter, setMapCenter] = useState({
    lat: -23.5489,
    lng: -46.6388,
  });

  const handleMarkerClick = (location: Location) => {
    handleSelectedLocation(location);
    setMapCenter({ lat: Number(location.lat), lng: Number(location.lng) });
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries: ["places"],
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={style} // Full height style
      center={mapCenter}
      zoom={5}
      options={{ styles: customMapStyles }}
    >
      {locations.map((location) => (
        <MarkerF
          onClick={() => handleMarkerClick(location)}
          key={location.id}
          position={{ lat: Number(location.lat), lng: Number(location.lng) }}
          icon={"/assets/icons/googlePin.svg"}
        />
      ))}
      {selectedLocation && (
        <InfoWindowF
          position={{
            lat: Number(selectedLocation.lat),
            lng: Number(selectedLocation.lng),
          }}
          onCloseClick={() => handleSelectedLocation(null)}
        >
          <Flex
            direction="col"
            className="bg-white rounded-sm p-6 gap-4 w-[306px]"
          >
            <p className="text-[20px] font-sans font-secondary-pure font-[500] leading-[30px]">
              {selectedLocation.name}
            </p>
            <div className="divider h-0 m-0" />
            <Flex direction="col" className="gap-3">
              <Flex direction="col" className="gap-1">
                <p className="text-[14px] text-neutral-pure400 font-[500] leading-[17px]">
                  {selectedLocation.days}
                </p>
                <p className="text-secondary-pure leading-[24px]">
                  {selectedLocation.start_time} - {selectedLocation.end_time}
                </p>
              </Flex>
              <Flex direction="col" className="gap-1">
                <p className="text-[14px] text-neutral-pure400 font-[500] leading-[17px]">
                  Especialização
                </p>
                <p className="text-secondary-pure leading-[24px]">
                  {selectedLocation.specialization}
                </p>
              </Flex>
              <Flex direction="col" className="gap-1">
                <p className="text-[14px] text-neutral-pure400 font-[500] leading-[17px]">
                  Endereço
                </p>
                <p className="text-secondary-pure leading-[24px]">
                  {selectedLocation.address}
                </p>
              </Flex>
            </Flex>
            <Flex align="center" className="pt-4 gap-3">
              <Link href={`tel:+55${selectedLocation.phone}`} passHref>
                <a className="cursor-pointer">
                  <Icons.WhitePhone className="w-12 h-12" />
                </a>
              </Link>
              <Link
                href={`https://wa.me/55${selectedLocation.phone}?text=Olá!`}
                passHref
              >
                <a target="_blank" className="cursor-pointer">
                  <Icons.WhiteWhatsapp className="w-12 h-12" />
                </a>
              </Link>

            </Flex>
          </Flex>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export const MapMemoized = React.memo(Map, (prevProps, nextProps) => {
  // This function should return true if passing nextProps to render would return
  // the same result as passing prevProps, otherwise return false
  return _.isEqual(prevProps.locations, nextProps.locations) &&
    _.isEqual(prevProps.selectedLocation, nextProps.selectedLocation);
});