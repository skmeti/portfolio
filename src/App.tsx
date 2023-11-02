import "./App.css"
import SiteCard from "./Components/SiteCard"
import { sitedata } from "./assets/images/data/data"
import SiteInfo from "./Components/SiteInfo"

function App() {
  return (
    <>
      <div className="zoom text-pink-50 text-center">
        <h1 className="text-[8vh]">PORTFOLIO</h1>
        <p className="text-[6vh]">Stela Kmetič</p>
      </div>
      <div className="test-border bg-pink-50"></div>
      <div className="b-left"></div>
      <div className="b-right mb-4"></div>
      <div className="flex flex-row justify-center m-auto flex-wrap w-[80%]">
        {sitedata.map(data => (<SiteCard key={data.title} {...data} />))}
        {sitedata.map(data => (<SiteInfo key={data.id} {...data} />))}
      </div>
    </>
  )
}

export default App
