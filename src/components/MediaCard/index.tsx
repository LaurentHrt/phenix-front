import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { StyledMediaCard } from './style'

interface MediaCardProps {
  title: string
  filename: string
  price: number
  likes: number
  alt: string
}

export default function MediaCard({
  title,
  filename,
  price,
  likes,
  alt,
}: MediaCardProps) {
  const isVideo = filename?.split('.').pop() === 'mp4'

  return (
    <Card>
      <CardActionArea>
        {isVideo ? (
          <CardMedia
            component="video"
            height="250"
            src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
          />
        ) : (
          <CardMedia
            component="img"
            height="250"
            image={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
            alt="green iguana"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    // <StyledMediaCard>
    //   <div className="media">
    //     {isVideo ? (
    //       <video controls loop>
    //         <source
    //           src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
    //           type="video/mp4"
    //         />
    //       </video>
    //     ) : (
    //       <picture>
    //         <source
    //           srcSet={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_MEDIUM}${filename}`}
    //           media="(min-width: 768px)"
    //         />
    //         <img
    //           src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
    //           alt={alt}
    //         />
    //       </picture>
    //     )}
    //   </div>
    //   <div className="textContainer">
    //     <div className="title">{title}</div>
    //     <div className="price">{price}€</div>
    //     <div className="likes">
    //       {likes}
    //       {'<3'}
    //     </div>
    //   </div>
    // </StyledMediaCard>
  )
}
