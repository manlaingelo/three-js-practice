export default {
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Sue lee <3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Хөөрхөн сэргэлэнд зориулав.'
      },
      {
        hid: `og:title`,
        property: 'og:title',
        content: 'Half year has passed..'
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: 'Хөөрхөн сэргэлэнд зориулав.'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: 'https://huurhun-sergelend.netlify.app/'
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preload',
        href: '/fonts/GothamUltra/GothamUltra.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      }
    ]
  }
}
