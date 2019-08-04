import React, { Component } from 'react'

import Chart from "react-apexcharts";

export default class BalanceChar extends Component {
    
    constructor(props) {
        super(props);
        let total = 50+ 80+ 60
        this.state = {
            options: {
              labels: ['Gastos', 'Ingresos', 'Deudas'],
            //   colors: ['#F44336', '#E91E63', '#9C27B0'],
              plotOptions: {
                radialBar: {
                    dataLabels: {
                        show: true,
                        name: {
                          show: true,
                          fontSize: '25px',
                          fontFamily: 'Roboto',
                          color: undefined,
                          offsetY: 0
                        },
                        value: {
                          show: true,
                          fontSize: '20px',
                          fontFamily: 'Roboto',
                          color: undefined,
                          offsetY: 16,
                          formatter: function (val) {
                            val = Math.round(val*total*10);
                            let v =  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            return '$'+v
                          }
                        },
                        total: {
                          show: false,
                          label: 'Total',
                          color: '#373d3f',
                          formatter: function (w) {
                            return  249
                          }
                        }
                    }
                }
              }
            },
            series: [5000/total, 8000/total, 6000/total],
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
