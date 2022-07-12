import React from "react"

function Navbar() {
  return (
    <div className=" flow-root ">
      <div className="flex justify-center  gap-8 w-full bg-teal-800 hover:bg-teal-700 text-zinc-50 border py-3  font-semibold text-lg ">
        <div className="">Tech Task : React</div>
      </div>
      {/* <div className="flex float-right gap-8 mr-4">
        <div className="">HOME</div>
        <div className="">ABOUT</div>
        <div className="">MESSAGE</div>
        <div className="">SIGNUP</div>
      </div> */}
    </div>
  )
}
export default Navbar
