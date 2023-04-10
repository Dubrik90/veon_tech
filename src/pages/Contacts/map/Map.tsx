import React from 'react';
import {MapWrapper} from './style';
import {Container} from "../../../common/style/Container";
// @ts-ignore
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({text}: any) => <div>{text}</div>;

export const Map = () => {


    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    }

    return (
        <MapWrapper>
            <Container>
                <div style={{height: '300px', width: '300px'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: ""}}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </Container>

        </MapWrapper>
    );
}

