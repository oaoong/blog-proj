import { useTheme } from 'next-themes'

export default function Utterances() {
  const { theme } = useTheme()

  const utterancesTheme = theme === 'dark' ? 'github-dark' : 'github-light'

  return (
    <section
      className='flex flex-col h-fit'
      ref={(elem) => {
        if (!elem) {
          return
        }
        const scriptElem = document.createElement('script')
        scriptElem.src = 'https://utteranc.es/client.js'
        scriptElem.async = true
        scriptElem.setAttribute('repo', 'oaoong/blog-utterances')
        scriptElem.setAttribute('issue-term', 'pathname')
        scriptElem.setAttribute('theme', utterancesTheme)
        scriptElem.setAttribute('label', 'blog-comment')
        scriptElem.crossOrigin = 'anonymous'
        elem.replaceChildren(scriptElem)
      }}
    />
  )
}
