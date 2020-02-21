<?php
/**
 * Template Name: page
 */
get_header();
?>

<section id="primary" class="content-area">
	<main id="main" class="site-main">
<?php
if (have_posts()):
	while (have_posts()):
		the_post();
the_content();
endwhile;
endif;
?>

	</main>
</section>
<?php get_footer(); ?>

