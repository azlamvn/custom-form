import React, { useEffect, useState } from "react";

const ApplicantForm = ({ formvalues, setFormValues, setViewForm }) => {
  const [formValue, setStateFormValue] = useState({
    name: null,
    age: null,
    gender: null,
    address: null,
    date: null,
    domain: "",
  });
  const [onSubmitError, setOnSubmitError] = useState(false);
  const [isSubmited,setIsSubmited]=useState(false)
  const options = [
    { value: "", lable: "Select Domain" },
    { value: "reactjs", lable: "Reactjs" },
    { value: "flutter", lable: "Flutter" },
    { value: "nodejs", lable: "Nodejs" },
  ];

  useEffect(() => {
    if (
      !formValue?.name ||
      !formValue?.age ||
      !formValue?.address ||
      !formValue?.date
    ) {
      setOnSubmitError(true);
    }
    else{
        setOnSubmitError(false)
    }
  }, [formValue]);

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
      if (!onSubmitError) {      
        setFormValues([...formvalues, { ...formValue, id: Math.random() }]);
        setStateFormValue({
            name: null,
            age: null,
            gender: null,
            address: null,
            date: null,
            domain: "",
          });
        setViewForm(false)
      }
      else{
        setIsSubmited(true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-12 left-1/3 border border-gray-900 rounded-md bg-white px-5  pt-3 pb-5">
      <button
        className="bg-gray-900 rounded-full w-7 h-7 text-sm absolute right-1 top-1"
        onClick={() => setViewForm(false)}
      >
        X
      </button>
      <h2 className="text-gray-900 pb-4 font-bold">Add Applicant</h2>
      <div className="flex flex-col gap-2 text-gray-900 w-full">
        <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-left">Name:</p>
            <div>
            <input
              name="name"
              value={formValue?.name}
              className="border border-gray-600 rounded-md w-full"
              onChange={(e) =>
                setStateFormValue({ ...formValue, name: e.target.value })
              }
            />
           {isSubmited&&!formValue?.name &&  <p className="text-start text-red-500 text-sm">please enter value</p>}
           </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-left">Age:</p>
            <div>
            <input
              name="name"
              type="number"
              value={formValue?.age}
              onChange={(e) =>
                setStateFormValue({ ...formValue, age: e.target.value })
              }
              className="border border-gray-600 rounded-md w-full"
            /> {isSubmited&&!formValue?.age &&  <p className="text-start text-red-500 text-sm">please enter value</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-left">Domain:</p>
            <select
              name="name"
              value={formValue?.domain}
              onChange={(e) =>
                setStateFormValue({ ...formValue, domain: e.target.value })
              }
              className="border border-gray-600 rounded-md text-xl"
            >
              {options?.map((item) => (
                <option key={item.value} value={item.value}>{item.lable}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-left">Gender:</p>
            <div>
              <div className="flex gap-x-2">
                <input
                  name="gender"
                  type="radio"
                  value="male"
                  onChange={(e) =>
                    setStateFormValue({ ...formValue, gender: e.target.value })
                  }
                  className="border border-gray-600 rounded-md"
                />
                <p className="text-2xl">Male</p>
              </div>
              <div className="flex gap-x-2">
                <input
                  name="gender"
                  type="radio"
                  value={"female"}
                  onChange={(e) =>
                    setStateFormValue({ ...formValue, gender: e.target.value })
                  }
                  className="border border-gray-600 rounded-md"
                />
                <p className="text-2xl">Female</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-left">Adresss:</p>
            <div>
            <textarea
              type=""
              name="address"
              value={formValue?.address}
              onChange={(e) =>
                setStateFormValue({ ...formValue, address: e.target.value })
              }
              className="border border-gray-600 rounded-md w-full"
            />
             {isSubmited&&!formValue?.address &&  <p className="text-start text-red-500 text-sm">please enter value</p>}
           </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="text-left">Applied Date:</p>
            <div>
            <input
              type="date"
              name="date"
              value={formValue?.date}
              className="border border-gray-600 rounded-md w-full text-xl"
              onChange={(e) =>
                setStateFormValue({ ...formValue, date: e.target.value })
              }
            />
             {isSubmited&&!formValue?.date &&  <p className="text-start text-red-500 text-sm">please enter value</p>}
           </div>
          </div>
          <button className="bg-gray-900 px-2 py-3 text-white rounded-md mt-3 disabled:bg-gray-200" disabled={onSubmitError&& isSubmited}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicantForm;
