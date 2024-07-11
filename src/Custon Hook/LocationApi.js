import { useEffect, useState } from "react";

function useLocation() {
    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                    setError(null)
                    console.log(latitude)
                    console.log(longitude)
                },
                (error) => {
                    setError(error.message)
                }
            );
        } else {
            setError('geolocation is not supported by this browser');
        }
    })

    useEffect(() => {
        ; (async () => {
            if (latitude && longitude) {
                const AccessToken = `pk.1465bc571a5fc4fb36fc59e8d06616da`;
                const FetchApi = await fetch(`https://us1.locationiq.com/v1/reverse?key=${AccessToken}&lat=${latitude}&lon=${longitude}&format=json&`)
                if (FetchApi.ok) {
                    const response = await FetchApi.json()
                    setLocation(response)
                    console.log(response)
                }
                else {
                    setError("404 api bad respect")
                }
            }
        })()
    }, [latitude, longitude])

    return { location, error }
}

export default useLocation;