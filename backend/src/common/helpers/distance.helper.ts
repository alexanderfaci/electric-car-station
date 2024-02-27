export class DistanceHelper {
    static calculateDistance(location1: { latitude: number, longitude: number }, location2: { latitude: number, longitude: number }): number {
        const toRad = (value: number): number => (value * Math.PI) / 180;
        const earthRadius = 6371; // Radius of the Earth in km

        const dLat = toRad(location2.latitude - location1.latitude);
        const dLon = toRad(location2.longitude - location1.longitude);

        const lat1 = toRad(location1.latitude);
        const lat2 = toRad(location2.latitude);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadius * c;
    }
}
