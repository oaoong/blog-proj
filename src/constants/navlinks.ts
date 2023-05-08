import NAVIGATION_PATH from '@/config/path'
import { ValueOf } from '@/types'

interface INavLink {
  title: string
  path: ValueOf<typeof NAVIGATION_PATH>
}

const navLinks: INavLink[] = [
  { title: 'Home', path: NAVIGATION_PATH.HOME },
  { title: 'Blog', path: NAVIGATION_PATH.BLOG },
]

export default navLinks
