import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <Footer />
      </Layout>
    </>
  )
}
