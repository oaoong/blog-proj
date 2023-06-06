import { RecoilState, atom } from 'recoil'

const tagsState = atom({
  key: 'tagsState',
  default: [] as string[],
})

export { tagsState }
