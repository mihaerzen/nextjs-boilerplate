import { ImageIcon } from '@radix-ui/react-icons'
import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

import { ArtworkAPIResponse } from '@/components/ArtworksTable/fetchArtworks'

interface ArtworkImageProps
  extends Pick<ImageProps, 'className' | 'fill' | 'style'> {
  artwork: ArtworkAPIResponse
  size: number
}

export const ArtworkImage: FC<ArtworkImageProps> = async ({
  artwork,
  className,
  fill = true,
  style,
  size,
}) => {
  if (!artwork.image_id) {
    return (
      <div className="relative w-full h-full bg-gray-50 flex justify-center items-center">
        <ImageIcon />
      </div>
    )
  }

  const baseUri = artwork.config.iiif_url

  return (
    <Image
      alt={artwork.title}
      className={className}
      fill={fill}
      placeholder={artwork.thumbnail?.lqip || 'empty'}
      src={`${baseUri}/${artwork.image_id}/full/!${size},${size}/0/default.jpg`}
      sizes={`${size}px`}
      style={style}
    />
  )
}
ArtworkImage.displayName = 'ArtworkImage'
