import { MediaModel } from '../../models/Media'
import { size } from '../../utils/style/responsive'
import MediaCard from '../MediaCard'
import { StyledGallery } from './style'

interface GalleryProps {
  medias: MediaModel[]
  sort: string
  filter: string
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

function getFilterFunction(filter: string) {
  switch (filter) {
    case 'image':
      return (media: MediaModel) => {
        const ext = media.filename.split('.').pop()
        return (
          ext === 'png' || ext === 'webp' || ext === 'jpg' || ext === 'jpeg'
        )
      }

    case 'gif':
      return (media: MediaModel) => {
        const ext = media.filename.split('.').pop()
        return ext === 'gif'
      }

    case 'video':
      return (media: MediaModel) => {
        const ext = media.filename.split('.').pop()
        return ext === 'mp4'
      }

    default:
      return () => true
  }
}

export default function Gallery({ medias, sort, filter }: GalleryProps) {
  const displayedMedias = medias
    .filter(getFilterFunction(filter))
    .sort(getSortFunction(sort))
  const halfIndex = Math.ceil(displayedMedias.length / 2)
  const thirdIndex = Math.round(displayedMedias.length / 3)
  const nothingToDisplay = displayedMedias.length <= 0

  let test = null
  if (window.innerWidth >= size.desktop) {
    test = (
      <StyledGallery>
        <div>
          {displayedMedias.slice(0, thirdIndex).map((media: MediaModel) => (
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
          {displayedMedias
            .slice(thirdIndex, thirdIndex * 2)
            .map((media: MediaModel) => (
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
          {displayedMedias.slice(thirdIndex * 2).map((media: MediaModel) => (
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
  } else {
    test = (
      <StyledGallery>
        <div>
          {displayedMedias.slice(0, halfIndex).map((media: MediaModel) => (
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
          {displayedMedias.slice(halfIndex).map((media: MediaModel) => (
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

  return nothingToDisplay ? <p>Pas de média displonible...</p> : test
}
