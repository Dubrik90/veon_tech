import React from 'react';
import {MapWrapper} from './style';
import {Container} from "../../../common/style/Container";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const MapComponent = () => {
    const mapState = { center: [53.905087, 27.529956], zoom: 16 };
    const coordinates = [53.905087, 27.529956];

    return (
        <MapWrapper>
            <Container>
                <YMaps>
                    <Map state={mapState}>
                        <Placemark geometry={coordinates} />
                    </Map>
                </YMaps>
            </Container>
        </MapWrapper>
    );
}

