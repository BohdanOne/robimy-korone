<script>
	import { getImageSrc } from '$lib/utils/cloudinary-client';

	export let publicId = '';
	export let alt = '';
	export let width = 250;
	export let height = 250;

	$: src = getImageSrc(publicId, width, height);
</script>

<figure class="image-container" style:width={`${width}px`}>
	<img {src} {alt} title={alt} {width} {height} loading="lazy"/>
	<figcaption>{alt}</figcaption>
</figure>

<style>
	figure {
		position: relative;
    flex-shrink: 0;
	}

	figcaption {
		position: absolute;
		inset: 0;
		padding: var(--gutter-s);
		background: var(--col-bg-heavy);
		background: linear-gradient(
			0deg,
			rgba(var(--bg-heavy), 0.90) 0%,
			rgba(var(--bg-light), 0.87) 77%
		);

    opacity: 0;
    transition: opacity var(--transition);
	}

  figure:hover figcaption,
  figure:focus-visible figcaption{
    opacity: 1;
  }
</style>
