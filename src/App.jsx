import blueBlob from "./assets/blue-blob.png"
import yellowBlob from "./assets/yellow-blob.png"
import Main from "./components/Main"

function App() {
 
  const blueBlobEl = <img src={blueBlob} aria-hidden="true" className='blue-blob'/>
  const yellowBlobEl = <img src={yellowBlob} aria-hidden="true" className='yellow-blob'/>

  return (
    <>
      {blueBlobEl}
      <Main />
      {yellowBlobEl}
    </>
  )
}

export default App
