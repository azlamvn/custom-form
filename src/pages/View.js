import React, { useState } from "react";
import ViewData from "../components/ViewData";
import ApplicantForm from "../components/ApplicantForm";

const View = () => {
  const [formvalues, setFormValues] = useState([]);
  const [viewForm,setViewForm]=useState(false)
  const handleFormModal=()=>{
    setViewForm(true)
  }

  return (
    <div className="w-full mx-auto ">
     <h1 className="text-2xl py-5 font-bold text-gray-900">View Applications</h1> 
      <div className="flex flex-col items-end">
        <ViewData formvalues={formvalues} />
        <button className="flex bg-gray-900 text-white bg-gray-200 px-4 py-2 rounded-md mt-5" onClick={handleFormModal}> Add Field</button>
      </div>
    {viewForm && <ApplicantForm formvalues={formvalues} setFormValues={setFormValues} setViewForm={setViewForm}/>}
    </div>
  );
};

export default View;
