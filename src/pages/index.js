import React from "react";
import { Link } from 'gatsby';
import { siteMetadata } from "../../gatsby-config";

export default function Home() {
  return (
    <div className="container">
      <hgroup>
        <h1>{siteMetadata.title} <span className="text-secondary-text text-sm">Logo coming soon</span></h1>
        <h2>All your new media needs pro bono. <span className="text-gradient bg-gradient-to-r from-accent to-accent-secondary">That rocks!</span> <span role="img" aria-label="Rocking and rocket emojis">🤘🏻🚀</span></h2>
      </hgroup>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed <a href="#test" title="Primary color example.">laborum nobis distinctio</a> quisquam vitae quidem dolorem pariatur ratione, soluta doloremque <strong>amet fuga nemo facilis</strong> debitis unde accusantium animi ad hic!</p>
        <p>You can check <Link to="/rich-index/">the original page</Link> for the chosen GatsbyJS starter. <span className="text-secondary-text">(I should have gone with the hello-world <span role="img" aria-label="Annoyed emoji">😒</span>)</span></p>
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
          <p className="text-secondary-text">Copyright & copyleft from 2006. to 2021. by Predrag Drljača.</p>
        </footer>
    </div>
  );
}
