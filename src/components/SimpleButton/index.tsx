import { Button, ButtonProps } from '@mui/material'
import colors from '../../utils/style/colors'
import { styled } from '@mui/material/styles'

interface StyledButtonProps {
  text: string
  onClick: any
}

export default function SimpleButton({ text, onClick }: StyledButtonProps) {
  const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(colors.secondary),
    backgroundColor: colors.secondary,
    '&:hover': {
      backgroundColor: colors.secondaryLight,
    },
  }))

  return (
    <StyledButton size="large" variant="contained" onClick={onClick}>
      {text}
    </StyledButton>
  )
}
