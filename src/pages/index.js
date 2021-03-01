import React from 'react'
import { graphql } from 'gatsby'

// const HomePage = ({data}) => {
export default function Home({data}) {
  return (
    <div className="container w-full xl:w-7/12">
      <header>
        <h1>{data.site.siteMetadata.title} <span className="text-sm text-color-gray">Logo coming soon</span></h1>
        <h2>{data.site.siteMetadata.description}
        <br />
        <span className="text-gradient bg-gradient-to-r from-color-primary to-color-secondary">
        That rocks!</span> <span role="img" aria-label="Rocking and rocket emojis">🤘🏻🚀</span></h2>
      </header>
      <article>
        <h3>Pro bono?</h3>
        <p><strong>Yep.</strong> To be explained in detail when I type a nice do's and don'ts.</p>
        <h3>How &amp; with what?</h3>
        <p>I am learning new things like Gatsbyjs, React <span className="text-color-gray">(not gonna happen)</span>, graphQL, JAMstack, etc. and would love to help someone help me. <span role="img" aria-label="Smiling empoji">😀</span></p>
        <p>Apart from usual Lorem Ipsum stuff, creator of these zeroes and ones is struggling to get grips on React, graphQL, Gatsby and all other mumbo-jumbo.</p>
      </article>
      <footer>
        <h3>Meanwhile, elsewhere...</h3>
        <ul className="mb-4">
          <li><a href="https://www.instagram.com/toodearrocks/">Instagram</a></li>
          <li><a href="https://www.youtube.com/channel/UCckHUaxAIzg5BTm8fYNgRQA">Youtube</a></li>
          <li><a href="https://soundcloud.com/pedjamusic">Soundcloud</a></li>
          <li><a href="https://www.facebook.com/iampedja">Facebook</a></li>
        </ul>
        <p className="text-base text-color-gray">Copyright &amp; copyleft from 2006. to 2021. by Predrag Drljača.</p>
      </footer>
    </div>
  );
}

export const query = graphql`
query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

// export default HomePage