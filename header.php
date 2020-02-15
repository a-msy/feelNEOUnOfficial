<!DOCTYPE html>
<html>
<head>
    <?php wp_head(); ?>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">

    <title>feelNEO unofficial Fan Site</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700" rel="stylesheet">
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- googlecalender -->
    <link rel='stylesheet' href='<?php bloginfo('template_directory'); ?>/css/fullcalendar.css' />
    <!-- googlecalenderここまで -->
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>?<?php echo date('Ymd-Hi'); ?>" type="text/css">
    <?php wp_head(); ?>
</head>
<body>
<div class="top">
    <img src="<?php bloginfo('template_directory'); ?>/img/top.jpg">
</div>
<nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
        <a class="navbar-brand" href="#">FeelNEO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                aria-expanded="false" aria-label="ナビゲーションの切替">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">VIDEOS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">LYRIC</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">SCHEDULE</a>
                </li>
            </ul>
        </div>
    </div>
</nav>