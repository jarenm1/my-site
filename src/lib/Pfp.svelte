<script>
  export let src = '/pfp.jpg'; // Default image, change as needed
  export let alt = 'Profile Picture';
</script>

<img
  class="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-[320px] lg:h-[320px] object-cover border-4 border-white shadow-lg"
  {src}
  {alt}
/>

<style>
/* Ensures the image is a perfect circle and responsive */
img {
  display: block;
  margin: 0 auto;
}
</style>
