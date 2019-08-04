import React, { Component } from 'react'

import Chart from "react-apexcharts";

export default class BalanceChar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            options: {
              labels: ['Gastos', 'Ingresos', 'Deudas'],
              radialBar: {
                dataLabels: {
                    show: true,
                    name: {
                      show: true,
                      fontSize: '16px',
                      fontFamily: undefined,
                      color: undefined,
                      offsetY: 0
                    },
                    value: {
                      show: true,
                      fontSize: '14px',
                      fontFamily: undefined,
                      color: undefined,
                      offsetY: 16,
                      formatter: function (val) {
                        return val + '%s'
                      }
                    },
                    total: {
                      show: false,
                      label: 'Total',
                      color: '#373d3f',
                      formatter: function (w) {
                        return w.globals.seriesTotals.reduce((a, b) => {
                          return a + b
                        }, 0) / w.globals.series.length + '%x'
                      }
                    }
                  }                  
              },
              colors: ['#F44336', '#E91E63', '#9C27B0']
            },
            series: [50, 80, 60],
          };
      }
    
      render() {
        return (
          <div className="balance-char-container">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="radialBar"
                  width="400"
                />
              </div>
          </div>
        );
      }   
}
