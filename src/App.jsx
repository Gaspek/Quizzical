import blueBlob from "./assets/blue-blob.png"
import yellowBlob from "./assets/yellow-blob.png"
function App() {
 
  const blueBlobEl = <img src={blueBlob} className='blue-blob'/>
  const yellowBlobEl = <img src={yellowBlob} className='yellow-blob'/>

  return (
    <main>
      {blueBlobEl}
      {yellowBlobEl}
    </main>
  )
}

export default App
