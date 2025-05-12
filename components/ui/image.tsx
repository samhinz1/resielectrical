import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string;
}

/**
 * A custom Image component that handles GitHub Pages basePath for image sources
 */
export function Image({ src, ...props }: ImageProps) {
  // Use basePath for GitHub Pages deployment
  const basePath = process.env.NODE_ENV === 'production' ? '/lopeselectrical' : '';
  
  // Add basePath only for local images (not for external URLs)
  const imageSrc = src.startsWith('http') ? src : `${basePath}${src}`;
  
  return <NextImage src={imageSrc} {...props} />;
} 