$(document).ready(function(){

    $("#tab1").addClass("selected"); //智能配件 
    $("#currentA").addClass("select-a");  //运动量
    $("#date-tab li:eq(0)").addClass("select-li"); //当天
    $("#date-tab span:eq(0)").show();  //当天+绿三角


    $("#slide-down-list").on({
        click:function(){
            $(".Id-infor").slideToggle("slow");
        },
        blur:function(){
            $(".Id-infor").slideUp("slow");
        }
    });     //header 下拉列表


    $(".tabLi").mouseenter(function(){   //智能配件 手机 tab选项卡点击事件
        var b=$("#zhiNengPJ");
        var c=$("#Phone");
        var d=$("#tab1");
        var e=$("#tab2");
             
        d.click(function(){
            d.addClass("selected");
            e.removeClass("selected");
            b.show();
            c.hide();
        });
        e.click(function(){
            e.addClass("selected");
            d.removeClass("selected");
            b.hide();
            c.show();
        });
    });  

        
    $("#data-cont li").click(function(){ //运动量 血压 tab选项卡变色
        var a=$("#data-cont li"),
            n=$(this).index(),
            b=$(".tishi"),
            c=$(".yundongliang"),
            d=$(".weight"),
            e=$(".xueya"),
            f=$(".xuetang");
                
        a.removeClass("select-a");
        $(this).addClass("select-a");
        switch(n){
            case 0: c.show();
                    d.hide();
                    e.hide();
                    f.hide();
                    break;
            case 1: d.show();
                    c.hide();
                    e.hide();
                    f.hide();
                    break;
            case 2: e.show();
                    d.hide();
                    c.hide();
                    f.hide();
                    break;
            case 3: f.show();
                    d.hide();
                    e.hide();
                    c.hide();
                    break;
            default:break;
        } 

    }); 


    $("#date-tab li").click(function(){    //当天 7天 tab选项卡 
        var a=$("#date-tab li"),
            b=$("#date-tab span"),
            c=$(this),
            d=$(".date-triangle"),
            n=$(this).index(),
            e=$(".dangtian"),
            f=$(".7t"),
            g=$(".30t");

        a.removeClass("select-li");
        d.hide();
        c.addClass("select-li");
        b.eq(n).show();

        switch(n){
            case 0: e.show();
                    f.hide();
                    g.hide();
                    break;
            case 1: f.show();
                    e.hide();
                    g.hide();
                    break;
            case 2: g.show();
                    f.hide();
                    e.hide();
                    break;
            default:break;
        }

    }); 

        

    $(".daren-list").hover(function(){  //达人榜tab选项卡
        var a=$(".daren-yes2day"),
            b=$(".daren-2day"),
            c=$(".daren-7day"),
            d=$(".daren-allday"),
            e=$(".daren-list1"),
            f=$(".daren-list2"),
            g=$(".daren-list3"),
            h=$(".daren-list4");
        e.click(function(){
            a.show();
            b.hide();
            c.hide();
            d.hide();
            e.css("background","#669900");
            e.css("color","#fff");
            f.css("background","#E6E6FA");
            f.css("color","#000");
            g.css("background","#E6E6FA");
            g.css("color","#000");
            h.css("background","#E6E6FA");
            h.css("color","#000");
        });
        f.click(function(){
            b.show();
            a.hide();
            c.hide();
            d.hide();
            f.css("background","#669900");
            f.css("color","#fff");
            e.css("background","#E6E6FA");
            e.css("color","#000");
            g.css("background","#E6E6FA");
            g.css("color","#000");
            h.css("background","#E6E6FA");
            h.css("color","#000");
        });
        g.click(function(){
            c.show();
            b.hide();
            a.hide();
            d.hide();
            g.css("background","#669900");
            g.css("color","#fff");
            f.css("background","#E6E6FA");
            f.css("color","#000");
            e.css("background","#E6E6FA");
            e.css("color","#000");
            h.css("background","#E6E6FA");
            h.css("color","#000");
        });
        h.click(function(){
            d.show();
            b.hide();
            c.hide();
            a.hide();
            h.css("background","#669900");
            h.css("color","#fff");
            f.css("background","#E6E6FA");
            f.css("color","#000");
            g.css("background","#E6E6FA");
            g.css("color","#000");
            e.css("background","#E6E6FA");
            e.css("color","#000");
        });
    }); 






         /*var setTime;
        function move(m){
            switch(m){
                case "fireball":var a=$("#fireball");
                                a.animate({top:"30px"},3000);
                                a.animate({top:"0"},3000);
                                break;
                case "moveball1":var b=$("#moveball1");
                                b.animate({bottom:"10px"},1000);
                                b.animate({bottom:"0px"},1000);
                                b.animate({top:"30px"},3000);
                                b.animate({top:"0px"},3000);
                                break;
                case "exercise":var c=$("#exercise");
                                c.animate({top:"60px"});
                                c.animate({top:"30px"},3000); 
                                c.animate({top:"60px"},3000);
                                break;
                case "moveball2":var d=$("#moveball2");
                                d.animate({top:"80px"});
                                d.animate({top:"40"},4000);
                                d.animate({top:"80"},4000);
                                break;
                case "accumulation":var e=$("#accumulation");
                                   //e.animate({top:"10px"});
                                   e.animate({top:"50px"},5000);
                                   e.animate({top:"0"},5000);
                                   break;
                default: break;
            }
            
        }

        function autoMoveStart(){
            setTime=setInterval(function(){
                move("fireball");
                move("moveball1");
                move("exercise");
                move("moveball2");
                move("accumulation");
                
            });
        }
        
        autoMoveStart();*/

});


