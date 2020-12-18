import React, { useState } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Annotation,
  Marker,
} from 'react-simple-maps';

import { geoCentroid } from 'd3-geo';

import ReactTooltip from 'react-tooltip';

import BrazilTopoJson from '../../data/brazil.json';

const offsets: { [key: string]: Array<number> } = {
  DF: [100, 0],
  ES: [34, 2],
  RN: [30, -1],
  PB: [28, 2],
  PE: [35, 3],
  AL: [34, 1],
  SE: [33, 0],
  RJ: [47, 10],
};

const App = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <ReactTooltip>{content}</ReactTooltip>
      <ComposableMap
        style={{ width: 'auto', height: window.innerHeight - 153 }}
        data-tip=""
        projectionConfig={{ scale: 650 }}>
        <ZoomableGroup zoom={1} maxZoom={3} center={[-65, -15]}>
          <Geographies geography={BrazilTopoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const centroid = geoCentroid(geo);

                return (
                  <React.Fragment
                    key={geo.properties.UF_05 + '-' + geo.properties.NOME_UF}>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        setContent(`${geo.properties.NOME_UF}`);
                      }}
                      onMouseLeave={() => {
                        setContent('');
                      }}
                      style={{
                        default: {
                          fill: '#D6D6DA',
                          outline: 'none',
                          zIndex: -10,
                        },
                        hover: {
                          fill: '#F53',
                          outline: 'none',
                          zIndex: -10,
                        },
                        pressed: {
                          fill: '#E42',
                          outline: 'none',
                          zIndex: -10,
                        },
                      }}
                    />
                    {offsets[geo.properties.UF_05] ? (
                      <Annotation
                        connectorProps={{}}
                        subject={centroid}
                        dx={offsets[geo.properties.UF_05][0]}
                        dy={offsets[geo.properties.UF_05][1]}>
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {geo.properties.UF_05}
                        </text>
                      </Annotation>
                    ) : (
                      <g key={geo.rsmKey + '-name'}>
                        <Marker coordinates={centroid}>
                          <text y="2" fontSize={15} textAnchor="middle">
                            {geo.properties.UF_05}
                          </text>
                        </Marker>
                      </g>
                    )}
                  </React.Fragment>
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default App;
