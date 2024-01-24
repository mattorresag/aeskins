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

export const Map = ({
  locations,
  style,
  selectedLocation,
  handleSelectedLocation,
}: Props) => {
  const [mapCenter, setMapCenter] = useState({
    lat: 40.7128,
    lng: -74.006,
  });

  const handleMarkerClick = (location: Location) => {
    handleSelectedLocation(location);
    setMapCenter({ lat: location.lat, lng: location.lng });
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
          position={{ lat: location.lat, lng: location.lng }}
          icon={"/assets/icons/googlePin.svg"}
        />
      ))}
      {selectedLocation && (
        <InfoWindowF
          position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          onCloseClick={() => handleSelectedLocation(null)}
        >
          <Flex
            direction="col"
            className="bg-white rounded-sm p-6 gap-4 w-[306px]"
          >
            <p className="text-[20px] font-sans font-secondary-pure font-[500] leading-[30px]">
              {selectedLocation.nome}
            </p>
            <div className="divider h-0 m-0" />
            <Flex direction="col" className="gap-3">
              <Flex direction="col" className="gap-1">
                <p className="text-[14px] text-neutral-pure400 font-[500] leading-[17px]">
                  {selectedLocation.dias}
                </p>
                <p className="text-secondary-pure leading-[24px]">
                  {selectedLocation.horaInicio} - {selectedLocation.horaFim}
                </p>
              </Flex>
              <Flex direction="col" className="gap-1">
                <p className="text-[14px] text-neutral-pure400 font-[500] leading-[17px]">
                  Especialização
                </p>
                <p className="text-secondary-pure leading-[24px]">
                  {selectedLocation.especializacao}
                </p>
              </Flex>
              <Flex direction="col" className="gap-1">
                <p className="text-[14px] text-neutral-pure400 font-[500] leading-[17px]">
                  Endereço
                </p>
                <p className="text-secondary-pure leading-[24px]">
                  {selectedLocation.endereco}
                </p>
              </Flex>
            </Flex>
            <Flex align="center" className="pt-4 gap-3">
              <Icons.WhitePhone className="w-12 h-12" />
              <Icons.WhiteWhatsapp className="w-12 h-12" />
              <Icons.WhiteMail className="w-12 h-12" />
            </Flex>
          </Flex>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};
