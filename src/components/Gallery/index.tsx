import { MediaModel } from '../../models/Media'
import MediaCard from '../MediaCard'
import { StyledGallery } from './style'

interface GalleryProps {
  medias: MediaModel[]
  sort: string
}

function getSortFunction(sort: string) {
  switch (sort) {
    case 'likes':
      return (a: MediaModel, b: MediaModel) => b.likes - a.likes

    case 'title':
      return (a: MediaModel, b: MediaModel) => {
        if (a.title < b.title) return -1
        else return 1
      }

    case 'date':
      return (a: MediaModel, b: MediaModel) => {
        if (new Date(a.date) < new Date(b.date)) return -1
        else return 1
      }

    case 'price':
      return (a: MediaModel, b: MediaModel) => a.price - b.price

    case 'random':
      return (a: MediaModel, b: MediaModel) => 0.5 - Math.random()

    default:
      return (a: MediaModel, b: MediaModel) => a.likes - b.likes
  }
}

export default function Gallery({ medias, sort }: GalleryProps) {
  const halfIndex = Math.ceil(medias.length / 2)

  medias.sort(getSortFunction(sort))

  return (
    <StyledGallery>
      <div>
        {medias.slice(0, halfIndex).map((media: MediaModel) => (
          <MediaCard
            key={media.id}
            title={media.title}
            filename={media.filename}
            price={media.price}
            likes={media.likes}
            alt={media.alt}
          />
        ))}
      </div>
      <div>
        {medias.slice(halfIndex).map((media: MediaModel) => (
          <MediaCard
            key={media.id}
            title={media.title}
            filename={media.filename}
            price={media.price}
            likes={media.likes}
            alt={media.alt}
          />
        ))}
      </div>
    </StyledGallery>
  )
}
