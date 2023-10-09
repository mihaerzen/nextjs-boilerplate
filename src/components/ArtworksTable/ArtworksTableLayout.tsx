import { ImageIcon, Pencil1Icon, PersonIcon } from '@radix-ui/react-icons'
import { FC, PropsWithChildren } from 'react'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const ArtworksTableLayout: FC<PropsWithChildren> = ({ children }) => (
  <Table className="mb-8">
    <TableHeader>
      <TableRow>
        <TableHead>
          <ImageIcon className="inline-block mr-1 -mt-1" />
          Artwork
        </TableHead>
        <TableHead>
          <Pencil1Icon className="inline-block mr-1 -mt-1" />
          Title
        </TableHead>
        <TableHead>
          <PersonIcon className="inline-block mr-1 -mt-1" />
          Artist
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>{children}</TableBody>
  </Table>
)
ArtworksTableLayout.displayName = 'ArtworksTableLayout'
