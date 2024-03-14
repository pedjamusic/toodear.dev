import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="row">
      <h3>Meanwhile, elsewhere...</h3>
      <ul className="mb-4">
        <li>
          <a href="https://www.instagram.com/toodearrocks/">Instagram</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCckHUaxAIzg5BTm8fYNgRQA">
            Youtube
          </a>
        </li>
        <li>
          <a href="https://soundcloud.com/pedjamusic">Soundcloud</a>
        </li>
        <li>
          <a href="https://www.facebook.com/toodearrocks">Facebook</a>
        </li>
      </ul>
      <p className="text-base text-color-gray">
        Copyright &amp; copyleft from 2006. to {currentYear} by Predrag Drljača.
      </p>
    </footer>
  );
}
