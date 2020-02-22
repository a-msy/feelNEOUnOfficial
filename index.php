<?php get_header(); ?>
<main>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-3 content-box">
                    <div class="content-box-inner">
                        <div class="content-title">
                            <h1>コンテンツ一覧</h1>
                            <p>- Contents -</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <a href="<?php echo home_url('/lyrics/'); ?>" class="col-md-12 content-lyrics">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-6 content-text my-parts">
                                    <span>
                                        <h2>歌詞</h2>
                                        <p>- Lyrics -</p>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a href="<?php echo home_url('/movies/'); ?>" class="col-md-12 content-videos">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-6 content-text my-parts">
                                    <span>
                                        <h2>動画</h2>
                                        <p>- Movies -</p>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="schedule">
        <div class="container">
            <div class="row">
                <div class="col-md-3 content-box">
                    <div class="content-box-inner">
                        <div class="content-title">
                            <h1>スケジュール</h1>
                            <p>- Schedule -</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="latest-event-wrapper">
                        <div class="latest-event-wrapper-title">
                            直近のイベント情報
                        </div>
                        <div id="latest-event">
                            情報取得エラーか、情報取得に時間がかかっています。
                        </div>
                        <div class="slide">
                            <a id="detail" class="slide-btn">
                                ＋イベントの詳細を見る
                            </a>
                        </div>
                        <div class="slide-contents">
                        </div>
                    </div>
                    <div id="popup">
                        <div class="popup-close">×</div>
                        <div class="popup-title">タイトル</div>
                        <div class="popup-time-wrapper">
                            <span class="popup-time-title">日時</span><span class="popup-time">日時を書き込む</span>
                        </div>
                        <div class="popup-des-wrapper">
                            <div class="popup-des-title">説明</div>
                            <div class="popup-des">説明を書き込む</div>
                        </div>
                    </div>
                    <div id="calendar-view"></div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>