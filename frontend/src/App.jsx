import React from "react"
import StudentForm from "./components/StudentForm"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        AATIYA GIRLS HOSTEL
      </h1>

      <p className="text-gray-700 mb-6 text-center max-w-lg">
        Admission Form – Please fill all required details carefully.
        Once done, click <strong>“Save & Download”</strong> to store
        your data and generate the admission + शपथ पत्र PDF.
      </p>

      <div className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-2xl border border-gray-200">
        <StudentForm />
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} AATIYA GIRLS HOSTEL. All rights reserved.
      </footer>
    </div>
  )
}
