/**
 * Created by Lv on 2016/12/29.
 */

var myChart = echarts.init(document.getElementById('main'));

option = {
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: {
            alignWithLabel: true,
            inside: true
        },
        axisLabel:{
            interval:0
        },
        data: ['09:00\n09-21', '11:12\n10-20', '08:34\n10-24', '10:23\n11-03', '09:00\n11-12', '12:30\n12-14', '13:10\n12-26', '14:12\n01-12', '15:34\n01-25', '16:23\n02-12', '17:00\n02-26', '18:30\n03-20']
    },
    yAxis: {
        type: 'value',
        scale: true,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    dataZoom: [
        {
            type: 'inside',
            show: true,
            filterMode: 'empty',
            zoomLock: true,
            xAxisIndex: [0],
            start: 25,
            end: 75
        }
    ],
    series: [
        {
            name: '高压',
            type: 'line',
            lineStyle: {
                normal: {
                    color: '#d9d9d9',
                    width:1
                }
            },
            symbol: 'circle',
            symbolSize: 13,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000',
                        fontSize: 14
                    }
                }
            },
            data: [{
                value: 115,
                itemStyle: {
                    normal: {
                        color: '#ffde30'
                    }
                }
            }, {
                value: 117,
                itemStyle: {
                    normal: {
                        color: '#ff9000'
                    }
                }
            }, {
                value: 126,
                itemStyle: {
                    normal: {
                        color: '#45c01a'
                    }
                }
            }, {
                value: 136,
                itemStyle: {
                    normal: {
                        color: '#ff3e3e'
                    }
                }
            }, {
                value: 123,
                itemStyle: {
                    normal: {
                        color: '#2782d7'
                    }
                }
            }, {
                value: 125,
                itemStyle: {
                    normal: {
                        color: '#45c01a'
                    }
                }
            }, {
                value: 115,
                itemStyle: {
                    normal: {
                        color: '#ffde30'
                    }
                }
            }, {
                value: 117,
                itemStyle: {
                    normal: {
                        color: '#ff9000'
                    }
                }
            }, {
                value: 126,
                itemStyle: {
                    normal: {
                        color: '#45c01a'
                    }
                }
            }, {
                value: 136,
                itemStyle: {
                    normal: {
                        color: '#ff3e3e'
                    }
                }
            }, {
                value: 123,
                itemStyle: {
                    normal: {
                        color: '#2782d7'
                    }
                }
            }, {
                value: 125,
                itemStyle: {
                    normal: {
                        color: '#45c01a'
                    }
                }
            }]
        },
        {
            name: '低压',
            type: 'line',
            lineStyle: {
                normal: {
                    color: '#d9d9d9',
                    width:1
                }
            },
            symbol: 'circle',
            symbolSize: 13,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000',
                        fontSize: 14
                    }
                }
            },
            data: [{
                value: 92,
                itemStyle: {
                    normal: {
                        color: '#ffde30'
                    }
                }
            }, {
                value: 84,
                itemStyle: {
                    normal: {
                        color: '#ff9000'
                    }
                }
            }, {
                value: 85,
                itemStyle: {
                    normal: {
                        color: '#45c01a'
                    }
                }
            }, {
                value: 97,
                itemStyle: {
                    normal: {
                        color: '#ff3e3e'
                    }
                }
            }, {
                value: 84,
                itemStyle: {
                    normal: {
                        color: '#2782d7'
                    }
                }
            }, {
                value: 78,
                itemStyle: {
                    normal: {
                        color: '#45c01a'
                    }
                }
            }, {
                value: 92,
                itemStyle: {
                    normal: {
                        color: '#ffde30'
                    }
                }
            }, {
                value: 84,
                itemStyle: {
                    normal: {
                        color: '#ff9000'
                    }
                }
            }, {
                value: 85,
                itemStyle: {
                    normal: {
                        color: '#45c01a'
                    }
                }
            }, {
                value: 97,
                itemStyle: {
                    normal: {
                        color: '#ff3e3e'
                    }
                }
            }, {
                value: 84,
                itemStyle: {
                    normal: {
                        color: '#2782d7'
                    }
                }
            }, {
                value: 78,
                itemStyle: {
                    normal: {
                        color: '#45c01a'
                    }
                }
            }]
        }
    ]
};
myChart.setOption(option);
