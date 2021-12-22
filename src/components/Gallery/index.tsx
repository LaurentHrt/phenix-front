import { MediaModel } from '../../models/Media'
import { size } from '../../utils/style/responsive'
import MediaCard from '../MediaCard'
import { StyledGallery } from './style'

interface GalleryProps {
  medias: MediaModel[]
}

export default function Gallery({ medias }: GalleryProps) {
  const displayedMedias = medias

  const halfIndex =
    displayedMedias.length > 1 ? Math.ceil(displayedMedias.length / 2) : 1
  const thirdIndex =
    displayedMedias.length > 1 ? Math.round(displayedMedias.length / 3) : 1
  const nothingToDisplay = displayedMedias.length <= 0

  let gallery = null
  if (window.innerWidth >= size.desktop) {
    gallery = (
      <StyledGallery>
        <div>
          {displayedMedias.slice(0, thirdIndex).map((media: MediaModel) => (
            <MediaCard
              key={media.id}
              title={media.title}
              filename={media.filename}
              type={media.type}
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
                type={media.type}
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
              type={media.type}
              price={media.price}
              likes={media.likes}
              alt={media.alt}
            />
          ))}
        </div>
      </StyledGallery>
    )
  } else {
    gallery = (
      <StyledGallery>
        <div>
          {displayedMedias.slice(0, halfIndex).map((media: MediaModel) => (
            <MediaCard
              key={media.id}
              title={media.title}
              filename={media.filename}
              type={media.type}
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
              type={media.type}
              price={media.price}
              likes={media.likes}
              alt={media.alt}
            />
          ))}
        </div>
      </StyledGallery>
    )
  }

  return nothingToDisplay ? <p>Pas de média displonible...</p> : gallery
}
