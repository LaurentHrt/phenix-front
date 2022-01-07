import { I_Media } from '../../models/Media'
import { size } from '../../utils/style/responsive'
import MediaCard from '../MediaCard'
import { StyledGallery } from './style'

interface GalleryProps {
  medias: I_Media[]
}

export default function Gallery({ medias }: GalleryProps) {
  const displayedMedias = medias
  const nothingToDisplay = displayedMedias.length <= 0

  return nothingToDisplay ? (
    <p>Pas de média displonible...</p>
  ) : (
    <StyledGallery length={displayedMedias.length}>
      {displayedMedias.map((media: I_Media) => (
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
    </StyledGallery>
  )
}
