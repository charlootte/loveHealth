(function(S){
    S.config({
        packages:[{
            name:"kg",
            path:"http://g.tbcdn.cn/",
            combine:true
        }]
    });
	S.use('kg/kcharts/6.0.0/barchart/index',function(S,BarChart){
        var barchart = new BarChart({
			renderTo:"#J_Barchart",
            canvasAttr:{
                x:40,
                width:180,
                height:160
            },
			title:{
            	content:"最近5次燃烧的卡路里",
            	css:{
                "color":"#666",
                "font-size":"16px",
                "font-weight":"normal",
                "font-family":"Microsoft Yahei"
            	}
            },   
            // yLabels:{
            //     css:{
            //       "marginLeft":"-4px",
            //       "font-family":"Microsoft Yahei",
            //       "font-size":"10px"
            //     },
            //     //画垂直坐标
            //     template:function(index,text){
            //       //index 当前索引  text 内容
            //       return text + "Cal";
            //     }
            // },  
			xAxis: {
			 	text:['08.15','08.16','08.17','08.18','08.19'],
                css:{
                    "font-size":"8px",
                    "color":"#666"
                }
            },
            yAxis:{
                min:0
            },
            xGrids:{
                isShow:false
            },
            yGrids:{
                isShow:false
            },
            xLabels:{
                template:function(index,text){
                    return text;
                }
            },
            bars:{
                barsRatio:0.5,
                barRatio:0.3
            },
			series:[{ 
                data: [23,10,56,89,43] 
            }],  
			tip:{
				template:"{{text}} {{y}} Cal",
				alignX:"center",
                css:{"border-color":"{COLOR}"},
				offset:{
					y:-10
				}
			},
            anim:{}
		});
        barchart.on("afterRender",function(){
            var points = barchart._points[0];
            var htmlPaper = barchart.getHtmlPaper();
            for(var i in points){
                htmlPaper.text(points[i]['x'],points[i]['y']-8,points[i]['dataInfo']['y'],"center","bottom").css({"color":"#666"});
            }
        })



        var barchart2 = new BarChart({
            renderTo:"#J_Barchart2",
            canvasAttr:{
                x:40,
                width:180,
                height:160
            },
            title:{
                content:"最近5次燃烧的卡路里",
                css:{
                "color":"#666",
                "font-size":"16px",
                "font-weight":"normal",
                "font-family":"Microsoft Yahei"
                }
            },    
            xAxis: {
                text:['08.15','08.16','08.17','08.18','08.19'],
                css:{
                    "font-size":"8px",
                    "color":"#666"
                }
            },
            yAxis:{
                min:0
            },
            xGrids:{
                isShow:false
            },
            yGrids:{
                isShow:false
            },
            xLabels:{
                template:function(index,text){
                    return text;
                }
            },
            bars:{
                barsRatio:0.5,
                barRatio:0.3
            },
            series:[{ 
                data: [56,10,26,89,93] 
            }],  
            tip:{
                template:"{{text}} {{y}} Cal",
                alignX:"center",
                css:{"border-color":"{COLOR}"},
                offset:{
                    y:-10
                }
            },
            anim:{}
        });
        barchart2.on("afterRender",function(){
            var points = barchart._points[0];
            var htmlPaper = barchart.getHtmlPaper();
            for(var i in points){
                htmlPaper.text(points[i]['x'],points[i]['y']-8,points[i]['dataInfo']['y'],"center","bottom").css({"color":"#666"});
            }
        })
	});
})(KISSY);