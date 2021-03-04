import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

// const HomePage = ({data}) => {
export default function Home({data}) {
  return (
    <div>
      <nav className="mainnav row">
        <Link to="/"className="siteTitle">I am {data.site.siteMetadata.title}.</Link>
        <ul>
          <li><Link to="#">Link 1</Link></li>
          <li><Link to="#">Link 2</Link></li>
          <li><Link to="#">Link 3</Link></li>
        </ul>
      </nav>
      <main>
        <section className="row">
          <h1 className="siteDesc">{data.site.siteMetadata.description}
          <br />
          <span className="text-gradient bg-gradient-to-r from-color-primary to-color-secondary">
          That rocks!</span> <span role="img" aria-label="Rocking and rocket emojis">🤘🏻🚀</span></h1>
        </section>
        <section className="row">
          <article>
            <h3>Pro bono? <span role="img" aria-label="surprised face with open mouth emoji">😮</span></h3>
            <p><strong>Yep.</strong></p>
            <h3>How &amp; why? <span role="img" aria-label="Thinking face emoji">🤔</span></h3>
            <p>I am learning new things like Gatsbyjs, React <span className="text-color-gray">(not gonna happen)</span>, graphQL, JAMstack, etc. and would love to help someone help me. <span role="img" aria-label="Smiling empoji">😀</span></p>
            <p>Apart from usual Lorem Ipsum stuff, creator of these zeroes and ones is struggling to get grips on React, graphQL, Gatsby and all other mumbo-jumbo.</p>
          </article>
        </section>
      </main>
      <footer className="row">
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