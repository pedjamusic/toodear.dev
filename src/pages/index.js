import React from "react"

export default function Home() {
  return (
    <div className="container">
      <div class="flex items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white mb-5">
        <div class="theme-switcher">
            <button class="theme-switcher-button theme-switcher-light bg-gray-200 border-gray-200 border-2 dark:bg-black dark:border-black p-2 focus:outline-none" title="Light"><i class="fas fa-sun pointer-events-none"></i> Light</button>
            <button class="theme-switcher-button theme-switcher-dark bg-gray-200 border-gray-200 border-2 dark:bg-black dark:border-black p-2 focus:outline-none" title="Dark"><i class="fas fa-moon pointer-events-none"></i> Dark</button>
            <button class="theme-switcher-button theme-switcher-auto bg-gray-200 border-gray-200 dark:bg-black border-2 dark:border-black p-2 focus:outline-none" title="Auto"><i class="fas fa-adjust pointer-events-none"></i> Auto</button>
        </div>
      </div>
      <header>
        <h1>Hello world!</h1>
      </header>
      <article>
        <header>
          <h2>Lorem ipsum dolor sit amet.</h2>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed <a href="#test" title="Primary color example.">laborum nobis distinctio</a> quisquam vitae quidem dolorem pariatur ratione, soluta doloremque <strong>amet fuga nemo facilis</strong> debitis unde accusantium animi ad hic!</p>
        <footer className="mt-8 grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl shadow-lg flex items-center justify-center">Test 1.</div>
          <div className="col-start-2 row-start-1 col-span-2 pt-full bg-white rounded-xl shadow-lg flex items-center justify-center">2nd To All!</div>
          <div className="pt-full bg-white rounded-xl shadow-lg flex items-center justify-center">The Third.</div>
          <div className="pt-full bg-white rounded-xl shadow-lg flex items-center justify-center">Four Four.</div>
          <div className="pt-full bg-white rounded-xl shadow-lg flex items-center justify-center">The End?</div>
        </footer>
      </article>
    </div>
  )
}
