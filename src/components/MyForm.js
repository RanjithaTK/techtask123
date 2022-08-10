import React, { useState, useEffect } from "react"
import Table from "./Table"
// import { useForm, Controller } from "react-hook-form"
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
// import "react-phone-number-input/style.css"
import AddIcon from "@mui/icons-material/Add"

function MyForm() {
  // const [mobile, setmobile] = useState("")
  // const [isError, setIsError] = useState(false)
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("myDetail"))
  )

  const [id, setId] = useState("")
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleData = (detail) => {
    setDetails(detail)
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
    e.preventDefault()
    console.log(details, id)
    if (id !== "") {
      state[id] = details
      localStorage.setItem("myDetail", JSON.stringify(state))
    } else {
      let detailArray = JSON.parse(localStorage.getItem("myDetail"))
      if (detailArray == null) {
        detailArray = []
      }
      if (details.name && details.email && details.phone) {
        detailArray.push(details)
      }
      console.log(detailArray)
      localStorage.setItem("myDetail", JSON.stringify(detailArray))
    }
  }
  const handleChange = (e) => {
    const { id, value } = e.target
    setDetails({ ...details, [id]: value })
  }
  const handleDelete = (id) => {
    state?.splice(
      id,
      1
    )(localStorage.setItem("myDetail", JSON.stringify(state)))
    setId("")
  }
  const handleId = (id) => {
    setId(id)
  }
  return (
    <div>
      <Table
        data={state}
        handleData={handleData}
        handleDelete={handleDelete}
        handleId={handleId}
        setState={setState}
      />
      <div className="bg-gradient-to-r mx-auto bg-teal-800 hover:bg-teal-700 text-gray-100 rounded-lg items-center w-1/6 shadow-md  flex justify-center ">
        Add A New User
        <AddIcon />
      </div>
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
          value={details.name}
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
          value={details.email}
          required
        />
        <label className="text-gray-600 font-medium block mt-4">Role</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded
  text-gray-700"
          name="role"
          type="role"
          id="role"
          onChange={handleChange}
          placeholder="enter role"
          required
          value={details.role}
        />
        <button
          className="mt-4 w-full bg-teal-800 hover:bg-teal-700 text-zinc-50 border py-3 px-6 font-semibold text-lg rounded-full "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default MyForm
