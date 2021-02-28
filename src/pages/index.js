import React from "react";
import { Link } from 'gatsby';
import { siteMetadata } from "../../gatsby-config";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>{siteMetadata.title} <span className="text-secondary-text text-sm">Logo coming soon</span></h1>
        <h2>All your new media needs pro bono. <span className="text-gradient bg-gradient-to-r from-accent to-accent-secondary">That rocks!</span> <span role="img" aria-label="Rocking and rocket emojis">🤘🏻🚀</span></h2>
      </header>
      <article>
        <h3>Pro bono?</h3>
        <p><strong>Yep.</strong> To be explained in detail when I type a nice do's and don'ts.</p>
        <h3>How &amp; with what?</h3>
        <p>I am learning new things like Gatsbyjs, React <span className="text-secondary-text">(not gonna happen)</span>, graphQL, JAMstack, etc. and would love to help someone help me. <span role="img" aria-label="Smiling empoji">😀</span></p>
        <p>E.g. you can check <Link to="/rich-index/">the original page</Link> for the chosen GatsbyJS starter that I am learning by doing. <span className="text-secondary-text">(I should have gone with the hello-world <span role="img" aria-label="Annoyed emoji">😒</span>)</span></p>
        <p>Apart from usual Lorem Ipsum stuff, creator of these zeroes and ones is struggling to get grips on React, graphQL, Gatsby and all other mumbo-jumbo.</p>
      </article>
      <footer>
        <h3>Meanwhile, elsewhere...</h3>
        <ul className="mb-4">
          <li><Link to="https://www.instagram.com/toodearrocks/">Instagram</Link></li>
          <li><Link to="https://www.youtube.com/channel/UCckHUaxAIzg5BTm8fYNgRQA">Youtube</Link></li>
          <li><Link to="https://soundcloud.com/pedjamusic">Soundcloud</Link></li>
          <li><Link to="https://www.facebook.com/iampedja">Facebook</Link></li>
        </ul>
        <p className="text-secondary-text text-base">Copyright &amp; copyleft from 2006. to 2021. by Predrag Drljača.</p>
      </footer>
    </div>
  );
}
