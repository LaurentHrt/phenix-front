import { css, keyframes } from 'styled-components'

const fadeinAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(15px);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
`
const fadeinDuration = '500ms'
const fadeinStyle = 'cubic-bezier(0.3, 0.12, 0.22, 0.98) both'

export function getAnimationDelaysOnChildren(childrenNumber: number) {
  let styles = ''

  for (let i = 0; i < childrenNumber; i += 1) {
    styles += `

    & *:nth-child(${i}) {
      animation-delay: ${0.1 * i}s;
    }
     `
  }

  return css`
    ${styles}
  `
}

export function fadeinOnChidren(childrenNumber: number = 50) {
  return css`
    > * {
      animation: ${fadeinAnimation} ${fadeinDuration} ${fadeinStyle};
    }
    ${getAnimationDelaysOnChildren(childrenNumber)};
  `
}
