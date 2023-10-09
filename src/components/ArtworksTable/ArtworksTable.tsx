import { FC, Suspense } from 'react'

import { ArtworksTableLayout } from '@/components/ArtworksTable/ArtworksTableLayout'
import { ArtworksTableWithFetch } from '@/components/ArtworksTable/ArtworksTableWithFetch'
import { PAGE_SIZE } from '@/components/ArtworksTable/constants'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

const TableSkeleton: FC = () => (
  <ArtworksTableLayout>
    {Array.from({ length: PAGE_SIZE }, (_, idx) => (
      <TableRow key={`table-row-loading-${idx}`}>
        <TableCell className="align-top">
          <Skeleton className="rounded w-20 h-20" />
        </TableCell>
        <TableCell className="align-top">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-16 h-4 mt-1" />
        </TableCell>
        <TableCell className="align-top">
          <Skeleton className="w-96 h-4" />
          <Skeleton className="w-96 h-4 mt-1" />
          <Skeleton className="w-32 h-4 mt-1" />
        </TableCell>
      </TableRow>
    ))}
  </ArtworksTableLayout>
)
TableSkeleton.displayName = 'TableSkeleton'

export const ArtworksTable: FC = () => (
  <Suspense fallback={<TableSkeleton />}>
    <ArtworksTableWithFetch />
  </Suspense>
)
ArtworksTable.displayName = 'ArtworksTable'
