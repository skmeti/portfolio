import { SetStateAction, useCallback, useState } from "react"
import ImageViewer from "react-simple-image-viewer"
import Divider from "./Divider"

type SiteInfoProps = {
    id:number
  title: string
  info: string
  docs: [{
      naziv: string
      link: string
      id: string
    }],
  divname: string
  images: string[
  ]
}

export default function SiteInfo({
  id,
  title,
  info,
  docs,
  divname,
  images,
}: SiteInfoProps) {
  const checker = () => {
    if (images.length > 0) {
      return true
    }
  }
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback((index: SetStateAction<number>) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }
  const even =() =>{
    if (id %2=== 0){
      return true
    }
  }
  return (
    <>
    <Divider />
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
      <h2
        id={divname}
        className={`text-[4vh] text-pink-50 w-[75%] m-auto ${even()? "text-right":"text-left"}`}
      >
        {title}
      </h2>
      <Divider />
      <div className="flex flex-row flex-wrap gap-2 m-auto w-[80%] justify-center">
        <div className="contain bg-white sm:w-[47%] p-2.5 w-[80%] m-2">
          <h3 className="text-neutral-500 text-[3vh] text-center ">
            INFORMACIJE
          </h3>
          <p className="text-center">{info}</p>
        </div>
        <div className="contain bg-white sm:w-[47%] p-2.5 m-2 w-[80%]">
          <h3 className="text-neutral-500 text-[3vh] text-center ">
            DOKUMENTACIJA
          </h3>
          <div className="flex flex-col justify-center items-center text-center">
          {docs.map((doc) => (
              <a
                key={doc.id}
                className="text-green-600"
                href={doc.link}
                target="_blank"
                
              >
                {doc.naziv}
              </a>
             
          ))}
          

          {checker() &&
            images.map((image,index) => (
                <img
                  onClick={() => openImageViewer(index)}
                  width="200px"
                  height="200px"
                  className="newb cursor-pointer"
                  key={index}
                  style={{ margin: "2px" }}
                  alt=""
                  src={image}
                ></img>
              )
            )}
            </div>
        </div>
      </div>
    </>
  )
}
