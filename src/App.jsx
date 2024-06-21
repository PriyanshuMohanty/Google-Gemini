import React, { useEffect } from 'react'
import Main from './Component/Main/Main'
import Sidebar from './Component/Sidebar/Sidebar'
import run from './Gemini/Gemini';

function App() {

  // useEffect(() => {
  //   (async () => {
  //     const runi = await run("whai is html")
  //     console.log(runi)
  //   })();
  // }, [])

  return (
    <>
      <Sidebar />
      <Main />
    </>
  )
}

export default App

