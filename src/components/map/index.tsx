import React, { useState } from 'react';
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';

import { geoCentroid } from 'd3-geo';

import { Tooltip as ReactTooltip } from 'react-tooltip';

import BrazilTopoJson from '../../data/brazil.json';
import result from '../../data/result';

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

export function Map() {
  const [content, setContent] = useState('');

  return (
    <div>
      <ReactTooltip anchorSelect=".anchor" place='top' content={content}/>
      <ComposableMap
        className='anchor'
        style={{
          width: window.innerWidth,
          height: window.innerHeight - 153,
        }}
        projectionConfig={{ scale: 650 }}>
        <ZoomableGroup zoom={1} maxZoom={3} center={[-65, -15]}>
          <Geographies geography={BrazilTopoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const geoCode = JSON.parse(
                  JSON.stringify(geo.properties.UF_05)
                );
                const geoName = geo.properties.NOME_UF;

                return (
                  <React.Fragment key={geoCode + '-' + geoName}>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        setContent(
                          `${geoName}: ${result[geoCode].partido} ${
                            result[geoCode].partido === 'PT'
                              ? 'Haddad'
                              : 'Bolsonaro'
                          } - ${
                            result[geoCode].percentage === 1
                              ? '50-63%'
                              : result[geoCode].percentage === 2
                              ? '63-76%'
                              : '76-90%'
                          }`
                        );
                      }}
                      onMouseLeave={() => {
                        setContent('');
                      }}
                      style={{
                        default: {
                          fill:
                            result.colors[result[geoCode].partido][
                              result[geoCode].percentage - 1
                            ],
                          outline: 'none',
                        },
                        hover: {
                          fill:
                            result.colors[result[geoCode].partido][
                              result[geoCode].percentage - 1
                            ],
                          outline: 'none',
                        },
                        pressed: {
                          fill:
                            result.colors[result[geoCode].partido][
                              result[geoCode].percentage - 1
                            ],
                          outline: 'none',
                        },
                      }}
                    />
                    {offsets[geoCode] ? (
                      <Annotation
                        connectorProps={{}}
                        subject={centroid}
                        dx={offsets[geoCode][0]}
                        dy={offsets[geoCode][1]}>
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {geoCode}
                        </text>
                      </Annotation>
                    ) : (
                      <g key={geo.rsmKey + '-name'}>
                        <Marker coordinates={centroid}>
                          <text y="2" fontSize={15} textAnchor="middle">
                            {geoCode}
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