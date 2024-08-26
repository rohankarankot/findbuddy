import * as Location from 'expo-location';


// Custom function to fetch location
export const fetchLocation = async () => {
    try {
        // Request location permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return 'Permission to access location was denied'
        }

        // Get current location
        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
            mayShowUserSettingsDialog: true
        });
        return location
    } catch (error) {
        console.error(error);
        return 'An error occurred while fetching the location'
    }
};