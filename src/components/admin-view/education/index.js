"use client";

import FormControls from "../form-controls";


const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];


export default function AdminEducationView({handleSaveData, formData, setFormData , data}) {
  return  <div className="w-full">
  <div className="bg-[#5f124d] shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div className="flex flex-col gap-4  p-4 ">
                  <p>{item.degree}</p>
                  <p>{item.college}</p>
                  <p>{item.year}</p>
                </div>
              ))
            : null}
        </div>
    <FormControls
      controls={controls}
      formData={formData}
      setFormData={setFormData}
    />
    <button onClick={()=> handleSaveData('education')} className="mt-[10px] bg-[#4b0e39] text-[#fff] p-4 font-bold text-[16px]">
      Add Info
    </button>
  </div>
</div>
}
