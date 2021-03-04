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
        <article className="introduction">
          <div className="lg:w-1/3 p-8">
            <h3>About.</h3>
            <p>Hello! I am <strong>web</strong> and <strong>entertainment</strong> enthusiast based in Sombor, Serbia.</p>
          </div>
          <div className="lg:w-1/3 p-8">
            <h3>Goal.</h3>
            <p>I like to design beautyful &amp; unique websites and user interfaces using accessibility and usability guidelines for rich user experience.</p>
          </div>
          <div className="lg:w-1/3 p-8">
            <h3>Availability.</h3>
            <p>I'm available for work, at the moment.</p>
            <p><Link className="" to="/">Get in touch!</Link><br /><span className="text-base text-color-gray">(currently, dead link <span role="img" aria-label="Skull emoji">💀</span>)</span></p>
          </div>
        </article>
        <article className="row">
          <h3>Pro bono? <span role="img" aria-label="surprised face with open mouth emoji">😮</span></h3>
          <p><strong>Yep.</strong></p>
          <h3>How &amp; why? <span role="img" aria-label="Thinking face emoji">🤔</span></h3>
          <p>I am learning new things like Gatsbyjs, React <span className="text-color-gray">(not gonna happen)</span>, graphQL, JAMstack, etc. and would love to help someone help me. <span role="img" aria-label="Smiling empoji">😀</span></p>
          <p>Apart from usual Lorem Ipsum stuff, creator of these zeroes and ones is struggling to get grips on React, graphQL, Gatsby and all other mumbo-jumbo.</p>
        </article>
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