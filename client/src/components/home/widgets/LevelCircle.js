import React from 'react'

import { Component } from 'react'
import Chart from "react-apexcharts";

export default class LevelCircle extends Component {
    constructor(props) {
        super(props);

        this.state = {
          options: {
            colors: ['#1f63ec', '#fff600', '#9C27B0'],
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                  margin: 0,
                  size: '70%',
                  background: '#fff',
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                  }
                },
                track: {
                  background: '#fff',
                  strokeWidth: '67%',
                  margin: 0, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                  }
                },

                dataLabels: {
                  name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '17px'
                  },
                  value: {  
                    formatter: function (val) {
                      return (parseInt(val)+"%");
                    },
                    color: '#111',
                    fontSize: '36px',
                    show: true,
                  }
                }
              }
            },
            // fill: {
            //   type: 'gradient',
            //   gradient: {
            //     shade: 'dark',
            //     type: 'horizontal',
            //     shadeIntensity: 0.5,
            //     gradientToColors: ['#ABE5A1'],
            //     inverseColors: true,
            //     opacityFrom: 1,
            //     opacityTo: 1,
            //     stops: [0, 100]
            //   }
            // },
            stroke: {
              lineCap: 'round'
            },
            labels: ['Nivel azul','Nivel amarillo'],
          },
          series: [100,40],
        }
    }
    render() {
        return (
            <div className="level-container-main">
                <span className="title-home"><b>Mi nivel</b></span>
                <div className="level-circle">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="radialBar"
                  width="300"
                />
              </div>
            </div>
        )
    }
}   
