"use client";

import { useEffect } from "react";
import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function FitToPath({ path }: { path: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(path, { padding: [16, 16] });
  }, [map, path]);
  return null;
}

export function RouteMapView({
  path,
  height,
  startLabel = "Start",
  finishLabel = "Finish",
}: {
  path: [number, number][];
  height: number | string;
  startLabel?: string;
  finishLabel?: string;
}) {
  const start = path[0];
  const finish = path[path.length - 1];

  return (
    <MapContainer
      center={start}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={path} pathOptions={{ color: "#dc2626", weight: 4 }} />
      <CircleMarker
        center={start}
        radius={7}
        pathOptions={{ color: "#fff", weight: 2, fillColor: "#2f9e44", fillOpacity: 1 }}
      >
        <Tooltip direction="top">{startLabel}</Tooltip>
      </CircleMarker>
      <CircleMarker
        center={finish}
        radius={7}
        pathOptions={{ color: "#fff", weight: 2, fillColor: "#f2d024", fillOpacity: 1 }}
      >
        <Tooltip direction="top">{finishLabel}</Tooltip>
      </CircleMarker>
      <FitToPath path={path} />
    </MapContainer>
  );
}
