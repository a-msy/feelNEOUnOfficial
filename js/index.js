window.onload = $(function () {
    var today = new Date();
    var weekday_list = ['日', '月', '火', '水', '木', '金', '土'];
    var title = [];
    var des = [];
    var time = [];//直近のイベントを探すためのもの
    var start = [];//直近のイベントの開催日時を入れるためのもの
    var i = 0;
    var opts = {
        defaultView: 'month',
        contentHeight: 'auto',//---- 高さを自動調整
        header: {
            left: 'prev',
            center: 'title',
            right: 'next',
        },
        googleCalendarApiKey: 'AIzaSyCfxhKTh3YPPh_TZ7QiyfXgmj4oXxP7HYA',
        events: {
            googleCalendarId: 'hugpro@hughug.co.jp'
        },
        eventClick: function (info, jsEvent) {
            //初期化
            $('.popup-title').text('タイトル');
            $('.popup-des').html('特にありません');
            // 日付から曜日を算出
            var clickday = new Date(info.start._i);
            var weekday = '(' + weekday_list[clickday.getDay()] + '曜日)';
            if (info.description) {
                var textArray = info.description.split(/\r\n|\r|\n|<br>|<\/br>|<p>|<\/p>|<pre>|<\/pre>/);
                for (var i = 0; i < textArray.length; i++) {
                    if (textArray[i].match(/会場|住所|場所/)) {
                        var venue = textArray[i].replace(/\s/g, '');
                        break;
                    }
                }
                $('.popup-des').html(info.description.replace(/<pre>/g, '<p>').replace(/<\/pre>/g, '</p>').replace(/\n/g, '<br>').replace(/会場|住所|場所/, '<a href = https://www.google.com/maps/search/?api=1&query=' + venue + '>会場</a>'));
            }
            $('#popup').css('margin-top', ($('#calendar-view').height() / 2) - 100);
            $('#popup').show();
            $('.popup-title').text(info.title);
            $('.popup-time').text(clickday.getFullYear() + "年 "
                + (clickday.getMonth() + 1) + "月 "
                + clickday.getDate() + "日" + weekday);
            $('.popup-des').scrollTop(0);
            //console.log(info.start);
            //alert('Detail: ' + info.description);
            //alert('Event: ' + info.title);
            //alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            //alert('View: ' + info.view.type);
            return false;
        },
        eventAfterRender: function (info, element) {
            //色変更
            if ((/TV【feelNEOメジャーデビューへの道】/.test(info.title))) {
                $(element).css('background-color', '#FFB74D');
            }
            if ((/TV【feelNEOの3分30秒】/.test(info.title))) {
                $(element).css('background-color', '#BCAAA4');
            }
            if ((/【ラジオ】/.test(info.title))) {
                $(element).css('background-color', '#F06292');
            }
            //直近のイベントを取得
            if (today.getTime() < Date.parse(info.start._i)) {
                //定期的なテレビとラジオははじく
                if (!(/TV【feelNEOの3分30秒】|【ラジオ】/.test(info.title))) {
                    time[i] = Date.parse(info.start._i);
                    start[i] = new Date(info.start._i);
                    title[i] = info.title;
                    des[i] = info.description;
                    i++;
                }
            }
        },
    };

    window.onload = $('#calendar-view').fullCalendar(opts);
    //カレンダーの描画が終わってから実行
    setTimeout(function () {
        if (des.length > 0) {
            //console.log(time);
            //console.log(des);
            var index = time.indexOf(Math.min.apply(null, time));
            //1行ずつに配列で区切る
            var textArray = des[index].split(/\r\n|\r|\n|<br>|<\/br>|<p>|<\/p>|<pre>|<\/pre>/);
            for (var i = 0; i < textArray.length; i++) {
                if (textArray[i].match(/会場|住所|場所/)) {
                    var venue = textArray[i].replace(/\s/g, '');
                    break;
                }
            }
            //直近のイベントの開催日時
            var latest_event_weekday = '(' + weekday_list[start[index].getDay()] + '曜日)';
            //会場の部分はリンクに変更、preもpに変更
            $('#latest-event').html(title[index] + '<br>日時:' + start[index].getFullYear() + "年 "
                + (start[index].getMonth() + 1) + "月 "
                + start[index].getDate() + "日" + latest_event_weekday);// '<br>'

            $('.slide-contents').html(des[index].replace(/会場|住所|場所/, '<a href = https://www.google.com/maps/search/?api=1&query=' + venue + '>会場</a>').replace(/<pre>/g, '<p>').replace(/<\/pre>/g, '</p>').replace(/\n/g, '<br>'));
        }
    }, 700);
});

window.onload = $(document).on('click', '.popup-close', function () {
    $('#popup').hide();
});
<!--直近イベントの詳細を見るときだけに使用 -->
window.onload = jQuery(function ($) {
    jQuery(".slide-btn").click(function () {
        jQuery($(this).parent().next(".slide-contents")).animate({height: "toggle", opacity: "toggle"}, "nomal");
        if($('#detail').text() === "－閉じる"){
            $('#detail').text("＋イベントの詳細を見る");
        }
        else{
            $('#detail').text("－閉じる");
        }
    });
});