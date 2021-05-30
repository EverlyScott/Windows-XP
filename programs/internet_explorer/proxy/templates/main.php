<?php if(isset($error_msg)){ ?>
	
	<div id="error">
		<p>Proxy Error: <?php echo strip_tags($error_msg); ?></p>
		<a href="<?php echo $url ?>" target="_blank">View original page</a>
	</div>
	
	<?php } ?>