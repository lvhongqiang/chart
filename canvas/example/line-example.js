
var line;
if("function"==typeof require){
    line = require('../chart/line.js');
}else{
    line = new Line();
}

var LineExample = function(){
    var example ={};
    example.startTouch=line.startTouch;
    example.moveTouch=line.moveTouch;
    example.endTouch=line.endTouch;

    example.draw = function(){
        line.init('lineCanvas');
        var option = {
            thumb:{enable:false,zoom:5},
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
                {value:'09:00',sub:'10-20'},
                {value:'11:20',sub:'11-13'},
                {value:'08:30',sub:'11-23'},
                {value:'12:20',sub:'12-11'},
                {value:'13:15',sub:'12-19'},
                {value:'14:00',sub:'12-25'},
                {value:'09:00',sub:'10-20'},
                {value:'11:20',sub:'11-13'},
                {value:'08:30',sub:'11-23'},
                {value:'12:20',sub:'12-11'},
                {value:'13:15',sub:'12-19'},
                {value:'14:00',sub:'12-25'},
                {value:'09:00',sub:'10-20'},
                {value:'11:20',sub:'11-13'},
                {value:'08:30',sub:'11-23'},
                {value:'12:20',sub:'12-11'},
                {value:'13:15',sub:'12-19'},
                {value:'14:00',sub:'12-25'},
                {value:'09:00',sub:'10-20'},

                {value:'11:20',sub:'11-13'},
                {value:'08:30',sub:'11-23'},
                {value:'12:20',sub:'12-11'},
                {value:'13:15',sub:'12-19'},
                {value:'14:00',sub:'12-25'},
                {value:'09:00',sub:'10-20'},
                {value:'11:20',sub:'11-13'},
                {value:'08:30',sub:'11-23'},
                {value:'12:20',sub:'12-11'},
                {value:'13:15',sub:'12-19'},
                {value:'14:00',sub:'12-25'},
                {value:'09:00',sub:'10-20'},
                {value:'11:20',sub:'11-13'},
                {value:'08:30',sub:'11-23'},
                {value:'12:20',sub:'12-11'},
                {value:'13:15',sub:'12-19'},
                {value:'14:00',sub:'12-25'},
                {value:'09:00',sub:'10-20'},
                {value:'11:20',sub:'11-13'},
                {value:'08:30',sub:'11-23'},
                {value:'12:20',sub:'12-11'},
                {value:'13:15',sub:'12-19'},

                {value:'14:00',sub:'12-25'},
                {value:'09:00',sub:'10-20'},
                {value:'11:20',sub:'11-13'},
                {value:'08:30',sub:'11-23'},
                {value:'12:20',sub:'12-11'},
                {value:'13:15',sub:'12-19'},
                {value:'14:00',sub:'12-25'},
                {value:'14:00',sub:'12-25'}
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
                        {value:123,color:'#2782d7'},

                        {value:125,color:'#45c01a'},
                        {value:115,color:'#ffde30'},
                        {value:117,color:'#ff9000'},
                        {value:126,color:'#45c01a'},
                        {value:136,color:'#ff3e3e'},
                        {value:123,color:'#2782d7'},
                        {value:125,color:'#45c01a'},
                        {value:125,color:'#45c01a'}
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

                        {value:85,color:'#45c01a'},
                        {value:97,color:'#ffde30'},
                        {value:84,color:'#ff9000'},
                        {value:78,color:'#45c01a'},
                        {value:92,color:'#ff3e3e'},
                        {value:84,color:'#2782d7'},
                        {value:85,color:'#45c01a'},
                        {value:85,color:'#45c01a'}
                    ]
                }
            ]
        };
        line.setOption(option);
    };

    return example;
};

module.exports = LineExample();