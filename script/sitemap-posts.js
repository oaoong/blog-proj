const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

const getDate = new Date().toISOString()
const BLOG_DOMAIN = 'https://jay-logs.vercel.app'

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' })

const method = async () => {
  // 포함할 페이지와 제외할 페이지 등록
  const pages = await globby(['../src/contents/*.mdx'])

  // 파일 경로를 도메인 형태로 변경
  const pagesSitemap = `${pages
    .map((page) => {
      const path = page
        .replace('../src/contents/', '')
        .replace('.mdx', '')
        .replace(/_/g, '%20')
      return `
          <url>
            <loc>${BLOG_DOMAIN}/post/${path}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `
    })
    .join('')}`

  const generatedSitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pagesSitemap}
    </urlset>
    `

  const formattedSitemap = formatted(generatedSitemap)

  fs.writeFileSync(
    '../public/sitemap/sitemap-posts.xml',
    formattedSitemap,
    'utf8',
  )
}

method()
