import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const JobCard = ({ job }) => {

  const navigate = useNavigate()

  return (
    <div className="border border-gray-200 p-6 shadow-lg rounded-2xl flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <img className="h-8" src={assets.company_icon} alt="Company Logo" />
        <span className="text-sm text-gray-400">{job.type || "Full-time"}</span>
      </div>

      {/* Title */}
      <h4 className="font-semibold text-xl text-gray-800 mb-2">{job.title}</h4>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        <span className="bg-blue-50 border border-blue-200 px-3 py-1 rounded text-blue-700">
          {job.location}
        </span>
        <span className="bg-red-50 border border-red-200 px-3 py-1 rounded text-red-700">
          {job.level}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm line-clamp-3 mb-6">
        <span dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + '...' }} />
      </p>

      {/* Buttons */}
      <div className="mt-auto flex gap-3 text-sm">
        <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition duration-200">
          Apply now
        </button>
        <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="text-blue-600 border border-blue-600 cursor-pointer hover:bg-blue-50 px-4 py-2 rounded-xl transition duration-200">
          Learn more
        </button>
      </div>
    </div>
  )
}

export default JobCard
