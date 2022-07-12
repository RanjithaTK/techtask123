import React, { useEffect, useState } from "react"

function MyPage() {
  const [details, setDetails] = useState(
    JSON.parse(localStorage.getItem("myDetail"))
  )
  useEffect(() => {
    console.log("hi")
    setDetails(JSON.parse(localStorage.getItem("myDetail")))
  }, [])
  const handleDelete = (detail) => {}
  return (
    <div>
      {details?.map((detail) => (
        <div className="flex border-4 p-5   justify-evenly">
          <div className="  ">{detail.name}</div>
          <div className=" ">{detail.phone}</div>
          <button onClick={() => handleDelete(detail)}>DELETE</button>
        </div>
      ))}
    </div>
  )
}

export default MyPage
