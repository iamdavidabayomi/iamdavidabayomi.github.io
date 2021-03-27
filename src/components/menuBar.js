import React from "react"
import { Link } from "gatsby"

const MenuList = () => {
  return (
    <>
      <nav className="md:flex hidden overflow-x-auto text-sm text-gray-200 font-extrabold uppercase font-sans">
        <Link
          to="/blog"
          className="md:flex hidden items-center justify-center flex-grow overflow-hidden mr-4"
          activeClassName="border-b-2 border-solid border-gray-200 rounded-sm"
        >
          blog
        </Link>
        <Link
          to="/hire"
          className="md:flex hidden items-center justify-center flex-grow overflow-hidden mr-4"
          activeClassName="border-b-2 border-solid border-gray-200 rounded-sm"
        >
          hire
        </Link>
        <Link
          to="/project"
          className="md:flex hidden items-center justify-center flex-grow overflow-hidden mr-4"
          activeClassName="border-b-2 border-solid border-gray-200 rounded-sm"
        >
          project
        </Link>
        <Link
          to="/open-source"
          className="md:flex hidden items-center justify-center flex-grow overflow-hidden mr-4"
          activeClassName="border-b-2 border-solid border-gray-200 rounded-sm"
        >
          open source
        </Link>
        <Link
          to="/contact"
          className="md:flex hidden items-center justify-center flex-grow overflow-hidden mr-4"
          activeClassName="border-b-2 border-solid border-gray-200 rounded-sm"
        >
          contact
        </Link>
      </nav>
    </>
  )
}

const MenuIcon = () => {
  return (
    <>
      <button class="align-middle outline-none hover:outline-none focus:outline-none md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 md:w-5 h6 md:h-5 text-gray-200 fill-current text-cente"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </>
  )
}

const menuBar = () => {
  return (
    <>
      <div className="flex">
        <MenuIcon />
        <MenuList />
      </div>
    </>
  )
}

export default menuBar
