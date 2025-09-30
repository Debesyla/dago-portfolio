import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#FFBF00',
      bg: '#222',
    },
  },
  
  preflights: [
    {
      getCSS: ({ theme }) => {
        const colors = theme.colors || {};
        return `
          *,*::before,*::after {
            box-sizing: border-box
          }

          * {
            margin: 0
          }

          @media(prefers-reduced-motion: no-preference) {
            html {
              interpolate-size: allow-keywords
            }
          }

          body {
            line-height: 1.5;
            -webkit-font-smoothing: antialiased
          }

          img,picture,video,canvas,svg {
            display: block;
            max-width: 100%
          }

          input,button,textarea,select {
            font: inherit
          }

          p,h1,h2,h3,h4,h5,h6 {
            overflow-wrap: break-word
          }

          p {
            text-wrap: pretty
          }

          h1,h2,h3,h4,h5,h6 {
            text-wrap: balance
          }

          #root,#__next {
            isolation: isolate
          }

          a,* {
            color: inherit
          }

          :root {
            --xs: 0.25em;
            --sm: 0.5em;
            --md: 1em;
            --lg: 1.5em;
            --xl: 2em;
            --2xl: 3em;
            --3xl: 4em
          }

          body {
            background: ${colors.bg || "#222"};
            color: ${colors.primary || "#ffbf00"};
            margin: 0 auto 0 0;
            padding: var(--2xl) var(--lg) var(--3xl);
            font-family: monospace,"Courier New",Courier,sans-serif;
            max-width: 75ch
          }

          a {
            text-underline-offset: var(--xs)
          }

          a:hover,a:focus {
            text-decoration-style: dashed
          }

          ul,ol {
            padding-left: var(--lg)
          }

          ul li+li,ol li+li {
            margin-top: var(--md)
          }

          ul li::marker,ol li::marker {
            color: rgba(255,191,0,.325)
          }

          ol li::marker {
            font-size: .75em
          }

          ::selection {
            background: ${colors.primary || "#ffbf00"};
            color: ${colors.bg || "#222"}
          }

          #content>*+* {
            margin-top: var(--md)
          }

          #content>ul {
            padding-top: var(--md);
            list-style-type: decimal
          }

          #content>ul li::marker {
            font-size: .75em
          }

          #colophon {
            margin-top: var(--2xl)
          }
        `;
      }
    }
  ],
})