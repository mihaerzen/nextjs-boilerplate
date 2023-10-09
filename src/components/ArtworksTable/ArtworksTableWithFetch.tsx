import { FC } from 'react'

import { ArtworkImage } from '@/components/ArtworksTable/ArtworkImage'
import { ArtworksTableLayout } from '@/components/ArtworksTable/ArtworksTableLayout'
import { PAGE_SIZE } from '@/components/ArtworksTable/constants'
import { fetchArtworks } from '@/components/ArtworksTable/fetchArtworks'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

export const ArtworksTableWithFetch: FC = async () => {
  const { data } = await fetchArtworks({ limit: PAGE_SIZE })

  return (
    <>
      <ArtworksTableLayout>
        {data.map((artwork) => (
          <TableRow key={`artwork-row-${artwork.id}`}>
            <TableCell className="align-top">
              <Dialog>
                <DialogTrigger className="relative w-20 h-20">
                  <ArtworkImage
                    artwork={artwork}
                    className="rounded"
                    fill
                    size={160}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{artwork.title}</DialogTitle>
                    <DialogDescription>
                      {artwork.artist_display}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="relative w-full h-96">
                    <ArtworkImage
                      artwork={artwork}
                      fill
                      size={950}
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell className="align-top font-medium">
              {artwork.title}
            </TableCell>
            <TableCell className="align-top">
              {artwork.artist_display}
            </TableCell>
          </TableRow>
        ))}
      </ArtworksTableLayout>
    </>
  )
}
ArtworksTableWithFetch.displayName = 'ArtworksTableWithFetch'
