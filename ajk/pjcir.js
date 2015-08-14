KISSY.ready(function(S){
   KISSY.config({
            packages:[{
                name:"kg",
                path:"http://g.tbcdn.cn/",
                combine:true
            }]
        });
     KISSY.use("kg/kcharts/6.0.0/piechart/index,gallery/kcharts/1.1/tip/index",function(S,Pie,Tip){
       function pie1(){
         var data = [{
                        color:"#32addb",
                        label:"强度运动",
                        size:"10px",
                        data:2
                    },{ 
                        color:"#7dbe0f",
                        label:"适度运动", 
                        data:1 
                    },{ 
                        color:"#f09f11",
                        label:"轻度/静止", 
                        data:7
                    }];

         var cfg = {
           series:data,
           color:{
             initial:"#f00"
           },
           renderTo:"#J_Pjcir",
           cx:155,
           cy:145,
           rs:[40,60],
           donut:true,
           donutSize:40,
           interval:5,
           anim:{
             easing:'swing',
             duration:800
           }
         };
        var pie = new Pie(cfg), ms = 600;
        pie.on("beforeRender",custombg);

        function enter(e){
            var sector = e.sector
                , set = sector.get('set')
                , middleangle = sector.get('middleangle')
                , angel = middleangle*Math.PI/180
                , cx = this.get("cx")
                , cy = this.get("cy")
                , unit = 10
                , x = unit*Math.cos(angel)
                , y = -unit*Math.sin(angel)

            set.stop().animate({transform:'s1.1 1.1 '+cx+' '+ cy},ms,'elastic')
        }

        function leave(e){
            var sector = e.sector
                , set = sector.get('set')
            set.stop().animate({transform:""},ms,"elastic")
        }

        pie.on("mouseover",enter);
        pie.on("mouseout",leave);

         //自定义文字/背景
         function custombg(){
           var paper = pie.get("paper"),
           cx , cy;
           cx = pie.get("cx");
           cy = pie.get("cy");          
           //自定义文字
           var text = paper.text(cx,cy,"运动时长\n0分钟");
           text.toBack();
         }
       }
       pie1();


       function pie2(){
         var data = [{
                        color:"#32addb",
                        label:"强度运动",
                        data:4
                    },{ 
                        color:"#7dbe0f",
                        label:"适度运动", 
                        data:1 
                    },{ 
                        color:"#f09f11",
                        label:"轻度/静止", 
                        data:5
                    }];

        var cfg = {
            rs:[40,60],
            series:data,
            color:{
                initial:"#f00"
            },   
           renderTo:"#J_Pjcir2",
           padding:15,
           interval:5,
           cx:160,
           cy:145,          
           donut:true,
           donutSize:40,
           anim:{
             easing:'swing',
             duration:800
           }
         };
        var pie = new Pie(cfg), ms = 600;
        pie.on("beforeRender",custombg);

        function enter(e){
            var sector = e.sector
                , set = sector.get('set')
                , middleangle = sector.get('middleangle')
                , angel = middleangle*Math.PI/180
                , cx = this.get("cx")
                , cy = this.get("cy")
                , unit = 10
                , x = unit*Math.cos(angel)
                , y = -unit*Math.sin(angel)

            set.stop().animate({transform:'s1.1 1.1 '+cx+' '+ cy},ms,'elastic')
        }

        function leave(e){
            var sector = e.sector
                , set = sector.get('set')
            set.stop().animate({transform:""},ms,"elastic")
        }

        pie.on("mouseover",enter);
        pie.on("mouseout",leave);

         //自定义文字/背景
         function custombg(){
           var paper = pie.get("paper"),
           cx , cy;
           cx = pie.get("cx");
           cy = pie.get("cy")-70;          
           //自定义文字
           var text = paper.text(cx,cy,"运动时长\n0分钟");
           text.toBack();
         }
       }
       pie2();



       function pie3(){
         var data = [{
                        color:"#32addb",
                        data:3
                    },{ 
                        color:"#f09f11",
                        data:7
                    }];

         var cfg = {
           series:data,
           color:{
             initial:"#f00"
           },
           renderTo:"#J_WeekGrade",
           cx:150,
           cy:90,
           rs:[40,60],
           donut:true,
           donutSize:40,
           interval:5,
           anim:{
             easing:'swing',
             duration:800
           }
         };
        var pie = new Pie(cfg), ms = 600;
        pie.on("beforeRender",custombg);
        function enter(e){
            var sector = e.sector
                , set = sector.get('set')
                , middleangle = sector.get('middleangle')
                , angel = middleangle*Math.PI/180
                , cx = this.get("cx")
                , cy = this.get("cy")
                , unit = 10
                , x = unit*Math.cos(angel)
                , y = -unit*Math.sin(angel)

            set.stop().animate({transform:'s1.1 1.1 '+cx+' '+ cy},ms,'elastic')
        }

        function leave(e){
            var sector = e.sector
                , set = sector.get('set')
            set.stop().animate({transform:""},ms,"elastic")
        }

        pie.on("mouseover",enter);
        pie.on("mouseout",leave);
        function custombg(){
           var paper = pie.get("paper"),
           cx , cy;
           cx = pie.get("cx");
           cy = pie.get("cy");          
           //自定义文字
           var text = paper.text(cx,cy,"计划完成度");
           text.toBack();
         }
       }
       pie3();
     });
});
    
   
   