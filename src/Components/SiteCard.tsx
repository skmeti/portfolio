import { Info, Link } from "lucide-react"
import ReactHover, { Trigger, Hover } from "react-hover"


type SiteCardProps = {
  title: string
  pic1: string
  pic2: string
  sitelink: string
  infolink: string
}

function ShowImage(e: any, imgSrc: string) {
  e.currentTarget.src = imgSrc
}

export default function SiteCard({
  title,
  pic1,
  pic2,
  sitelink,
  infolink,
}: SiteCardProps) {
  const options = {
    followCursor: false,

  }
  return (
    <div className="border border-yellow-50 test m-2">
      <div className="text-center text-neutral-500 text-lg">{title}</div>
      <div className="w-60 p-3.5">
        <img
          src={pic1}
          onMouseOver={(e) => ShowImage(e, pic1)}
          onMouseOut={(e) => ShowImage(e, pic2)}
        />
      </div>
      <div className="flex flex-row justify-center gap-4 text-neutral-500 p-3.5">
        <ReactHover options={options}>
          <Trigger type="trigger">
            <a href={sitelink} target="_blank">
              <Link />
            </a>
          </Trigger>
          <Hover type="hover">
            <div className=" bg-neutral-700 rounded text-white p-2.5 ">
              Posjetite stranicu
            </div>
          </Hover>
        </ReactHover>

        <ReactHover options={options}>
          <Trigger type="trigger" key="2">
            <a href={infolink}>
              <Info />
            </a>
          </Trigger>
          <Hover type="hover" key="3">
            <div className="bg-neutral-700 rounded text-white p-2.5 cursor-pointer">
              Informacije i dokumentacija projekta
            </div>
          </Hover>
        </ReactHover>
      </div>
    </div>
  )
}
