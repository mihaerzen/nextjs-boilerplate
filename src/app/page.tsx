import { MagicWandIcon } from '@radix-ui/react-icons'
import { NextPage } from 'next'
import Link from 'next/link'

import { ArtworksTable } from '@/components/ArtworksTable/ArtworksTable'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic'

const IndexPage: NextPage = () => (
  <div className="max-w-xl m-auto pt-8">
    <Alert className="mb-4">
      <AlertTitle>
        <MagicWandIcon className="inline-block" /> Heads up!
      </AlertTitle>
      <AlertDescription>
        This example uses the{' '}
        <Link
          className="underline"
          href="https://api.artic.edu/docs/#introduction"
          target="_blank"
        >
          API from Art Institute of Chicago
        </Link>
        !
      </AlertDescription>
    </Alert>

    <ArtworksTable />
  </div>
)

IndexPage.displayName = 'IndexPage'

export default IndexPage
