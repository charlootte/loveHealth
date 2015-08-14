KISSY.config({
        packages:[{
            name:"kg",
            path:"http://g.tbcdn.cn/",
            combine:true
        }]
    });
KISSY.use("kg/kcharts/6.0.0/linechart/index",function(S,LineChart){
  var linechart = new LineChart({
      renderTo:"#J_Xuetang",
      canvasAttr:{
        x:100,
        y:35,
        width:350,
        height:180
      },
      points:{
        attr:{
          type:"auto"
        }
      },
      yLabels:{
        css:{
          "marginLeft":"-4px",
          "font-family":"Microsoft Yahei",
          "font-size":"10px"
        }
      },
      xLabels:{
        css:{
          "font-family":"Microsoft Yahei",
           "font-size":"10px"
        }
      },
      title:{
              content:"血糖走势图",
              css:{
                "font-size":"16px",
                "font-weight":"normal",
                "font-family":"Microsoft Yahei"
              }
            },
            anim:{},
           
            lineType:"arc",
       xAxis: {
          text:['5','10','15','20','25','30']
            },
            yAxis:{
              num:7
            },
          comparable:true,
      series:[{
                text: '血糖1',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                text: '血糖2',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }
            , {
                text: '血糖3',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                text: '血糖4',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }
            ],
      legend:{
        isShow:true,y:-10
      },
      tip:{
        offset:{
                    x:10,
                    y:10
                },
        template:function(e){
          var html = "";
          for(var i in e.datas){
            html +="<span style='font-size:10px;color:"+e.datas[i]['color']+"'>"+e.datas[i]['text'] +" "+e.datas[i]['y']+"g</span><br/>"
          }
          return html;
        }
      }
  });


var linechart2 = new LineChart({
      renderTo:"#J_Ydliang",
      canvasAttr:{
        x:100,
        y:35,
        width:350,
        height:180
      },
      points:{
        attr:{
          type:"auto"
        }
      },
      yLabels:{
        css:{
          "marginLeft":"-4px",
          "font-family":"Microsoft Yahei",
          "font-size":"10px"
        }
      },
      xLabels:{
        css:{
          "font-family":"Microsoft Yahei",
           "font-size":"10px"
        }
      },
      title:{
              content:"30天内运动量变化",
              css:{
                "font-size":"16px",
                "font-weight":"normal",
                "font-family":"Microsoft Yahei"
              }
            },
            anim:{},
           
            lineType:"arc",
       xAxis: {
          text:['5','10','15','20','25','30']
            },
            yAxis:{
              num:7
            },
          comparable:true,
      series:[{
                text: '运动量1',
                data: [27,35,20,30,18,22,20,22]
            }, {
                text: '运动量2',
                data: [15,24,27,11,17,22,27,30]
            }
            ],
      legend:{
        isShow:true,y:-10
      },
      tip:{
        offset:{
                    x:10,
                    y:10
                },
        template:function(e){
          var html = "";
          for(var i in e.datas){
            html +="<span style='font-size:10px;color:"+e.datas[i]['color']+"'>"+e.datas[i]['text'] +" "+e.datas[i]['y']+" km</span><br/>"
          }
          return html;
        }
      }
  });

});