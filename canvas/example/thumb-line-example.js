
var line;
if("function"==typeof require){
    line = require('../chart/line.js');
}else{
    line = new Line();
}

var ThumbLineExample = function(){
    var example ={};
    example.startTouch=line.startTouch;
    example.moveTouch=line.moveTouch;
    example.endTouch=line.endTouch;

    example.draw = function(){
        line.init('lineCanvas');
        var option = {
            thumb:{enable:true,zoom:5},
            width:370,
            height:270,
            padding:{
                top:30,
                right:30,
                bottom:40,
                left:40
            },
            xtitle:'时间',
            ytitle:'mmHg',
            xdata:[
                {value:"10-20",sub:""},
                {value:"10-26",sub:""},
                {value:"11-12",sub:""},
                {value:"11-17",sub:""},
                {value:"11-23",sub:""},
                {value:"11-28",sub:""},
                {value:"12-01",sub:""},
                {value:"12-12",sub:""},
                {value:"12-27",sub:""},
                {value:"12-29",sub:""},
                {value:"01-04",sub:"2017"},
                {value:"01-09",sub:"2017"},
                {value:"01-18",sub:"2017"},
                {value:"01-26",sub:"2017"},
                {value:"01-29",sub:"2017"},
                {value:"02-03",sub:""},
                {value:"02-12",sub:""},
                {value:"02-19",sub:""},
                {value:"02-27",sub:""},
                {value:"03-11",sub:""}
            ],
            series:[
                {
                    position:'up',
                    value:[
                        {value:115,color:'#ffde30'},
                        {value:117,color:'#ff9000'},
                        {value:126,color:'#45c01a'},
                        {value:136,color:'#ff3e3e'},
                        {value:123,color:'#2782d7'},
                        {value:125,color:'#45c01a'},
                        {value:115,color:'#ffde30'},
                        {value:117,color:'#ff9000'},
                        {value:126,color:'#45c01a'},
                        {value:136,color:'#ff3e3e'},
                        {value:123,color:'#2782d7'},
                        {value:125,color:'#45c01a'},
                        {value:115,color:'#ffde30'},
                        {value:117,color:'#ff9000'},
                        {value:126,color:'#45c01a'},
                        {value:136,color:'#ff3e3e'},
                        {value:123,color:'#2782d7'},
                        {value:125,color:'#45c01a'},
                        {value:115,color:'#ffde30'},

                        {value:117,color:'#ff9000'},
                        {value:126,color:'#45c01a'},
                        {value:136,color:'#ff3e3e'},
                        {value:125,color:'#45c01a'},
                        {value:123,color:'#2782d7'}
                    ]
                },
                {
                    position:'down',
                    value:[
                        {value:97,color:'#ffde30'},
                        {value:84,color:'#ff9000'},
                        {value:78,color:'#45c01a'},
                        {value:92,color:'#ff3e3e'},
                        {value:84,color:'#2782d7'},
                        {value:85,color:'#45c01a'},
                        {value:97,color:'#ffde30'},
                        {value:84,color:'#ff9000'},
                        {value:78,color:'#45c01a'},
                        {value:92,color:'#ff3e3e'},
                        {value:84,color:'#2782d7'},
                        {value:85,color:'#45c01a'},
                        {value:97,color:'#ffde30'},
                        {value:84,color:'#ff9000'},
                        {value:78,color:'#45c01a'},
                        {value:92,color:'#ff3e3e'},
                        {value:84,color:'#2782d7'},
                        {value:85,color:'#45c01a'},
                        {value:97,color:'#ffde30'},

                        {value:84,color:'#ff9000'},
                        {value:78,color:'#45c01a'},
                        {value:92,color:'#ff3e3e'},
                        {value:84,color:'#2782d7'},
                        {value:85,color:'#45c01a'}
                    ]
                }
            ]
        };
        line.setOption(option);
    };

    return example;
};

module.exports = ThumbLineExample();