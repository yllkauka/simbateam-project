let colors = {
  accent1: '#565656',
  accent2: '#787878'
}

if (document.body.classList.contains('kirkland')) {
  colors.accent1 = '#6CC8BF'
  colors.accent2 = '#F05B2E'
} else if (document.body.classList.contains('princeton')) {
  colors.accent1 = '#C35768'
  colors.accent2 = '#232323'

}

export { colors }