// 功能说明:
// 1.点击向右(左)的图标,平滑切换到下(上)一页
// 2.无限循环切换:第一页的上一页为最后页,最后一页的下一页是第一页
// 3.每隔3s自动滑动到下一页
// 4.当鼠标进入图片区域时,自动切换停止,当鼠标离开后,又开始自动切换美
// 5.切换页面时,下面的圆点也同步更新
// 6.点击圆点图标切换到对应的页 

$(function(){
    var $container = $('#container')
    var $list = $('#list')
    var $points = $('#pointsDiv>span')
    var $prev = $('#prev')
    var $next = $('#next')
    var PAGE_WIDTH = 600 //一页的宽度
    var TIME = 400 //翻页的持续时间
    var ITEM_TIME=20  //单元移动的间隔时间:

    //1.点击向右(左)的图标,平滑切换到下(上)一页
    $next.click(function(){
    //平滑翻到下一页
    nextPage(true)
    })

    $prev.click(function(){
    //平滑翻到上一页
    nextPage(false)
    })

    //平滑翻页
    //@param next
    //true ： 下一页
    //false： 上一页

    function nextPage (next){

       
        // 总的时间:TIME=400
        // 单元移动的间隔时间:ITEM_TIME=20
        // 总的偏移量:offset
        // 单元移动的偏移量 ：itemoffset = offset/(TIME/ITEM_TIME)

        //启动循环定时器不断更新$List的left,到达目标处停止定时器

        //总的偏移量:offset
        var offset = 0
        //计算offset
        offset=next? -PAGE_WIDTH : PAGE_WIDTH
        //计算单元移动的偏移量:itemoffset
        var itemOffset = offset/(TIME/ITEM_TIME)
        //得到当前的left值
        var currLeft = $list.position().left
        //计算出目标处的left值
        var targetLeft = currLeft + offset

        //启动循环定时器不断更新slist的left,到达目标处停止停止定时器
        var intervalid = setinterval(function () {
            //计算出最新的currLeft
            currLeft += itemOffset
            if(currLeft===targetLeft){    //到达目标位置
                //清除定时器
                clearInterval(intervalid)
            }
            //设置left
            $list.css('left', currLeft)
        },ITEM_TIME)
        
        
    }


})