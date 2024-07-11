import React from 'react'
import useLocation from '../Custon Hook/LocationApi'

function Location() {
    const { location, error } = useLocation()
    return (
        <div>
            {
                location && (
                    <>
                        <div>{location?.address?.town}</div>
                        <div>{location?.address?.state}</div>
                        <div>{location?.address?.country}</div>
                    </>
                )
            }
            {error && <div> {error}</div>}
        </div>
    )
}

export default Location
