<!--主に歌詞ページで使用されます-->
<?php get_header(); ?>

	<main id="main class="site-main">
<?php
if (have_posts()):
    while (have_posts()):
	    the_post(); 
?>
	<article id="entry" <?php post_class('cf'); ?>>
<header class="article-header entry-header">
<!-- パンくずリスト -->
<?php
	breadcrumb(); //パンくず
?>
<!-- パンくずリストここまで -->
<h1 class="entry-title"><?php the_title(); //タイトル?></h1>
</header>
<section id="primary" class="entry-content">
<?php
        the_content();
    endwhile;
endif;
?>
</section>
</article>
</main>
<!--<?php previous_post_link();?>-->
<!--<?php next_post_link();?>-->
<?php get_footer();?>

