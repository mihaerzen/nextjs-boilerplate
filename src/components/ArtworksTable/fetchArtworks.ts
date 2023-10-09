import { delay } from '@/lib/utils'

export interface ArtworkAPIResponse {
  artist_display: string
  config: {
    iiif_url: string
  }
  id: number
  image_id?: string
  thumbnail?: {
    lqip: `data:image/${string}`
  }
  title: string
}

interface PaginationAPIResponse {
  current_page: number
  limit: number
  next_url?: string
  prev_url?: string
  offset: number
  total: number
  total_pages: number
}

export interface FetchArtworksAPIResponse {
  data: ArtworkAPIResponse[]
  pagination: PaginationAPIResponse
  config: {
    iiif_url: string
  }
}

interface InputParams {
  limit?: number
  page?: number
}

export const fetchArtworks = async (
  params: InputParams = {}
): Promise<{
  data: ArtworkAPIResponse[]
  pagination?: PaginationAPIResponse
  config: {
    iiif_url: string
  }
}> => {
  const requestUrl = new URL('https://api.artic.edu/api/v1/artworks')

  const searchParams = new URLSearchParams()
  searchParams.append('fields', 'artist_display,id,image_id,thumbnail,title')
  if (params.limit) {
    searchParams.append('limit', `${params.limit}`)
  }

  requestUrl.search = searchParams.toString()

  const response = await delay(fetch(requestUrl.toString()), 1000)

  if (!response.ok) {
    throw new Error('Failed to fetch!')
  }

  const json = (await response.json()) as FetchArtworksAPIResponse

  json.data.forEach((a) => {
    a.config = json.config
  })

  return json
}
