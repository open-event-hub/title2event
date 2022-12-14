(function($) {
  "use strict"; // Start of use strict

  var charts = [];
  var chart = echarts.init(document.getElementById('chart_ques_type'), 'macarons', {renderer: 'svg'});
  var option = {
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "Verify",
                    "value": 12.33
                },
                {
                    "name": "SelectAmong",
                    "value": 4.55
                },
                {
                    "name": "SelectBetween",
                    "value": 13.95
                },
                {
                    "name": "QueryName",
                    "value": 11.96
                },
                {
                    "name": "Count",
                    "value": 11.52
                },
                {
                    "name": "Relation",
                    "value": 14.79
                },
                {
                    "name": "QueryAttribute",
                    "value": 12.05
                },
                {
                    "name": "QualifierLiteral",
                    "value": 10.26
                },
                {
                    "name": "QualifierRelational",
                    "value": 8.58
                }
            ],
            "radius": "60%",
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": 17,
                "formatter": "{b}: {c}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "Verify",
                "SelectAmong",
                "SelectBetween",
                "QueryName",
                "Count",
                "Relation",
                "QueryAttribute",
                "QualifierLiteral",
                "QualifierRelational"
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "formatter": "{b}: {c}%",
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "text": "Question Types",
            "left": "center",
            "top": "0",
            "textStyle": {
                "color": "#000",
                "fontSize": 25
            }
        }
    ]
  };
  chart.setOption(option);
  charts.push(chart);



    var chart = echarts.init(document.getElementById('chart_hop'), 'macarons', {renderer: 'svg'});
  var option = {
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "1-Hop",
                    "value": 26.3
                },
                {
                    "name": "2-Hop",
                    "value": 23.8
                },
                {
                    "name": "3-Hop",
                    "value": 38.8
                },
                {
                    "name": "4-Hop",
                    "value": 6.5
                },
                {
                    "name": ">=5",
                    "value": 4.7
                },
            ],
            "radius": "60%",
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": 17,
                "formatter": "{b}: {c}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "multi-hop",
                "single-hop",
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "formatter": "{b}: {c}%",
        "textStyle": {
            "fontSize": 17
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "text": "Question Hops",
            "left": "center",
            "top": "0",
            "textStyle": {
                "color": "#000",
                "fontSize": 25
            }
        }
    ]
  };
  chart.setOption(option);
  charts.push(chart);


    var chart = echarts.init(document.getElementById('chart_program_len'), 'macarons', {renderer: 'svg'});
    option = {
    "series": [
        {
            "type": "bar",
            "legendHoverLink": true,
            "data": [5.40, 21.87, 28.42, 12.15, 15.68, 4.71, 7.76, 2.76, 1.24],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "fontSize": 15,
                "formatter": "{c}%"
            }
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 17
        },
        "formatter": "length is {b}:<br>{c}%",
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "name": "Program Length",
            "nameTextStyle": {
                "fontSize": 20,
            },
            "nameLocation": "middle",
            "nameGap": 30,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "rotate": 0,
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": ["2", "3", "4", "5", "6", "7", "8", "9", ">=10"]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "name": "ratio(%)",
            "nameTextStyle": {
                "fontSize": 20,
            },
            "nameLocation": "middle",
            "nameGap": 30,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "text": "Distribution of Program Length",
            "left": "center",
            "top": "0",
            "textStyle": {
                "color": "#000",
                "fontSize": 25
            }
        }
    ]
    };
    chart.setOption(option);
    charts.push(chart);



    chart = echarts.init(document.getElementById('chart_answer'), 'purple-passion', {renderer: 'svg'});
    option = {
    "series": [
        {
            "type": "bar",
            "legendHoverLink": true,
            "data": [
                6.84,
                5.49,
                2.45,
                2.28,
                2.2,
                1.57,
                1.54,
                1.35,
                0.97,
                0.85,
                0.82,
                0.66,
                0.61,
                0.55,
                0.5,
                0.49,
                0.47,
                0.46,
                0.44,
                0.43
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "formatter": "{c}%"
            }
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 17
        },
        "formatter": "{b}:<br>{c}%",
        "borderWidth": 0,
        "padding": 5,
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "rotate": -20,
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "yes",
                "no",
                "0",
                "1",
                "2",
                "English",
                "Germany",
                "cast member",
                "occupation",
                "country",
                "3",
                "genre",
                "famous people",
                "4",
                "place of birth",
                "United States of America",
                "country of citizenship",
                "shares border with",
                "award received",
                "5"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "name": "ratio(%)",
            "nameTextStyle": {
                "fontSize": 15,
            },
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "text": "Top 20 Most Frequent Answers",
            "left": "center",
            "top": "0",
            "padding": 5,
            "itemGap": 10,
            "textStyle": {
                "color": "#9b8bba",
                "fontSize": 25
            }
        }
    ]
    };
    chart.setOption(option);
    charts.push(chart);



    chart = echarts.init(document.getElementById('chart_predicate'), 'purple-passion', {renderer: 'svg'});
    option = {
    "series": [
        {
            "type": "bar",
            "legendHoverLink": true,
            "data": [
                7.37,
                6.18,
                4.35,
                4.20,
                3.33,
                3.17,
                3.03,
                2.92,
                2.84,
                2.25
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "formatter": "{c}%"
            },
            "itemStyle": {
                "color": "#8fd3e8",
            }
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 17
        },
        "formatter": "{b}:<br>{c}%",
        "borderWidth": 0,
        "padding": 5,
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "rotate": -20,
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "cast member",
                "nominated for",
                "award received",
                "member of sports team",
                "located in the administrative territorial entity",
                "shares border with",
                "country",
                "place of birth",
                "genre",
                "educated at",
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "name": "ratio(%)",
            "nameTextStyle": {
                "fontSize": 15,
            },
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "text": "Top Relations",
            "left": "center",
            "top": "0",
            "padding": 5,
            "itemGap": 10,
            "textStyle": {
                "color": "#8fd3e8",
                "fontSize": 25
            }
        }
    ]
    };
    chart.setOption(option);
    charts.push(chart);



    chart = echarts.init(document.getElementById('chart_attribute'), 'purple-passion', {renderer: 'svg'});
    option = {
    "series": [
        {
            "type": "bar",
            "legendHoverLink": true,
            "data": [
                9.07,
                7.86,
                7.02,
                5.96,
                5.69,
                5.41,
                4.59,
                3.90,
                3.51,
                2.99
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "formatter": "{c}%"
            },
            "itemStyle": {
                "color": "#cc70af",
            }
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 17
        },
        "formatter": "{b}:<br>{c}%",
        "borderWidth": 0,
        "padding": 5,
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "rotate": -20,
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "official website",
                "population",
                "duration",
                "publication date",
                "area",
                "ISNI",
                "inception",
                "date of birth",
                "title",
                "Twitter username",
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "name": "ratio(%)",
            "nameTextStyle": {
                "fontSize": 15,
            },
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "text": "Top Attributes",
            "left": "center",
            "top": "0",
            "padding": 5,
            "itemGap": 10,
            "textStyle": {
                "color": "#cc70af",
                "fontSize": 25
            }
        }
    ]
    };
    chart.setOption(option);
    charts.push(chart);



    chart = echarts.init(document.getElementById('chart_sunburst'), 'macarons', {renderer: 'svg'});
    option = {
    "animation": true,
    "color": [
        "#2ec7c9",
        "#b6a2de",
        "#5ab1ef",
        "#ffb980",
        "#d87a80",
        "#8d98b3",
        "#e5cf0d",
        "#97b552",
        "#95706d",
        "#dc69aa",
        "#07a2a4",
        "#9a7fd1",
        "#588dd5",
        "#f5994e",
        "#c05050",
        "#59678c",
        "#c9ab00",
        "#7eb00a",
        "#6f5553",
        "#c14089",
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "sunburst",
            "data": [
                {
                    "name": "what",
                    "value": 33409,
                    "children": [
                        {
                            "name": "is",
                            "value": 24113,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 22842,
                                    "children": [
                                        {
                                            "name": "connection",
                                            "value": 6169
                                        },
                                        {
                                            "name": "relationship",
                                            "value": 2078
                                        },
                                        {
                                            "name": "number",
                                            "value": 1349
                                        },
                                        {
                                            "name": "official",
                                            "value": 1204
                                        },
                                        {
                                            "name": "isni",
                                            "value": 724
                                        },
                                        {
                                            "name": "title",
                                            "value": 513
                                        },
                                        {
                                            "name": "date",
                                            "value": 506
                                        },
                                        {
                                            "name": "character",
                                            "value": 493
                                        },
                                        {
                                            "name": "relation",
                                            "value": 488
                                        },
                                        {
                                            "name": "subject",
                                            "value": 420
                                        },
                                        {
                                            "name": "twitter",
                                            "value": 395
                                        },
                                        {
                                            "name": "association",
                                            "value": 364
                                        },
                                        {
                                            "name": "name",
                                            "value": 327
                                        },
                                        {
                                            "name": "time",
                                            "value": 316
                                        },
                                        {
                                            "name": "publication",
                                            "value": 310
                                        }
                                    ]
                                },
                                {
                                    "name": "cast",
                                    "value": 68,
                                    "children": [
                                        {
                                            "name": "member",
                                            "value": 68
                                        }
                                    ]
                                },
                                {
                                    "name": "its",
                                    "value": 63
                                },
                                {
                                    "name": "david",
                                    "value": 24
                                },
                                {
                                    "name": "john",
                                    "value": 21
                                }
                            ]
                        },
                        {
                            "name": "number",
                            "value": 1081,
                            "children": [
                                {
                                    "name": "of",
                                    "value": 1069,
                                    "children": [
                                        {
                                            "name": "movies",
                                            "value": 23
                                        },
                                        {
                                            "name": "literary",
                                            "value": 21
                                        },
                                        {
                                            "name": "animated",
                                            "value": 21
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "language",
                            "value": 944,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 898,
                                    "children": [
                                        {
                                            "name": "associated",
                                            "value": 620
                                        },
                                        {
                                            "name": "used",
                                            "value": 120
                                        },
                                        {
                                            "name": "the",
                                            "value": 34
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "does",
                            "value": 600,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 67
                                }
                            ]
                        },
                        {
                            "name": "person",
                            "value": 573,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 193,
                                    "children": [
                                        {
                                            "name": "a",
                                            "value": 86
                                        },
                                        {
                                            "name": "the",
                                            "value": 59
                                        }
                                    ]
                                },
                                {
                                    "name": "has",
                                    "value": 165,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 108
                                        },
                                        {
                                            "name": "a",
                                            "value": 22
                                        }
                                    ]
                                },
                                {
                                    "name": "was",
                                    "value": 87,
                                    "children": [
                                        {
                                            "name": "born",
                                            "value": 43
                                        },
                                        {
                                            "name": "nominated",
                                            "value": 24
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "film",
                            "value": 328,
                            "children": [
                                {
                                    "name": "has",
                                    "value": 86,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 35
                                        }
                                    ]
                                },
                                {
                                    "name": "is",
                                    "value": 65,
                                    "children": [
                                        {
                                            "name": "titled",
                                            "value": 27
                                        }
                                    ]
                                },
                                {
                                    "name": "was",
                                    "value": 43
                                },
                                {
                                    "name": "production",
                                    "value": 29,
                                    "children": [
                                        {
                                            "name": "company",
                                            "value": 26
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "was",
                            "value": 301,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 229,
                                    "children": [
                                        {
                                            "name": "role",
                                            "value": 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "association",
                            "value": 227,
                            "children": [
                                {
                                    "name": "football",
                                    "value": 146,
                                    "children": [
                                        {
                                            "name": "club",
                                            "value": 113
                                        },
                                        {
                                            "name": "clubs",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "does",
                                    "value": 76
                                }
                            ]
                        },
                        {
                            "name": "visual",
                            "value": 219,
                            "children": [
                                {
                                    "name": "artwork",
                                    "value": 184,
                                    "children": [
                                        {
                                            "name": "is",
                                            "value": 68
                                        },
                                        {
                                            "name": "has",
                                            "value": 49
                                        },
                                        {
                                            "name": "was",
                                            "value": 26
                                        }
                                    ]
                                },
                                {
                                    "name": "artworks",
                                    "value": 33
                                }
                            ]
                        },
                        {
                            "name": "are",
                            "value": 193,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 190,
                                    "children": [
                                        {
                                            "name": "number",
                                            "value": 160
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "city",
                            "value": 178,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 58,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 43
                                        }
                                    ]
                                },
                                {
                                    "name": "in",
                                    "value": 52,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 36
                                        }
                                    ]
                                },
                                {
                                    "name": "has",
                                    "value": 35
                                }
                            ]
                        },
                        {
                            "name": "country",
                            "value": 176,
                            "children": [
                                {
                                    "name": "does",
                                    "value": 107
                                },
                                {
                                    "name": "is",
                                    "value": 37
                                }
                            ]
                        },
                        {
                            "name": "method",
                            "value": 154,
                            "children": [
                                {
                                    "name": "determines",
                                    "value": 97,
                                    "children": [
                                        {
                                            "name": "that",
                                            "value": 97
                                        }
                                    ]
                                },
                                {
                                    "name": "was",
                                    "value": 30,
                                    "children": [
                                        {
                                            "name": "used",
                                            "value": 30
                                        }
                                    ]
                                },
                                {
                                    "name": "is",
                                    "value": 27,
                                    "children": [
                                        {
                                            "name": "used",
                                            "value": 27
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "television",
                            "value": 149,
                            "children": [
                                {
                                    "name": "series",
                                    "value": 103,
                                    "children": [
                                        {
                                            "name": "has",
                                            "value": 43
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "has",
                            "value": 135,
                            "children": [
                                {
                                    "name": "a",
                                    "value": 28
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "which",
                    "value": 18694,
                    "children": [
                        {
                            "name": "movie",
                            "value": 2811,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 2207,
                                    "children": [
                                        {
                                            "name": "longer",
                                            "value": 1023
                                        },
                                        {
                                            "name": "shorter",
                                            "value": 1006
                                        },
                                        {
                                            "name": "titled",
                                            "value": 132
                                        }
                                    ]
                                },
                                {
                                    "name": "cost",
                                    "value": 166,
                                    "children": [
                                        {
                                            "name": "less",
                                            "value": 88
                                        },
                                        {
                                            "name": "more",
                                            "value": 76
                                        }
                                    ]
                                },
                                {
                                    "name": "made",
                                    "value": 115,
                                    "children": [
                                        {
                                            "name": "less",
                                            "value": 66
                                        },
                                        {
                                            "name": "more",
                                            "value": 49
                                        }
                                    ]
                                },
                                {
                                    "name": "has",
                                    "value": 50,
                                    "children": [
                                        {
                                            "name": "a",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "was",
                                    "value": 46
                                },
                                {
                                    "name": "titled",
                                    "value": 40
                                },
                                {
                                    "name": "features",
                                    "value": 30
                                }
                            ]
                        },
                        {
                            "name": "has",
                            "value": 2668,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 736,
                                    "children": [
                                        {
                                            "name": "smallest",
                                            "value": 206
                                        },
                                        {
                                            "name": "most",
                                            "value": 174
                                        },
                                        {
                                            "name": "largest",
                                            "value": 147
                                        },
                                        {
                                            "name": "fewest",
                                            "value": 68
                                        },
                                        {
                                            "name": "larger",
                                            "value": 29
                                        },
                                        {
                                            "name": "highest",
                                            "value": 24
                                        },
                                        {
                                            "name": "lowest",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "a",
                                    "value": 512,
                                    "children": [
                                        {
                                            "name": "greater",
                                            "value": 192
                                        },
                                        {
                                            "name": "lesser",
                                            "value": 115
                                        },
                                        {
                                            "name": "larger",
                                            "value": 47
                                        },
                                        {
                                            "name": "smaller",
                                            "value": 46
                                        },
                                        {
                                            "name": "longer",
                                            "value": 30
                                        },
                                        {
                                            "name": "shorter",
                                            "value": 27
                                        },
                                        {
                                            "name": "lower",
                                            "value": 25
                                        },
                                        {
                                            "name": "higher",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "more",
                                    "value": 480,
                                    "children": [
                                        {
                                            "name": "people",
                                            "value": 157
                                        },
                                        {
                                            "name": "area",
                                            "value": 81
                                        },
                                        {
                                            "name": "students",
                                            "value": 53
                                        },
                                        {
                                            "name": "episodes",
                                            "value": 41
                                        },
                                        {
                                            "name": "seasons",
                                            "value": 40
                                        },
                                        {
                                            "name": "employees",
                                            "value": 29
                                        }
                                    ]
                                },
                                {
                                    "name": "fewer",
                                    "value": 332,
                                    "children": [
                                        {
                                            "name": "people",
                                            "value": 129
                                        },
                                        {
                                            "name": "students",
                                            "value": 56
                                        },
                                        {
                                            "name": "episodes",
                                            "value": 48
                                        },
                                        {
                                            "name": "employees",
                                            "value": 39
                                        },
                                        {
                                            "name": "seasons",
                                            "value": 25
                                        }
                                    ]
                                },
                                {
                                    "name": "less",
                                    "value": 292,
                                    "children": [
                                        {
                                            "name": "area",
                                            "value": 100
                                        },
                                        {
                                            "name": "population",
                                            "value": 38
                                        },
                                        {
                                            "name": "elevation",
                                            "value": 31
                                        },
                                        {
                                            "name": "duration",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "higher",
                                    "value": 128,
                                    "children": [
                                        {
                                            "name": "elevation",
                                            "value": 124
                                        }
                                    ]
                                },
                                {
                                    "name": "lower",
                                    "value": 106,
                                    "children": [
                                        {
                                            "name": "elevation",
                                            "value": 105
                                        }
                                    ]
                                },
                                {
                                    "name": "greater",
                                    "value": 60
                                }
                            ]
                        },
                        {
                            "name": "one",
                            "value": 1785,
                            "children": [
                                {
                                    "name": "has",
                                    "value": 640,
                                    "children": [
                                        {
                                            "name": "more",
                                            "value": 184
                                        },
                                        {
                                            "name": "less",
                                            "value": 146
                                        },
                                        {
                                            "name": "the",
                                            "value": 114
                                        },
                                        {
                                            "name": "a",
                                            "value": 80
                                        },
                                        {
                                            "name": "fewer",
                                            "value": 57
                                        }
                                    ]
                                },
                                {
                                    "name": "is",
                                    "value": 374,
                                    "children": [
                                        {
                                            "name": "longer",
                                            "value": 110
                                        },
                                        {
                                            "name": "shorter",
                                            "value": 95
                                        },
                                        {
                                            "name": "smaller",
                                            "value": 39
                                        },
                                        {
                                            "name": "larger",
                                            "value": 22
                                        },
                                        {
                                            "name": "taller",
                                            "value": 21
                                        }
                                    ]
                                },
                                {
                                    "name": "of",
                                    "value": 191,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 77
                                        }
                                    ]
                                },
                                {
                                    "name": "among",
                                    "value": 49,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "the",
                                    "value": 45
                                }
                            ]
                        },
                        {
                            "name": "area",
                            "value": 1460,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 1118,
                                    "children": [
                                        {
                                            "name": "smaller",
                                            "value": 572
                                        },
                                        {
                                            "name": "larger",
                                            "value": 524
                                        }
                                    ]
                                },
                                {
                                    "name": "has",
                                    "value": 330,
                                    "children": [
                                        {
                                            "name": "higher",
                                            "value": 131
                                        },
                                        {
                                            "name": "lower",
                                            "value": 120
                                        },
                                        {
                                            "name": "more",
                                            "value": 32
                                        },
                                        {
                                            "name": "fewer",
                                            "value": 22
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "is",
                            "value": 1043,
                            "children": [
                                {
                                    "name": "longer",
                                    "value": 410,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 95
                                        },
                                        {
                                            "name": "in",
                                            "value": 34
                                        }
                                    ]
                                },
                                {
                                    "name": "shorter",
                                    "value": 390,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 87
                                        },
                                        {
                                            "name": "in",
                                            "value": 35
                                        }
                                    ]
                                },
                                {
                                    "name": "the",
                                    "value": 118,
                                    "children": [
                                        {
                                            "name": "shortest",
                                            "value": 37
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "person",
                            "value": 884,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 199,
                                    "children": [
                                        {
                                            "name": "a",
                                            "value": 74
                                        },
                                        {
                                            "name": "the",
                                            "value": 29
                                        }
                                    ]
                                },
                                {
                                    "name": "has",
                                    "value": 182,
                                    "children": [
                                        {
                                            "name": "isni",
                                            "value": 58
                                        },
                                        {
                                            "name": "the",
                                            "value": 52
                                        }
                                    ]
                                },
                                {
                                    "name": "was",
                                    "value": 141,
                                    "children": [
                                        {
                                            "name": "born",
                                            "value": 87
                                        }
                                    ]
                                },
                                {
                                    "name": "with",
                                    "value": 67,
                                    "children": [
                                        {
                                            "name": "isni",
                                            "value": 34
                                        }
                                    ]
                                },
                                {
                                    "name": "born",
                                    "value": 34
                                },
                                {
                                    "name": "died",
                                    "value": 30
                                },
                                {
                                    "name": "who",
                                    "value": 28
                                }
                            ]
                        },
                        {
                            "name": "language",
                            "value": 366,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 336,
                                    "children": [
                                        {
                                            "name": "associated",
                                            "value": 248
                                        },
                                        {
                                            "name": "used",
                                            "value": 80
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "persons",
                            "value": 325,
                            "children": [
                                {
                                    "name": "isni",
                                    "value": 113,
                                    "children": [
                                        {
                                            "name": "is",
                                            "value": 111
                                        }
                                    ]
                                },
                                {
                                    "name": "official",
                                    "value": 48,
                                    "children": [
                                        {
                                            "name": "website",
                                            "value": 46
                                        }
                                    ]
                                },
                                {
                                    "name": "twitter",
                                    "value": 29,
                                    "children": [
                                        {
                                            "name": "username",
                                            "value": 28
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "human",
                            "value": 274,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 88,
                                    "children": [
                                        {
                                            "name": "a",
                                            "value": 38
                                        },
                                        {
                                            "name": "the",
                                            "value": 25
                                        }
                                    ]
                                },
                                {
                                    "name": "has",
                                    "value": 87,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 52
                                        }
                                    ]
                                },
                                {
                                    "name": "was",
                                    "value": 32
                                }
                            ]
                        },
                        {
                            "name": "film",
                            "value": 254,
                            "children": [
                                {
                                    "name": "has",
                                    "value": 85,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 53
                                        }
                                    ]
                                },
                                {
                                    "name": "is",
                                    "value": 55
                                },
                                {
                                    "name": "was",
                                    "value": 21
                                }
                            ]
                        },
                        {
                            "name": "show",
                            "value": 215,
                            "children": [
                                {
                                    "name": "has",
                                    "value": 198,
                                    "children": [
                                        {
                                            "name": "fewer",
                                            "value": 105
                                        },
                                        {
                                            "name": "more",
                                            "value": 92
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "visual",
                            "value": 210,
                            "children": [
                                {
                                    "name": "artwork",
                                    "value": 198,
                                    "children": [
                                        {
                                            "name": "is",
                                            "value": 48
                                        },
                                        {
                                            "name": "has",
                                            "value": 30
                                        },
                                        {
                                            "name": "was",
                                            "value": 21
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "university",
                            "value": 182,
                            "children": [
                                {
                                    "name": "has",
                                    "value": 120,
                                    "children": [
                                        {
                                            "name": "more",
                                            "value": 56
                                        },
                                        {
                                            "name": "fewer",
                                            "value": 41
                                        }
                                    ]
                                },
                                {
                                    "name": "is",
                                    "value": 30
                                }
                            ]
                        },
                        {
                            "name": "city",
                            "value": 174,
                            "children": [
                                {
                                    "name": "has",
                                    "value": 53,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 25
                                        }
                                    ]
                                },
                                {
                                    "name": "is",
                                    "value": 41
                                }
                            ]
                        },
                        {
                            "name": "us",
                            "value": 172,
                            "children": [
                                {
                                    "name": "city",
                                    "value": 119,
                                    "children": [
                                        {
                                            "name": "is",
                                            "value": 46
                                        },
                                        {
                                            "name": "has",
                                            "value": 39
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "how",
                    "value": 18055,
                    "children": [
                        {
                            "name": "many",
                            "value": 11119,
                            "children": [
                                {
                                    "name": "subscribers",
                                    "value": 746,
                                    "children": [
                                        {
                                            "name": "does",
                                            "value": 446
                                        },
                                        {
                                            "name": "are",
                                            "value": 278
                                        }
                                    ]
                                },
                                {
                                    "name": "counties",
                                    "value": 217,
                                    "children": [
                                        {
                                            "name": "in",
                                            "value": 112
                                        },
                                        {
                                            "name": "of",
                                            "value": 87
                                        }
                                    ]
                                },
                                {
                                    "name": "television",
                                    "value": 178,
                                    "children": [
                                        {
                                            "name": "series",
                                            "value": 35
                                        },
                                        {
                                            "name": "stations",
                                            "value": 28
                                        },
                                        {
                                            "name": "films",
                                            "value": 27
                                        },
                                        {
                                            "name": "programs",
                                            "value": 26
                                        },
                                        {
                                            "name": "networks",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "film",
                                    "value": 149,
                                    "children": [
                                        {
                                            "name": "awards",
                                            "value": 30
                                        },
                                        {
                                            "name": "festivals",
                                            "value": 27
                                        },
                                        {
                                            "name": "production",
                                            "value": 25
                                        },
                                        {
                                            "name": "series",
                                            "value": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "animated",
                                    "value": 137,
                                    "children": [
                                        {
                                            "name": "series",
                                            "value": 40
                                        },
                                        {
                                            "name": "feature",
                                            "value": 39
                                        },
                                        {
                                            "name": "characters",
                                            "value": 25
                                        },
                                        {
                                            "name": "films",
                                            "value": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "forms",
                                    "value": 117,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 117
                                        }
                                    ]
                                },
                                {
                                    "name": "video",
                                    "value": 116,
                                    "children": [
                                        {
                                            "name": "game",
                                            "value": 83
                                        },
                                        {
                                            "name": "games",
                                            "value": 32
                                        }
                                    ]
                                },
                                {
                                    "name": "new",
                                    "value": 113,
                                    "children": [
                                        {
                                            "name": "york",
                                            "value": 57
                                        },
                                        {
                                            "name": "jersey",
                                            "value": 55
                                        }
                                    ]
                                },
                                {
                                    "name": "national",
                                    "value": 113,
                                    "children": [
                                        {
                                            "name": "association",
                                            "value": 36
                                        },
                                        {
                                            "name": "football",
                                            "value": 30
                                        },
                                        {
                                            "name": "basketball",
                                            "value": 25
                                        }
                                    ]
                                },
                                {
                                    "name": "tv",
                                    "value": 99,
                                    "children": [
                                        {
                                            "name": "production",
                                            "value": 31
                                        }
                                    ]
                                },
                                {
                                    "name": "people",
                                    "value": 97,
                                    "children": [
                                        {
                                            "name": "subscribe",
                                            "value": 32
                                        }
                                    ]
                                },
                                {
                                    "name": "public",
                                    "value": 94,
                                    "children": [
                                        {
                                            "name": "universities",
                                            "value": 30
                                        },
                                        {
                                            "name": "offices",
                                            "value": 23
                                        },
                                        {
                                            "name": "companies",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "colleges",
                                    "value": 89,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 37
                                        }
                                    ]
                                },
                                {
                                    "name": "states",
                                    "value": 86,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 29
                                        }
                                    ]
                                },
                                {
                                    "name": "independent",
                                    "value": 85,
                                    "children": [
                                        {
                                            "name": "cities",
                                            "value": 44
                                        },
                                        {
                                            "name": "record",
                                            "value": 24
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "is",
                            "value": 4870,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 932,
                                    "children": [
                                        {
                                            "name": "university",
                                            "value": 29
                                        },
                                        {
                                            "name": "minute",
                                            "value": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "john",
                                    "value": 80
                                },
                                {
                                    "name": "michael",
                                    "value": 35
                                },
                                {
                                    "name": "david",
                                    "value": 33
                                },
                                {
                                    "name": "robert",
                                    "value": 27
                                },
                                {
                                    "name": "a",
                                    "value": 24
                                },
                                {
                                    "name": "james",
                                    "value": 22
                                },
                                {
                                    "name": "mark",
                                    "value": 22
                                },
                                {
                                    "name": "paul",
                                    "value": 22
                                },
                                {
                                    "name": "new",
                                    "value": 21
                                },
                                {
                                    "name": "fc",
                                    "value": 21
                                },
                                {
                                    "name": "peter",
                                    "value": 21
                                },
                                {
                                    "name": "william",
                                    "value": 21
                                },
                                {
                                    "name": "american",
                                    "value": 20
                                }
                            ]
                        },
                        {
                            "name": "are",
                            "value": 593,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 129
                                }
                            ]
                        },
                        {
                            "name": "was",
                            "value": 540,
                            "children": [
                                {
                                    "name": "it",
                                    "value": 336,
                                    "children": [
                                        {
                                            "name": "determined",
                                            "value": 322
                                        }
                                    ]
                                },
                                {
                                    "name": "the",
                                    "value": 96,
                                    "children": [
                                        {
                                            "name": "population",
                                            "value": 80
                                        }
                                    ]
                                },
                                {
                                    "name": "a",
                                    "value": 57,
                                    "children": [
                                        {
                                            "name": "population",
                                            "value": 29
                                        }
                                    ]
                                },
                                {
                                    "name": "determined",
                                    "value": 21
                                }
                            ]
                        },
                        {
                            "name": "long",
                            "value": 345,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 328,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 243
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "much",
                            "value": 184,
                            "children": [
                                {
                                    "name": "does",
                                    "value": 45,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 26
                                        }
                                    ]
                                },
                                {
                                    "name": "did",
                                    "value": 36
                                },
                                {
                                    "name": "area",
                                    "value": 32,
                                    "children": [
                                        {
                                            "name": "is",
                                            "value": 27
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "does",
                            "value": 144
                        },
                        {
                            "name": "tall",
                            "value": 66,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 66,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 32
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "large",
                            "value": 47,
                            "children": [
                                {
                                    "name": "is",
                                    "value": 44,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 24
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "is",
                    "value": 9119,
                    "children": [
                        {
                            "name": "the",
                            "value": 5114,
                            "children": [
                                {
                                    "name": "isni",
                                    "value": 514,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 381
                                        },
                                        {
                                            "name": "for",
                                            "value": 117
                                        }
                                    ]
                                },
                                {
                                    "name": "official",
                                    "value": 305,
                                    "children": [
                                        {
                                            "name": "website",
                                            "value": 277
                                        },
                                        {
                                            "name": "name",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "date",
                                    "value": 246,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 246
                                        }
                                    ]
                                },
                                {
                                    "name": "population",
                                    "value": 231,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 150
                                        }
                                    ]
                                },
                                {
                                    "name": "runtime",
                                    "value": 179,
                                    "children": [
                                        {
                                            "name": "longer",
                                            "value": 67
                                        },
                                        {
                                            "name": "shorter",
                                            "value": 52
                                        },
                                        {
                                            "name": "of",
                                            "value": 47
                                        }
                                    ]
                                },
                                {
                                    "name": "duration",
                                    "value": 161,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 80
                                        },
                                        {
                                            "name": "less",
                                            "value": 35
                                        },
                                        {
                                            "name": "greater",
                                            "value": 26
                                        }
                                    ]
                                },
                                {
                                    "name": "elevation",
                                    "value": 149,
                                    "children": [
                                        {
                                            "name": "above",
                                            "value": 57
                                        },
                                        {
                                            "name": "of",
                                            "value": 49
                                        }
                                    ]
                                },
                                {
                                    "name": "area",
                                    "value": 143,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 81
                                        },
                                        {
                                            "name": "greater",
                                            "value": 26
                                        }
                                    ]
                                },
                                {
                                    "name": "title",
                                    "value": 127,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 113
                                        }
                                    ]
                                },
                                {
                                    "name": "publication",
                                    "value": 99,
                                    "children": [
                                        {
                                            "name": "date",
                                            "value": 97
                                        }
                                    ]
                                },
                                {
                                    "name": "munzinger",
                                    "value": 86,
                                    "children": [
                                        {
                                            "name": "iba",
                                            "value": 85
                                        }
                                    ]
                                },
                                {
                                    "name": "running",
                                    "value": 81,
                                    "children": [
                                        {
                                            "name": "time",
                                            "value": 80
                                        }
                                    ]
                                },
                                {
                                    "name": "twitter",
                                    "value": 78,
                                    "children": [
                                        {
                                            "name": "username",
                                            "value": 74
                                        }
                                    ]
                                },
                                {
                                    "name": "postal",
                                    "value": 77,
                                    "children": [
                                        {
                                            "name": "code",
                                            "value": 77
                                        }
                                    ]
                                },
                                {
                                    "name": "local",
                                    "value": 73,
                                    "children": [
                                        {
                                            "name": "dialing",
                                            "value": 65
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "there",
                            "value": 168,
                            "children": [
                                {
                                    "name": "less",
                                    "value": 79,
                                    "children": [
                                        {
                                            "name": "area",
                                            "value": 52
                                        }
                                    ]
                                },
                                {
                                    "name": "a",
                                    "value": 65,
                                    "children": [
                                        {
                                            "name": "greater",
                                            "value": 58
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "a",
                            "value": 113,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 68,
                                    "children": [
                                        {
                                            "name": "canticid",
                                            "value": 61
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "not",
                            "value": 98,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 96,
                                    "children": [
                                        {
                                            "name": "year",
                                            "value": 37
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "john",
                            "value": 31
                        },
                        {
                            "name": "x",
                            "value": 27,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 24,
                                    "children": [
                                        {
                                            "name": "isni",
                                            "value": 24
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "michael",
                            "value": 22
                        },
                        {
                            "name": "c",
                            "value": 20,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 20
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "when",
                    "value": 8775,
                    "children": [
                        {
                            "name": "did",
                            "value": 5235,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 1950,
                                    "children": [
                                        {
                                            "name": "person",
                                            "value": 162
                                        },
                                        {
                                            "name": "city",
                                            "value": 148
                                        },
                                        {
                                            "name": "sovereign",
                                            "value": 124
                                        },
                                        {
                                            "name": "us",
                                            "value": 111
                                        },
                                        {
                                            "name": "administrative",
                                            "value": 79
                                        },
                                        {
                                            "name": "county",
                                            "value": 57
                                        },
                                        {
                                            "name": "state",
                                            "value": 39
                                        },
                                        {
                                            "name": "new",
                                            "value": 32
                                        },
                                        {
                                            "name": "big",
                                            "value": 32
                                        },
                                        {
                                            "name": "capital",
                                            "value": 30
                                        },
                                        {
                                            "name": "university",
                                            "value": 26
                                        },
                                        {
                                            "name": "th",
                                            "value": 22
                                        },
                                        {
                                            "name": "national",
                                            "value": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "a",
                                    "value": 158,
                                    "children": [
                                        {
                                            "name": "county",
                                            "value": 23
                                        },
                                        {
                                            "name": "sovereign",
                                            "value": 21
                                        },
                                        {
                                            "name": "city",
                                            "value": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "john",
                                    "value": 94
                                },
                                {
                                    "name": "michael",
                                    "value": 39
                                },
                                {
                                    "name": "an",
                                    "value": 37
                                },
                                {
                                    "name": "david",
                                    "value": 35
                                },
                                {
                                    "name": "richard",
                                    "value": 31
                                },
                                {
                                    "name": "george",
                                    "value": 30
                                },
                                {
                                    "name": "peter",
                                    "value": 25
                                },
                                {
                                    "name": "james",
                                    "value": 23
                                },
                                {
                                    "name": "chris",
                                    "value": 23
                                },
                                {
                                    "name": "robert",
                                    "value": 23
                                },
                                {
                                    "name": "stephen",
                                    "value": 20
                                }
                            ]
                        },
                        {
                            "name": "was",
                            "value": 3357,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 1826,
                                    "children": [
                                        {
                                            "name": "person",
                                            "value": 328
                                        },
                                        {
                                            "name": "population",
                                            "value": 206
                                        },
                                        {
                                            "name": "movie",
                                            "value": 61
                                        },
                                        {
                                            "name": "association",
                                            "value": 49
                                        },
                                        {
                                            "name": "release",
                                            "value": 31
                                        },
                                        {
                                            "name": "film",
                                            "value": 28
                                        },
                                        {
                                            "name": "birth",
                                            "value": 26
                                        },
                                        {
                                            "name": "university",
                                            "value": 25
                                        },
                                        {
                                            "name": "founding",
                                            "value": 23
                                        },
                                        {
                                            "name": "visual",
                                            "value": 20
                                        },
                                        {
                                            "name": "us",
                                            "value": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "a",
                                    "value": 65
                                },
                                {
                                    "name": "john",
                                    "value": 36
                                },
                                {
                                    "name": "born",
                                    "value": 27
                                },
                                {
                                    "name": "robert",
                                    "value": 24
                                },
                                {
                                    "name": "michael",
                                    "value": 22
                                }
                            ]
                        },
                        {
                            "name": "is",
                            "value": 48,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 41
                                }
                            ]
                        },
                        {
                            "name": "were",
                            "value": 34
                        }
                    ]
                },
                {
                    "name": "does",
                    "value": 5615,
                    "children": [
                        {
                            "name": "the",
                            "value": 2049,
                            "children": [
                                {
                                    "name": "person",
                                    "value": 293,
                                    "children": [
                                        {
                                            "name": "with",
                                            "value": 88
                                        },
                                        {
                                            "name": "who",
                                            "value": 88
                                        },
                                        {
                                            "name": "whose",
                                            "value": 61
                                        },
                                        {
                                            "name": "born",
                                            "value": 20
                                        }
                                    ]
                                },
                                {
                                    "name": "website",
                                    "value": 99
                                },
                                {
                                    "name": "film",
                                    "value": 90,
                                    "children": [
                                        {
                                            "name": "whose",
                                            "value": 28
                                        }
                                    ]
                                },
                                {
                                    "name": "university",
                                    "value": 58,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 43
                                        }
                                    ]
                                },
                                {
                                    "name": "television",
                                    "value": 56,
                                    "children": [
                                        {
                                            "name": "series",
                                            "value": 47
                                        }
                                    ]
                                },
                                {
                                    "name": "visual",
                                    "value": 55,
                                    "children": [
                                        {
                                            "name": "artwork",
                                            "value": 53
                                        }
                                    ]
                                },
                                {
                                    "name": "city",
                                    "value": 51
                                },
                                {
                                    "name": "human",
                                    "value": 48
                                },
                                {
                                    "name": "us",
                                    "value": 46,
                                    "children": [
                                        {
                                            "name": "city",
                                            "value": 38
                                        }
                                    ]
                                },
                                {
                                    "name": "twitter",
                                    "value": 41,
                                    "children": [
                                        {
                                            "name": "handle",
                                            "value": 24
                                        }
                                    ]
                                },
                                {
                                    "name": "longer",
                                    "value": 39,
                                    "children": [
                                        {
                                            "name": "runtime",
                                            "value": 29
                                        }
                                    ]
                                },
                                {
                                    "name": "tv",
                                    "value": 29
                                },
                                {
                                    "name": "shorter",
                                    "value": 24,
                                    "children": [
                                        {
                                            "name": "runtime",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "higher",
                                    "value": 23
                                },
                                {
                                    "name": "united",
                                    "value": 22,
                                    "children": [
                                        {
                                            "name": "states",
                                            "value": 21
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "isni",
                            "value": 128,
                            "children": [
                                {
                                    "name": "correspond",
                                    "value": 28,
                                    "children": [
                                        {
                                            "name": "to",
                                            "value": 28
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "university",
                            "value": 39,
                            "children": [
                                {
                                    "name": "of",
                                    "value": 37
                                }
                            ]
                        },
                        {
                            "name": "canticid",
                            "value": 30,
                            "children": [
                                {
                                    "name": "a",
                                    "value": 27
                                }
                            ]
                        },
                        {
                            "name": "a",
                            "value": 29
                        },
                        {
                            "name": "new",
                            "value": 21
                        }
                    ]
                },
                {
                    "name": "who",
                    "value": 3312,
                    "children": [
                        {
                            "name": "is",
                            "value": 1442,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 796,
                                    "children": [
                                        {
                                            "name": "person",
                                            "value": 388
                                        },
                                        {
                                            "name": "nominee",
                                            "value": 53
                                        },
                                        {
                                            "name": "reviewer",
                                            "value": 39
                                        },
                                        {
                                            "name": "director",
                                            "value": 26
                                        },
                                        {
                                            "name": "spouse",
                                            "value": 26
                                        },
                                        {
                                            "name": "composer",
                                            "value": 22
                                        }
                                    ]
                                },
                                {
                                    "name": "taller",
                                    "value": 230
                                },
                                {
                                    "name": "shorter",
                                    "value": 201
                                },
                                {
                                    "name": "a",
                                    "value": 48
                                },
                                {
                                    "name": "heavier",
                                    "value": 21
                                }
                            ]
                        },
                        {
                            "name": "has",
                            "value": 768,
                            "children": [
                                {
                                    "name": "more",
                                    "value": 316,
                                    "children": [
                                        {
                                            "name": "children",
                                            "value": 253
                                        },
                                        {
                                            "name": "kids",
                                            "value": 26
                                        }
                                    ]
                                },
                                {
                                    "name": "fewer",
                                    "value": 239,
                                    "children": [
                                        {
                                            "name": "children",
                                            "value": 213
                                        }
                                    ]
                                },
                                {
                                    "name": "less",
                                    "value": 55,
                                    "children": [
                                        {
                                            "name": "children",
                                            "value": 29
                                        }
                                    ]
                                },
                                {
                                    "name": "a",
                                    "value": 53
                                },
                                {
                                    "name": "the",
                                    "value": 47
                                },
                                {
                                    "name": "an",
                                    "value": 29,
                                    "children": [
                                        {
                                            "name": "isni",
                                            "value": 25
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "was",
                            "value": 521,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 191,
                                    "children": [
                                        {
                                            "name": "nominee",
                                            "value": 36
                                        },
                                        {
                                            "name": "academy",
                                            "value": 33
                                        }
                                    ]
                                },
                                {
                                    "name": "nominated",
                                    "value": 181,
                                    "children": [
                                        {
                                            "name": "for",
                                            "value": 178
                                        }
                                    ]
                                },
                                {
                                    "name": "born",
                                    "value": 71,
                                    "children": [
                                        {
                                            "name": "on",
                                            "value": 26
                                        },
                                        {
                                            "name": "in",
                                            "value": 25
                                        }
                                    ]
                                },
                                {
                                    "name": "a",
                                    "value": 22
                                }
                            ]
                        },
                        {
                            "name": "weighs",
                            "value": 123,
                            "children": [
                                {
                                    "name": "more",
                                    "value": 67
                                },
                                {
                                    "name": "less",
                                    "value": 56
                                }
                            ]
                        },
                        {
                            "name": "won",
                            "value": 71,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 39
                                }
                            ]
                        },
                        {
                            "name": "died",
                            "value": 39,
                            "children": [
                                {
                                    "name": "in",
                                    "value": 23
                                }
                            ]
                        },
                        {
                            "name": "directed",
                            "value": 37,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 23
                                }
                            ]
                        },
                        {
                            "name": "received",
                            "value": 26
                        },
                        {
                            "name": "composed",
                            "value": 23
                        }
                    ]
                },
                {
                    "name": "was",
                    "value": 2996,
                    "children": [
                        {
                            "name": "the",
                            "value": 1828,
                            "children": [
                                {
                                    "name": "person",
                                    "value": 491,
                                    "children": [
                                        {
                                            "name": "with",
                                            "value": 210
                                        },
                                        {
                                            "name": "whose",
                                            "value": 113
                                        },
                                        {
                                            "name": "who",
                                            "value": 81
                                        },
                                        {
                                            "name": "that",
                                            "value": 24
                                        }
                                    ]
                                },
                                {
                                    "name": "movie",
                                    "value": 92,
                                    "children": [
                                        {
                                            "name": "titled",
                                            "value": 42
                                        }
                                    ]
                                },
                                {
                                    "name": "film",
                                    "value": 69,
                                    "children": [
                                        {
                                            "name": "titled",
                                            "value": 21
                                        }
                                    ]
                                },
                                {
                                    "name": "population",
                                    "value": 65,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 57
                                        }
                                    ]
                                },
                                {
                                    "name": "visual",
                                    "value": 56,
                                    "children": [
                                        {
                                            "name": "artwork",
                                            "value": 55
                                        }
                                    ]
                                },
                                {
                                    "name": "association",
                                    "value": 52,
                                    "children": [
                                        {
                                            "name": "football",
                                            "value": 51
                                        }
                                    ]
                                },
                                {
                                    "name": "university",
                                    "value": 31
                                },
                                {
                                    "name": "record",
                                    "value": 28,
                                    "children": [
                                        {
                                            "name": "label",
                                            "value": 27
                                        }
                                    ]
                                },
                                {
                                    "name": "founding",
                                    "value": 24
                                },
                                {
                                    "name": "us",
                                    "value": 23
                                },
                                {
                                    "name": "individual",
                                    "value": 22
                                },
                                {
                                    "name": "tv",
                                    "value": 21
                                }
                            ]
                        },
                        {
                            "name": "a",
                            "value": 91,
                            "children": [
                                {
                                    "name": "person",
                                    "value": 31
                                }
                            ]
                        },
                        {
                            "name": "someone",
                            "value": 34,
                            "children": [
                                {
                                    "name": "with",
                                    "value": 24
                                }
                            ]
                        },
                        {
                            "name": "an",
                            "value": 33
                        },
                        {
                            "name": "it",
                            "value": 33
                        },
                        {
                            "name": "john",
                            "value": 24
                        }
                    ]
                },
                {
                    "name": "the",
                    "value": 1853,
                    "children": [
                        {
                            "name": "person",
                            "value": 180,
                            "children": [
                                {
                                    "name": "with",
                                    "value": 73,
                                    "children": [
                                        {
                                            "name": "isni",
                                            "value": 23
                                        },
                                        {
                                            "name": "the",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "born",
                                    "value": 23
                                }
                            ]
                        },
                        {
                            "name": "visual",
                            "value": 174,
                            "children": [
                                {
                                    "name": "artwork",
                                    "value": 173,
                                    "children": [
                                        {
                                            "name": "titled",
                                            "value": 74
                                        },
                                        {
                                            "name": "with",
                                            "value": 32
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "movie",
                            "value": 117,
                            "children": [
                                {
                                    "name": "titled",
                                    "value": 34
                                },
                                {
                                    "name": "with",
                                    "value": 30,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 21
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "website",
                            "value": 64
                        },
                        {
                            "name": "demonym",
                            "value": 45
                        },
                        {
                            "name": "film",
                            "value": 41,
                            "children": [
                                {
                                    "name": "titled",
                                    "value": 20
                                }
                            ]
                        },
                        {
                            "name": "official",
                            "value": 31,
                            "children": [
                                {
                                    "name": "website",
                                    "value": 26
                                }
                            ]
                        },
                        {
                            "name": "population",
                            "value": 30,
                            "children": [
                                {
                                    "name": "of",
                                    "value": 25,
                                    "children": [
                                        {
                                            "name": "how",
                                            "value": 21
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "us",
                            "value": 28
                        },
                        {
                            "name": "individual",
                            "value": 24
                        },
                        {
                            "name": "animated",
                            "value": 23
                        }
                    ]
                },
                {
                    "name": "tell",
                    "value": 1823,
                    "children": [
                        {
                            "name": "me",
                            "value": 1823,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 1725,
                                    "children": [
                                        {
                                            "name": "one",
                                            "value": 370
                                        },
                                        {
                                            "name": "relationship",
                                            "value": 257
                                        },
                                        {
                                            "name": "number",
                                            "value": 121
                                        },
                                        {
                                            "name": "person",
                                            "value": 100
                                        },
                                        {
                                            "name": "time",
                                            "value": 54
                                        },
                                        {
                                            "name": "subject",
                                            "value": 53
                                        },
                                        {
                                            "name": "start",
                                            "value": 51
                                        },
                                        {
                                            "name": "visual",
                                            "value": 34
                                        },
                                        {
                                            "name": "movie",
                                            "value": 32
                                        },
                                        {
                                            "name": "inception",
                                            "value": 25
                                        },
                                        {
                                            "name": "end",
                                            "value": 24
                                        },
                                        {
                                            "name": "official",
                                            "value": 23
                                        },
                                        {
                                            "name": "relation",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "when",
                                    "value": 21
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "for",
                    "value": 1773,
                    "children": [
                        {
                            "name": "the",
                            "value": 980,
                            "children": [
                                {
                                    "name": "person",
                                    "value": 108,
                                    "children": [
                                        {
                                            "name": "who",
                                            "value": 40
                                        },
                                        {
                                            "name": "whose",
                                            "value": 30
                                        }
                                    ]
                                },
                                {
                                    "name": "film",
                                    "value": 85,
                                    "children": [
                                        {
                                            "name": "whose",
                                            "value": 29
                                        },
                                        {
                                            "name": "that",
                                            "value": 25
                                        }
                                    ]
                                },
                                {
                                    "name": "us",
                                    "value": 38,
                                    "children": [
                                        {
                                            "name": "city",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "city",
                                    "value": 37
                                },
                                {
                                    "name": "sovereign",
                                    "value": 28,
                                    "children": [
                                        {
                                            "name": "state",
                                            "value": 28
                                        }
                                    ]
                                },
                                {
                                    "name": "administrative",
                                    "value": 23,
                                    "children": [
                                        {
                                            "name": "territorial",
                                            "value": 22
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "which",
                            "value": 320,
                            "children": [
                                {
                                    "name": "work",
                                    "value": 276,
                                    "children": [
                                        {
                                            "name": "was",
                                            "value": 180
                                        },
                                        {
                                            "name": "did",
                                            "value": 91
                                        }
                                    ]
                                },
                                {
                                    "name": "project",
                                    "value": 34,
                                    "children": [
                                        {
                                            "name": "was",
                                            "value": 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "what",
                            "value": 137,
                            "children": [
                                {
                                    "name": "was",
                                    "value": 59
                                },
                                {
                                    "name": "work",
                                    "value": 44,
                                    "children": [
                                        {
                                            "name": "did",
                                            "value": 24
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "where",
                    "value": 1535,
                    "children": [
                        {
                            "name": "was",
                            "value": 1315,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 770,
                                    "children": [
                                        {
                                            "name": "film",
                                            "value": 245
                                        },
                                        {
                                            "name": "visual",
                                            "value": 191
                                        },
                                        {
                                            "name": "movie",
                                            "value": 65
                                        },
                                        {
                                            "name": "feature",
                                            "value": 30
                                        },
                                        {
                                            "name": "animated",
                                            "value": 28
                                        }
                                    ]
                                },
                                {
                                    "name": "a",
                                    "value": 111,
                                    "children": [
                                        {
                                            "name": "movie",
                                            "value": 54
                                        },
                                        {
                                            "name": "visual",
                                            "value": 37
                                        }
                                    ]
                                },
                                {
                                    "name": "released",
                                    "value": 50,
                                    "children": [
                                        {
                                            "name": "the",
                                            "value": 32
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "is",
                            "value": 134,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 98,
                                    "children": [
                                        {
                                            "name": "film",
                                            "value": 30
                                        },
                                        {
                                            "name": "visual",
                                            "value": 28
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "did",
                            "value": 34
                        }
                    ]
                },
                {
                    "name": "of",
                    "value": 1190,
                    "children": [
                        {
                            "name": "the",
                            "value": 195
                        },
                        {
                            "name": "all",
                            "value": 85,
                            "children": [
                                {
                                    "name": "the",
                                    "value": 42
                                }
                            ]
                        },
                        {
                            "name": "new",
                            "value": 62,
                            "children": [
                                {
                                    "name": "york",
                                    "value": 33
                                },
                                {
                                    "name": "jersey",
                                    "value": 29,
                                    "children": [
                                        {
                                            "name": "cities",
                                            "value": 22
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "animated",
                            "value": 49,
                            "children": [
                                {
                                    "name": "series",
                                    "value": 23
                                }
                            ]
                        },
                        {
                            "name": "independent",
                            "value": 32
                        },
                        {
                            "name": "tv",
                            "value": 25
                        },
                        {
                            "name": "us",
                            "value": 25
                        },
                        {
                            "name": "news",
                            "value": 23
                        },
                        {
                            "name": "which",
                            "value": 22,
                            "children": [
                                {
                                    "name": "class",
                                    "value": 21,
                                    "children": [
                                        {
                                            "name": "is",
                                            "value": 21
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "did",
                    "value": 1147,
                    "children": [
                        {
                            "name": "the",
                            "value": 743,
                            "children": [
                                {
                                    "name": "person",
                                    "value": 185,
                                    "children": [
                                        {
                                            "name": "with",
                                            "value": 70
                                        },
                                        {
                                            "name": "whose",
                                            "value": 34
                                        },
                                        {
                                            "name": "who",
                                            "value": 29
                                        },
                                        {
                                            "name": "born",
                                            "value": 22
                                        }
                                    ]
                                },
                                {
                                    "name": "th",
                                    "value": 29
                                },
                                {
                                    "name": "television",
                                    "value": 26,
                                    "children": [
                                        {
                                            "name": "series",
                                            "value": 23
                                        }
                                    ]
                                },
                                {
                                    "name": "tv",
                                    "value": 25,
                                    "children": [
                                        {
                                            "name": "series",
                                            "value": 21
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "a",
                            "value": 26
                        }
                    ]
                },
                {
                    "name": "among",
                    "value": 798,
                    "children": [
                        {
                            "name": "the",
                            "value": 700,
                            "children": [
                                {
                                    "name": "counties",
                                    "value": 43,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 42
                                        }
                                    ]
                                },
                                {
                                    "name": "animated",
                                    "value": 40
                                },
                                {
                                    "name": "states",
                                    "value": 26
                                },
                                {
                                    "name": "television",
                                    "value": 26
                                },
                                {
                                    "name": "feature",
                                    "value": 23
                                },
                                {
                                    "name": "county",
                                    "value": 21,
                                    "children": [
                                        {
                                            "name": "of",
                                            "value": 21
                                        }
                                    ]
                                },
                                {
                                    "name": "rivers",
                                    "value": 20
                                }
                            ]
                        }
                    ]
                }
            ],
            "center": [
                "50%",
                "55%"
            ],
            "radius": [
                0,
                "95%"
            ],
            "highlightPolicy": "ancestor",
            "sort": "null",
            "levels": [
                {},
                {
                    "r0": "5%",
                    "r": "20%"
                },
                {
                    "r0": "20%",
                    "r": "40%"
                },
                {
                    "r0": "40%",
                    "r": "65%"
                },
                {
                    "r0": "65%",
                    "r": "90%"
                }
            ],
            "label": {
                "show": false,
                "position": "top",
                "margin": 8,
                "formatter": "{b}"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            },
            "itemStyle": {
                "borderWidth": 0
            },
            "nodeClick": false,
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
    },
    "title": [
        {
            "text": "Question Prefix Distribution",
            "padding": 5,
            "itemGap": 10,
            "left": "center",
            "top": "0",
            "textStyle": {
                "color": "#000",
                "fontSize": 25
            }
        }
    ]
};
    chart.setOption(option);
    charts.push(chart);
    
    // support response of svg
    function responsivefy(svg) {
        // get container + svg aspect ratio
        var container = d3.select(svg.node().parentNode),
            width = parseInt(svg.style("width")),
            height = parseInt(svg.style("height")),
            aspect = width / height;

        // add viewBox and preserveAspectRatio properties,
        // and call resize so that svg resizes on inital page load
        svg.attr("viewBox", "0 0 " + width + " " + height)
            .attr("perserveAspectRatio", "xMinYMid")
            .call(resize);

        // to register multiple listeners for same event type, 
        // you need to add namespace, i.e., 'click.foo'
        // necessary if you call invoke this function for multiple svgs
        // api docs: https://github.com/mbostock/d3/wiki/Selections#on
        d3.select(window).on("resize." + container.attr("id"), resize);

        // get width of container and resize svg to fit it
        function resize() {
            var targetWidth = parseInt(container.style("width"));
            svg.attr("width", targetWidth);
            svg.attr("height", Math.round(targetWidth / aspect));
        }
    }
    d3.select("#sunburst_path")
        .call(responsivefy);

    // Generate a string that describes the points of a breadcrumb polygon.
    // reference to js/plots2.js of the GQA web source
    var b = {
        w: 75, h: 30, s: 3, t: 10
    };
    
    function breadcrumbPoints(d, i) {
        var points = [];
        points.push("0,0");
        points.push(b.w + ",0");
        points.push(b.w + b.t + "," + (b.h / 2));
        points.push(b.w + "," + b.h);
        points.push("0," + b.h);
        if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
          points.push(b.t + "," + (b.h / 2));
        }
        return points.join(" ");
    }

    // bind the update of sunburst path with the mouse events of chart
    chart.on('mouseover', {}, function (params) {
        // console.log(params);
        var p = params['treePathInfo'];
        var color = params['color'];
        var words = [];
        for(var i = 0; i < p.length; i ++) {
            if (p[i]['name']) {
                // console.log(p[i]['name']);
                words.push(p[i]['name']);
            }
        }

        d3.select("#sunburst_path")
            .selectAll('g')
            .remove();

        var u = d3.select("#sunburst_path")
            .selectAll('g')
            .data(words)
            .enter()
            .append('g');

        u.append('polygon')
            .attr('points', breadcrumbPoints)
            .attr('fill', color);
        u.append('text')
            .attr("x", (b.w + b.t) / 2)
            .attr("y", b.h / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", "middle")
            .text(d => { return d; })
            .style("font-size", "1px")  // a trick to automatically resize the font
            .style("font-size", function(d) { return Math.min(b.w/this.getBBox().width, 20) + "px"; })
            .attr("y", b.h / 2);
        u.attr("transform", function(d, i) {
                return "translate(" + i * (b.w + b.s) + ", 0)";
            });

        if (words.length > 0) {
            d3.select("#sunburst_path")
                .select('text')
                .attr("x", (words.length + 0.5) * (b.w + b.s) + 0.2*b.w)
                .attr("y", b.h / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .text((p[p.length-1]['value']/117970*100).toFixed(2) + '%');
        }

    });
    // chart.on('mouseout', {}, function (params) {
    //     d3.select("#sunburst_path")
    //         .selectAll('g')
    //         .remove();
    // });



    chart = echarts.init(document.getElementById('chart_wordcloud'), 'macarons', {renderer: 'svg'});
    // var maskImage = new Image();
    option = {
    "animation": true,
    "series": [
        {
            "type": "wordCloud",
            "shape": "cardioid",
            // "maskImage": maskImage,
            'left': 'center',
            'top': 'center',
            'width': '80%',
            'height': '80%',
            "rotationRange": [
                -90,
                90
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
                15,
                66
            ],
             "data": [
                {
                    "name": "what",
                    "value": 36871,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(105,0,114)"
                        }
                    }
                },
                {
                    "name": "which",
                    "value": 28654,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(65,28,100)"
                        }
                    }
                },
                {
                    "name": "whose",
                    "value": 25277,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(103,42,54)"
                        }
                    }
                },
                {
                    "name": "in",
                    "value": 24104,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(129,15,85)"
                        }
                    }
                },
                {
                    "name": "for",
                    "value": 22508,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(109,142,59)"
                        }
                    }
                },
                {
                    "name": "or",
                    "value": 22034,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(159,65,144)"
                        }
                    }
                },
                {
                    "name": "one",
                    "value": 21062,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(29,129,68)"
                        }
                    }
                },
                {
                    "name": "has",
                    "value": 19748,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(14,89,87)"
                        }
                    }
                },
                {
                    "name": "how",
                    "value": 19296,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(124,64,106)"
                        }
                    }
                },
                {
                    "name": "with",
                    "value": 15605,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(100,77,67)"
                        }
                    }
                },
                {
                    "name": "have",
                    "value": 12842,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(93,75,7)"
                        }
                    }
                },
                {
                    "name": "and",
                    "value": 12610,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(110,11,88)"
                        }
                    }
                },
                {
                    "name": "many",
                    "value": 12257,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(148,158,152)"
                        }
                    }
                },
                {
                    "name": "website",
                    "value": 10723,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(115,108,11)"
                        }
                    }
                },
                {
                    "name": "official",
                    "value": 10660,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(129,11,156)"
                        }
                    }
                },
                {
                    "name": "between",
                    "value": 10241,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(38,69,25)"
                        }
                    }
                },
                {
                    "name": "when",
                    "value": 9402,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(121,113,6)"
                        }
                    }
                },
                {
                    "name": "population",
                    "value": 8789,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(17,60,30)"
                        }
                    }
                },
                {
                    "name": "county",
                    "value": 8720,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(20,50,115)"
                        }
                    }
                },
                {
                    "name": "award",
                    "value": 8443,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(153,93,75)"
                        }
                    }
                },
                {
                    "name": "person",
                    "value": 8264,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(114,111,93)"
                        }
                    }
                },
                {
                    "name": "does",
                    "value": 8166,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(108,44,67)"
                        }
                    }
                },
                {
                    "name": "on",
                    "value": 7614,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(108,105,130)"
                        }
                    }
                },
                {
                    "name": "who",
                    "value": 7331,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(19,1,110)"
                        }
                    }
                },
                {
                    "name": "as",
                    "value": 7289,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(55,153,23)"
                        }
                    }
                },
                {
                    "name": "area",
                    "value": 7146,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(90,62,24)"
                        }
                    }
                },
                {
                    "name": "number",
                    "value": 7086,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(19,124,63)"
                        }
                    }
                },
                {
                    "name": "are",
                    "value": 6918,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(158,99,75)"
                        }
                    }
                },
                {
                    "name": "by",
                    "value": 6915,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(142,89,39)"
                        }
                    }
                },
                {
                    "name": "connection",
                    "value": 6724,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(153,136,48)"
                        }
                    }
                },
                {
                    "name": "isni",
                    "value": 6565,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(139,156,15)"
                        }
                    }
                },
                {
                    "name": "date",
                    "value": 6371,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(31,44,105)"
                        }
                    }
                },
                {
                    "name": "film",
                    "value": 6316,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(5,93,30)"
                        }
                    }
                },
                {
                    "name": "member",
                    "value": 6120,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(58,64,22)"
                        }
                    }
                },
                {
                    "name": "best",
                    "value": 6085,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(148,93,116)"
                        }
                    }
                },
                {
                    "name": "code",
                    "value": 5563,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(140,157,140)"
                        }
                    }
                },
                {
                    "name": "an",
                    "value": 5551,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(145,67,52)"
                        }
                    }
                },
                {
                    "name": "related",
                    "value": 5393,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(31,99,75)"
                        }
                    }
                },
                {
                    "name": "movie",
                    "value": 5340,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(141,85,36)"
                        }
                    }
                },
                {
                    "name": "united",
                    "value": 5176,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(53,52,10)"
                        }
                    }
                },
                {
                    "name": "city",
                    "value": 5135,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(151,77,20)"
                        }
                    }
                },
                {
                    "name": "time",
                    "value": 5109,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(148,144,159)"
                        }
                    }
                },
                {
                    "name": "than",
                    "value": 4903,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(19,112,119)"
                        }
                    }
                },
                {
                    "name": "language",
                    "value": 4734,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(96,66,122)"
                        }
                    }
                },
                {
                    "name": "university",
                    "value": 4559,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(62,123,130)"
                        }
                    }
                },
                {
                    "name": "states",
                    "value": 4527,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(55,65,10)"
                        }
                    }
                },
                {
                    "name": "born",
                    "value": 4395,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(93,140,115)"
                        }
                    }
                },
                {
                    "name": "name",
                    "value": 4323,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(100,56,149)"
                        }
                    }
                },
                {
                    "name": "cast",
                    "value": 4281,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(76,55,129)"
                        }
                    }
                },
                {
                    "name": "academy",
                    "value": 3994,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(108,46,129)"
                        }
                    }
                },
                {
                    "name": "username",
                    "value": 3956,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(57,68,71)"
                        }
                    }
                },
                {
                    "name": "published",
                    "value": 3909,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(48,8,131)"
                        }
                    }
                },
                {
                    "name": "not",
                    "value": 3830,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(114,106,75)"
                        }
                    }
                },
                {
                    "name": "at",
                    "value": 3771,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(21,19,106)"
                        }
                    }
                },
                {
                    "name": "twitter",
                    "value": 3673,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(38,45,157)"
                        }
                    }
                },
                {
                    "name": "administrative",
                    "value": 3661,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(105,78,128)"
                        }
                    }
                },
                {
                    "name": "nominated",
                    "value": 3544,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(115,31,129)"
                        }
                    }
                },
                {
                    "name": "where",
                    "value": 3368,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(56,102,102)"
                        }
                    }
                },
                {
                    "name": "less",
                    "value": 3257,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(84,21,70)"
                        }
                    }
                },
                {
                    "name": "work",
                    "value": 3082,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(56,56,68)"
                        }
                    }
                },
                {
                    "name": "football",
                    "value": 2952,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(83,5,130)"
                        }
                    }
                },
                {
                    "name": "relationship",
                    "value": 2880,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(99,148,12)"
                        }
                    }
                },
                {
                    "name": "more",
                    "value": 2872,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(57,106,119)"
                        }
                    }
                },
                {
                    "name": "association",
                    "value": 2748,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(160,3,29)"
                        }
                    }
                },
                {
                    "name": "this",
                    "value": 2737,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(59,79,14)"
                        }
                    }
                },
                {
                    "name": "longer",
                    "value": 2639,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(152,42,153)"
                        }
                    }
                },
                {
                    "name": "counties",
                    "value": 2622,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(43,113,83)"
                        }
                    }
                },
                {
                    "name": "after",
                    "value": 2621,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(84,72,34)"
                        }
                    }
                },
                {
                    "name": "shorter",
                    "value": 2601,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(105,10,118)"
                        }
                    }
                },
                {
                    "name": "country",
                    "value": 2552,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(0,99,81)"
                        }
                    }
                },
                {
                    "name": "location",
                    "value": 2517,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(119,42,72)"
                        }
                    }
                },
                {
                    "name": "sea",
                    "value": 2478,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(145,136,129)"
                        }
                    }
                },
                {
                    "name": "me",
                    "value": 2468,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(149,34,118)"
                        }
                    }
                },
                {
                    "name": "its",
                    "value": 2454,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(117,113,9)"
                        }
                    }
                },
                {
                    "name": "new",
                    "value": 2451,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(57,110,69)"
                        }
                    }
                },
                {
                    "name": "series",
                    "value": 2449,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(150,29,154)"
                        }
                    }
                },
                {
                    "name": "elevation",
                    "value": 2433,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(150,86,155)"
                        }
                    }
                },
                {
                    "name": "birth",
                    "value": 2429,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(6,94,93)"
                        }
                    }
                },
                {
                    "name": "statement",
                    "value": 2404,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(3,52,145)"
                        }
                    }
                },
                {
                    "name": "visual",
                    "value": 2390,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(132,133,10)"
                        }
                    }
                },
                {
                    "name": "level",
                    "value": 2332,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(75,27,87)"
                        }
                    }
                },
                {
                    "name": "state",
                    "value": 2329,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(85,111,143)"
                        }
                    }
                },
                {
                    "name": "actor",
                    "value": 2312,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(133,82,149)"
                        }
                    }
                },
                {
                    "name": "publication",
                    "value": 2260,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(37,9,139)"
                        }
                    }
                },
                {
                    "name": "tell",
                    "value": 2251,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(58,46,90)"
                        }
                    }
                },
                {
                    "name": "above",
                    "value": 2217,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(18,131,78)"
                        }
                    }
                },
                {
                    "name": "from",
                    "value": 2152,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(43,141,61)"
                        }
                    }
                },
                {
                    "name": "us",
                    "value": 2119,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(82,38,8)"
                        }
                    }
                },
                {
                    "name": "awards",
                    "value": 2098,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(124,129,131)"
                        }
                    }
                },
                {
                    "name": "titled",
                    "value": 2073,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(139,131,48)"
                        }
                    }
                },
                {
                    "name": "artwork",
                    "value": 2050,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(122,26,97)"
                        }
                    }
                },
                {
                    "name": "associated",
                    "value": 2014,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(128,119,49)"
                        }
                    }
                },
                {
                    "name": "release",
                    "value": 1992,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(140,68,16)"
                        }
                    }
                },
                {
                    "name": "f.c.",
                    "value": 1983,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(5,84,156)"
                        }
                    }
                },
                {
                    "name": "equal",
                    "value": 1945,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(94,51,147)"
                        }
                    }
                },
                {
                    "name": "before",
                    "value": 1939,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(150,115,3)"
                        }
                    }
                },
                {
                    "name": "duration",
                    "value": 1938,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(85,0,103)"
                        }
                    }
                },
                {
                    "name": "located",
                    "value": 1899,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(108,102,15)"
                        }
                    }
                },
                {
                    "name": "john",
                    "value": 1880,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(109,26,90)"
                        }
                    }
                },
                {
                    "name": "native",
                    "value": 1859,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(68,88,147)"
                        }
                    }
                },
                {
                    "name": "released",
                    "value": 1847,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(128,17,146)"
                        }
                    }
                },
                {
                    "name": "america",
                    "value": 1827,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(23,91,125)"
                        }
                    }
                },
                {
                    "name": "among",
                    "value": 1821,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(137,105,158)"
                        }
                    }
                },
                {
                    "name": "english",
                    "value": 1819,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(134,80,32)"
                        }
                    }
                },
                {
                    "name": "greater",
                    "value": 1807,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(108,50,126)"
                        }
                    }
                },
                {
                    "name": "region",
                    "value": 1730,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(25,135,77)"
                        }
                    }
                },
                {
                    "name": "national",
                    "value": 1716,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(49,124,114)"
                        }
                    }
                },
                {
                    "name": "founded",
                    "value": 1707,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(18,134,124)"
                        }
                    }
                },
                {
                    "name": "genre",
                    "value": 1693,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(40,95,89)"
                        }
                    }
                },
                {
                    "name": "music",
                    "value": 1692,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(13,85,150)"
                        }
                    }
                },
                {
                    "name": "title",
                    "value": 1681,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(121,142,29)"
                        }
                    }
                },
                {
                    "name": "border",
                    "value": 1680,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(47,111,101)"
                        }
                    }
                },
                {
                    "name": "role",
                    "value": 1662,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(114,145,77)"
                        }
                    }
                },
                {
                    "name": "point",
                    "value": 1643,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(68,107,32)"
                        }
                    }
                },
                {
                    "name": "club",
                    "value": 1605,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(3,71,75)"
                        }
                    }
                },
                {
                    "name": "higher",
                    "value": 1561,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(128,5,113)"
                        }
                    }
                },
                {
                    "name": "received",
                    "value": 1554,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(27,123,106)"
                        }
                    }
                },
                {
                    "name": "episodes",
                    "value": 1549,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(30,4,60)"
                        }
                    }
                },
                {
                    "name": "start",
                    "value": 1542,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(91,16,125)"
                        }
                    }
                },
                {
                    "name": "team",
                    "value": 1541,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(73,155,147)"
                        }
                    }
                },
                {
                    "name": "body",
                    "value": 1528,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(36,4,11)"
                        }
                    }
                },
                {
                    "name": "year",
                    "value": 1510,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(86,119,120)"
                        }
                    }
                },
                {
                    "name": "capital",
                    "value": 1493,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(8,17,64)"
                        }
                    }
                },
                {
                    "name": "part",
                    "value": 1440,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(140,0,29)"
                        }
                    }
                },
                {
                    "name": "twinned",
                    "value": 1405,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(150,104,115)"
                        }
                    }
                },
                {
                    "name": "postal",
                    "value": 1401,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(153,6,29)"
                        }
                    }
                },
                {
                    "name": "television",
                    "value": 1373,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(6,48,124)"
                        }
                    }
                },
                {
                    "name": "square",
                    "value": 1348,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(45,100,44)"
                        }
                    }
                },
                {
                    "name": "it",
                    "value": 1335,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(121,18,149)"
                        }
                    }
                },
                {
                    "name": "people",
                    "value": 1333,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(26,108,55)"
                        }
                    }
                },
                {
                    "name": "smaller",
                    "value": 1325,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(10,118,25)"
                        }
                    }
                },
                {
                    "name": "york",
                    "value": 1324,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(55,5,76)"
                        }
                    }
                },
                {
                    "name": "character",
                    "value": 1320,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(136,92,132)"
                        }
                    }
                },
                {
                    "name": "fewer",
                    "value": 1310,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(91,144,62)"
                        }
                    }
                },
                {
                    "name": "smallest",
                    "value": 1287,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(127,79,99)"
                        }
                    }
                },
                {
                    "name": "larger",
                    "value": 1283,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(0,124,120)"
                        }
                    }
                },
                {
                    "name": "human",
                    "value": 1265,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(81,91,59)"
                        }
                    }
                },
                {
                    "name": "label",
                    "value": 1265,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(72,134,39)"
                        }
                    }
                },
                {
                    "name": "place",
                    "value": 1210,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(106,69,84)"
                        }
                    }
                },
                {
                    "name": "production",
                    "value": 1192,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(37,19,135)"
                        }
                    }
                },
                {
                    "name": "rock",
                    "value": 1184,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(132,106,12)"
                        }
                    }
                },
                {
                    "name": "college",
                    "value": 1176,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(156,42,108)"
                        }
                    }
                },
                {
                    "name": "there",
                    "value": 1176,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(64,79,26)"
                        }
                    }
                },
                {
                    "name": "subscribers",
                    "value": 1171,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(102,157,129)"
                        }
                    }
                },
                {
                    "name": "largest",
                    "value": 1163,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(69,41,68)"
                        }
                    }
                },
                {
                    "name": "children",
                    "value": 1139,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(121,49,4)"
                        }
                    }
                },
                {
                    "name": "animated",
                    "value": 1137,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(155,147,2)"
                        }
                    }
                },
                {
                    "name": "fips",
                    "value": 1135,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(51,93,102)"
                        }
                    }
                },
                {
                    "name": "video",
                    "value": 1119,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(154,39,136)"
                        }
                    }
                },
                {
                    "name": "other",
                    "value": 1108,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(138,92,109)"
                        }
                    }
                },
                {
                    "name": "sovereign",
                    "value": 1099,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(131,27,51)"
                        }
                    }
                },
                {
                    "name": "under",
                    "value": 1097,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(141,129,28)"
                        }
                    }
                },
                {
                    "name": "director",
                    "value": 1096,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(149,94,39)"
                        }
                    }
                },
                {
                    "name": "david",
                    "value": 1078,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(108,158,53)"
                        }
                    }
                },
                {
                    "name": "company",
                    "value": 1077,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(92,79,65)"
                        }
                    }
                },
                {
                    "name": "shares",
                    "value": 1073,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(136,142,27)"
                        }
                    }
                },
                {
                    "name": "division",
                    "value": 1068,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(119,93,62)"
                        }
                    }
                },
                {
                    "name": "cantic-id",
                    "value": 1066,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(26,41,6)"
                        }
                    }
                },
                {
                    "name": "seasons",
                    "value": 1061,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(2,96,5)"
                        }
                    }
                },
                {
                    "name": "inception",
                    "value": 1053,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(38,63,18)"
                        }
                    }
                },
                {
                    "name": "american",
                    "value": 1049,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(45,78,125)"
                        }
                    }
                },
                {
                    "name": "classification",
                    "value": 1017,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(126,51,50)"
                        }
                    }
                },
                {
                    "name": "do",
                    "value": 1017,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(100,37,1)"
                        }
                    }
                },
                {
                    "name": "kingdom",
                    "value": 1016,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(102,91,67)"
                        }
                    }
                },
                {
                    "name": "relation",
                    "value": 1010,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(127,62,123)"
                        }
                    }
                },
                {
                    "name": "died",
                    "value": 1005,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(115,147,37)"
                        }
                    }
                },
                {
                    "name": "subject",
                    "value": 981,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(64,40,53)"
                        }
                    }
                },
                {
                    "name": "feature",
                    "value": 977,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(55,4,48)"
                        }
                    }
                },
                {
                    "name": "established",
                    "value": 971,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(134,19,144)"
                        }
                    }
                },
                {
                    "name": "actress",
                    "value": 968,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(53,1,23)"
                        }
                    }
                },
                {
                    "name": "territorial",
                    "value": 954,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(72,54,15)"
                        }
                    }
                },
                {
                    "name": "tv",
                    "value": 953,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(149,91,50)"
                        }
                    }
                },
                {
                    "name": "supporting",
                    "value": 947,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(129,17,126)"
                        }
                    }
                },
                {
                    "name": "contains",
                    "value": 938,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(34,158,76)"
                        }
                    }
                },
                {
                    "name": "golden",
                    "value": 919,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(107,67,11)"
                        }
                    }
                },
                {
                    "name": "occupation",
                    "value": 919,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(37,13,75)"
                        }
                    }
                },
                {
                    "name": "outstanding",
                    "value": 917,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(150,61,79)"
                        }
                    }
                },
                {
                    "name": "game",
                    "value": 915,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(100,49,145)"
                        }
                    }
                },
                {
                    "name": "record",
                    "value": 915,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(104,154,152)"
                        }
                    }
                },
                {
                    "name": "michael",
                    "value": 912,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(156,130,52)"
                        }
                    }
                },
                {
                    "name": "lower",
                    "value": 909,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(23,62,43)"
                        }
                    }
                },
                {
                    "name": "emmy",
                    "value": 891,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(35,91,57)"
                        }
                    }
                },
                {
                    "name": "minutes",
                    "value": 880,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(130,95,132)"
                        }
                    }
                },
                {
                    "name": "entity",
                    "value": 864,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(49,37,46)"
                        }
                    }
                },
                {
                    "name": "original",
                    "value": 863,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(63,142,124)"
                        }
                    }
                },
                {
                    "name": "james",
                    "value": 858,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(76,33,160)"
                        }
                    }
                },
                {
                    "name": "named",
                    "value": 858,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(141,58,52)"
                        }
                    }
                },
                {
                    "name": "won",
                    "value": 857,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(85,35,83)"
                        }
                    }
                },
                {
                    "name": "instagram",
                    "value": 854,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(113,153,4)"
                        }
                    }
                },
                {
                    "name": "primetime",
                    "value": 846,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(13,73,123)"
                        }
                    }
                },
                {
                    "name": "education",
                    "value": 844,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(2,3,65)"
                        }
                    }
                },
                {
                    "name": "birthplace",
                    "value": 838,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(68,61,106)"
                        }
                    }
                },
                {
                    "name": "voice",
                    "value": 833,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(8,119,43)"
                        }
                    }
                },
                {
                    "name": "producer",
                    "value": 826,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(153,80,102)"
                        }
                    }
                },
                {
                    "name": "germany",
                    "value": 825,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(113,130,138)"
                        }
                    }
                },
                {
                    "name": "demonym",
                    "value": 800,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(160,6,23)"
                        }
                    }
                },
                {
                    "name": "count",
                    "value": 799,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(132,73,91)"
                        }
                    }
                },
                {
                    "name": "subreddit",
                    "value": 794,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(39,85,106)"
                        }
                    }
                },
                {
                    "name": "school",
                    "value": 789,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(61,39,15)"
                        }
                    }
                },
                {
                    "name": "having",
                    "value": 788,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(135,51,21)"
                        }
                    }
                }
            ],
            "drawOutOfBound": false,
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "text": "Question Word Cloud",
            "left": "center",
            "textStyle": {
                "color": "#000",
                "fontSize": 25
            }
        }
    ]
};
    chart.setOption(option);
    // charts.push(chart);
    // maskImage.onload = function () {
    //     chart.setOption(option);
    // }
    // maskImage.src = '../img/logo.png';


  $(window).resize(function () {
    charts.forEach(function(c) {
      c.resize();
    });
  });

})(jQuery); // End of use strict
