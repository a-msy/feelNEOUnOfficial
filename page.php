<?php
/**
 * Template Name: page
 */
get_header();
?>
<section id="primary" class="content-area">
    <main id="main" class="site-main">
        <div class="container">
            <div>
                <!-- パンくずリスト -->
                <?php
                breadcrumb(); //パンくず
                ?>
                <!-- パンくずリストここまで -->
            </div>
            <div class="row">
                <div class="col-md-3 content-box">
                    <div class="content-box-inner">
                        <div class="content-title">
                            <h1><?php the_title(); ?></h1>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <?php
                    if (have_posts()) :
                        while (have_posts()) : the_post();
                            ?>
                            <section>
                                <?php the_content(); ?>
                            </section>
                        <?php
                        endwhile;
                    endif;
                    ?>
                </div>
            </div>
        </div>
    </main>
</section>
<?php get_footer(); ?>

