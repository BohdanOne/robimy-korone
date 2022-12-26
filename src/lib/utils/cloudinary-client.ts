import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';

export const getImageSrc = (publicId: string, width: number, height: number) => cld
  .image(`korona/${publicId}`)
  .resize(fill().width(width).height(height))
  .delivery(format('auto'))
  .delivery(quality('auto'))
  .toURL();

const cld = new Cloudinary({
  cloud: {
    cloudName: 'bohdanonedev'
  }
});