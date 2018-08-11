$(function () {
    //布局（控制左边的高度随着右边高度的变化而变化）
    var leftHeight=$('.left').height();
    var middleHeight=$('.middle').height();
    if(leftHeight<middleHeight){
        $('.left').height(middleHeight);
    }
    //左边菜单点击后的样式变化
        function selectMenu(level1, level2) {
            if (level1) {
                var that = $('li[name="' + level1 + '"]');
                that.addClass('selected');
                var div = "<div class='selectedArrow'><span></span></div>";
                that.prepend(div);
            }
            if (level2) {
                var that = $('li[name="' + level2 + '"]');
                var div = "<div class='selectedArrow'><span></span></div>";
                that.prepend(div);
            }
        }
        window.selectMenu = selectMenu;//selectMenu将该函数变为全局函数


    //在线选课(培训类型)
    $('.trainType li').click(function () {
        $(this).addClass('liBack').siblings('li').removeClass('liBack');
    });
    //我的证书（点击查看）
    $('.viewFlow a').click(function () {
        $('.procedure').show();
        $('.details').hide();
    });
    //我的证书（证书流程 返回证书列表）
    $('.flowCatalog a').click(function () {
        $('.procedure').hide();
        $('.details').show();
    });
    //我的证书（点击申请证书）
    $('.applyCertificate>a').click(function () {
        $('.details').hide();
        $('.submitApply').show();
    });

    //我的证书(提交证书申请 表单验证)
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    $('.formValidation').validationEngine({
        'ruleName': {
            'regex': reg, /* 正则表达式，如果正则能匹配内容表示通过 */
            'alertText': '验证不通过时的提示信息'
        }
    });
    //我的证书（提交申请 返回证书列表）
    $('.applyBrows a').click(function () {
        $('.submitApply').hide();
        $('.details').show();
    });
 
    //分页
    $('.paging>ul>li>a').eq(2).addClass('pagingClickBack');
    $('.paging>ul>li>a').click(function () {
        $(this).addClass('pagingClickBack').parent().siblings().children('a').removeClass('pagingClickBack');
    });

  
    //我的培训>表格
    $('.trainDetails tr:odd').attr('style','background-color: #ebebeb');

    //我的培训 > 我的培训详情
    $('.trainInfoLeft > ul > li:not(:first-child)').attr("style","padding-left:27px");
    $('.trainInfoLeft > ul > li:last-child').attr("style","border:0;padding-left: 29px ;width: 199px;");

    //在线选课 详情页
    $('.curriculumList ul li:even').attr("style","background-color:#ebebeb;");

    //在线学习  继续学习
    $('.commentSee').toggle(function(){
        $(this).prev().find('span p').slideDown('slow');
        $(this).html('收起');
    },function(){
        $(this).prev().find('span p').slideUp('slow');
        $(this).html('展开');
    });
    //个人账户  设置支付密码（弹出框）
    $('#paymentPassword .continueLearning').click(function() {
        if ($('#paymentPassword form').validationEngine('validate')) {
            $(".close-reveal-modal").click();
            $('#security').reveal();

            $("#security .continueLearning").click(function () {
                if($('#security form').validationEngine('validate')) {
                    $(".close-reveal-modal").click();
                }
            });
        }
    });

});

