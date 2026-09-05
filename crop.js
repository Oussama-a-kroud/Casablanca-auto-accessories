import { Jimp } from 'jimp';

async function cropImages() {
  const image = await Jimp.read('public/images/tapis_7d_list.png');

  // Crop thumbnail 1 (Hyundai Tucson / Accent 470 DH)
  const thumb1 = image.clone().crop({ x: 10, y: 15, w: 90, h: 85 });
  await thumb1.write('public/images/tucson_470dh.png');

  // Crop thumbnail 2 (Renault / Dacia Duster 460 DH)
  const thumb2 = image.clone().crop({ x: 10, y: 125, w: 90, h: 85 });
  await thumb2.write('public/images/renault_460dh.png');

  // Crop thumbnail 3 (VW Caddy 470 DH)
  const thumb3 = image.clone().crop({ x: 10, y: 230, w: 90, h: 85 });
  await thumb3.write('public/images/caddy_470dh.png');

  console.log('Precise cropping completed!');
}

cropImages().catch(console.error);
