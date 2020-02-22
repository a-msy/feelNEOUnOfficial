<?php
/**
 * Template Name: page
 * 固定ページに使用します
 */
get_header();
?>
    <main id="main" class="site-main">
             <header class="article-header entry-header page-header">
                <!-- パンくずリスト -->
                <?php
                breadcrumb(); //パンくず
                ?>
                <!-- パンくずリストここまで -->
            </header>
            <div class="row">
                <div class="col-md-3 content-box content-box-page">
                    <div class="content-box-inner content-box-inner-page">
                        <div class="content-title">
                            <h1><?php the_title(); ?></h1>
			　　<p><?php if( is_page(9) ){
				    echo '- Movies -';
				} else if( is_page(2) ){
				    echo '- Sample -';
				}
				?></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 page-content-wrapper">
		<section id="primary" class="entry-content-page">
                    <?php
                    if (have_posts()) :
                        while (have_posts()) : the_post();
                            ?>
                                <?php the_content(); ?>
                        <?php
                        endwhile;
                    endif;
                    ?>
                </div>
            </div>
    </main>
</section>
<?php get_footer(); ?>