import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Nhớ import CSS cho Leaflet
import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';

const destination: LatLngTuple = [21.03805874352914, 105.78426837711922]; 

function ResizableCircle({ center, color }: { center: LatLngTuple, color: string }) {
    const map = useMap();
    const [radius, setRadius] = useState(500); 

    useEffect(() => {
        const handleZoom = () => {
            const zoomLevel = map.getZoom();
            const newRadius = Math.max(500 / (zoomLevel / 2), 100); 
            setRadius(newRadius);
        };

        map.on('zoom', handleZoom);
        handleZoom();

        return () => {
            map.off('zoom', handleZoom);
        };
    }, [map]);

    return (
        <Circle 
            center={center} 
            radius={radius} 
            pathOptions={{ color: color, fillColor: color, fillOpacity: 0.4 }} 
        />
    );
}

export default function Maps() {
    const [center, setCenter] = useState<LatLngTuple>([21.03029206227961, 105.76805458681068]); 

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCenter([latitude, longitude]); // Cập nhật tọa độ hiện tại
            },
            (error) => {
                console.error('Error getting location:', error);
            }
        );
    }, []);
    

    return (
        <MapContainer
            center={center}
            zoom={12}
            style={{
                width: '100%', 
                height: '600px'
            }}
        >
            <TileLayer
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=c9R2t7djj3ThOMuQjEWU"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <ResizableCircle center={center} color="orange" />  {/* Vòng tròn cho vị trí hiện tại */}
            <ResizableCircle center={destination} color="blue" />  {/* Vòng tròn cho điểm đến cố định */}
        </MapContainer>
    );
}
