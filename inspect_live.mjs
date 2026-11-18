async function inspectLiveFramer() {
  const res = await fetch('https://potential-enthusiasm-650039.framer.app/');
  const html = await res.text();
  
  // Find all component script links or chunk URLs
  const chunkUrls = [...html.matchAll(/src="(https:\/\/framerusercontent\.com\/modules\/[^"]+)"/g)].map(m => m[1]);
  console.log('Framer Modules/Chunks:', chunkUrls.slice(0, 10));

  // Find images and SVGs
  const allImages = [...html.matchAll(/https:\/\/framerusercontent\.com\/images\/[^"\s\)]+/g)].map(m => m[0]);
  console.log('Unique images:', [...new Set(allImages)]);
}
inspectLiveFramer();
