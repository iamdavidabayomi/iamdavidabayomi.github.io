import React from "react"
import { Link } from "gatsby"
import Github from "./githubBar"
import Menu from "./menuBar"
function header() {
  return (
    <>
      <header className="bg-blueGray-400 z-50 w-full top-0 flex flex-wrap items-center justify-between p-1.5 md:px-4 md:py-2 shadow-lg">
        <div className="w-full px-2 md:px-4 mx-auto flex items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-200"
            >
              iamdavidabayomi
            </Link>
          </div>
          <div className="lg:flex flex-grow items-center ">
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Github />
              <Menu />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default header
