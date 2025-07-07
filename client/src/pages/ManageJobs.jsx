import React from "react";
import moment from "moment";
import { assets, manageJobsData } from "../assets/assets";
import{useNavigate} from "react-router-dom"// ✅ fixed import

export const ManageJobs = () => {
  const navigate =useNavigate()
  return (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
              <th className="py-2 px-4 border-b text-left">Job Title</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">Date</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 border-b text-center">Applications</th>
              <th className="py-2 px-4 border-b text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className="text-gray-600">
                <td className="px-4 py-2 border-b max-sm:hidden" >{index + 1}</td>
                <td className="px-4 py-2 border-b">{job.title}</td>
                <td className="px-4 py-2 border-b max-sm:hidden">{moment(job.date).format('11')}</td>  
                <td className="px-4 py-2 border-b max-sm:hidden">{job.location}</td>
                <td className="px-4 py-2 border-b text-center">{job.applicants}</td>
                <td className="px-4 py-2 border-b">
                  <input className="scale-125 ml-4" type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mty-4 flex justify-end">
        <button onClick={()=> navigate('/dashboard/add-job')} className="bg-black text-white px-4 py-2 rounded">Add new job</button>
      </div>
    </div>
  );
};
