import React from "react";

const ViewData = ({ formvalues }) => {
  return (
    <div className="flex flex-col gap-2 text-gray-900 w-full">
      <table>
        <thead className="border border-gray-900  bg-gray-900 text-white">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Adresss</th>
            <th>Applied Date</th>
          </tr>
        </thead>
        <tbody className="border border-x border-gray-900">
          {formvalues?.map((value, index) => (
            <tr className="border border-x border-gray-900" key={value?.id}>
              <td>{index + 1}</td>
              <td>{value?.name}</td>
              <td>{value?.age}</td>
              <td>{value?.gender}</td>
              <td>{value?.address}</td>
              <td>{value?.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!formvalues?.length && (
        <p className="flex justify-center w-full py-10 text-gray-400">
          No data found
        </p>
      )}
    </div>
  );
};

export default ViewData;
