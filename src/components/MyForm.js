import React, { useState, useEffect } from "react"
import Table from "./Table"
// import { useForm, Controller } from "react-hook-form"
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
// import "react-phone-number-input/style.css"
function MyForm() {
  const [values, setValues] = useState({})
  // const [mobile, setmobile] = useState("")
  // const [isError, setIsError] = useState(false)
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("myDetail"))
  )
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const handleCancel = (e) => {}

  const handleData = (detail) => {
    // console.log(detail)
    let Info = detail
    setValues(Info)
  }

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("myDetail")))
  }, [details])

  const handleSubmit = (e) => {
    // setDetails({
    //   name: "",
    //   email: "",
    //   phone: "",
    // })

    console.log(details)
    e.preventDefault()
    let detailArray = JSON.parse(localStorage.getItem("myDetail"))
    if (detailArray == null) {
      detailArray = []
    }
    if (details.name && details.email && details.phone) {
      detailArray.push(details)
    }
    localStorage.setItem("myDetail", JSON.stringify(detailArray))
  }
  const handleChange = (e) => {
    const { id, value } = e.target
    setDetails({ ...details, [id]: value })
  }
  return (
    <div>
      <form
        className="max-w-2xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit}
      >
        <label className="text-gray-600 font-medium">Name</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded
  text-gray-700"
          name="text"
          id="name"
          onChange={handleChange}
          placeholder="Enter your fullname"
          required
          value={values.name || ""}
        />
        <label className="text-gray-600 font-medium block mt-4">Email</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded
  text-gray-700"
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
          placeholder="Enter your email"
          value={values.email || ""}
          required
        />
        <label className="text-gray-600 font-medium block mt-4">
          Mobile_Number
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded
  text-gray-700"
          name="mobile-number"
          type="tel"
          id="phone"
          onChange={handleChange}
          placeholder="enter your mobile-number"
          required
          value={values.phone || ""}
          // onChange={(e) => {
          //   setmobile(e.target.value)
          //   if (e.target.value.length > 10) {
          //     setIsError(true)
          //   }
          // }}
        />
        <div className="flex  justify-end py-5 mx-5 gap-8">
          <button
            className="mt-4 w-full bg-teal-800 hover:bg-teal-700 text-zinc-50 border py-3 px-6 font-semibold text-lg rounded-full "
            type="submit"
          >
            Submit
          </button>
          <button
            className="mt-4 w-full bg-teal-800 hover:bg-teal-700 text-zinc-50 border py-3 px-6 font-semibold text-lg rounded-full "
            type="cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
      <Table data={state} handleData={handleData} />
    </div>
  )
}

export default MyForm
