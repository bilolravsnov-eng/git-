import React from 'react'
import Hider from './Coponents/Hider'
import Navb from './Coponents/Navb'
import Navbar from './Coponents/Navbar'
import Discover from './Coponents/Discover'
import Serving from './Coponents/Serving'
import GetSoftware from './Coponents/GetSoftware'
import Pricing from './Coponents/Pricing'
import Footer from './Coponents/Footer'

const App = () => {
  return (
    <div>
       <Hider />
      <Navbar />
      <Navb />
      <Discover />
      <Serving />
      <GetSoftware />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App