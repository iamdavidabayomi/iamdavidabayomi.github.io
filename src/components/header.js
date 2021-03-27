import React from "react"
import { Link } from "gatsby"
import Github from "./githubBar"
import Menu from "./menuBar"
function header() {
  return (
    <>
      <header className="bg-blueGray-400 z-50 w-full top-0 flex flex-wrap items-center p-1.5 md:px-4 md:py-2 shadow-lg border-none">
        <div className="w-full px-2 md:px-4 flex items-center justify-start">
          <div className="w-full relative flex justify-between md:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-200"
            >
              iamdavidabayomi
            </Link>
          </div>
          <div className="flex items-center ml-auto">
            <Github />
            <Menu />
          </div>
        </div>
      </header>
    </>
  )
}

export default header
