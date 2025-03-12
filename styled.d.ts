import 'styled-components'
import { TColors } from './src/theme/default'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: TColors
  }
}
