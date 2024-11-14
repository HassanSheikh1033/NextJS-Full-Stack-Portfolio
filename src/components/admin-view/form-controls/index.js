"use client";

export default function FormControls({ controls, formData, setFormData }) {
  return controls.map((controlItem) => (
    <div className="mb-4">
      <label className="block text-[#fff] text-sm font-bold mb-2">
        {controlItem.label}
      </label>
      <input
        placeholder={controlItem.placeholder}
        type={controlItem.type}
        name={controlItem.name}
        id={controlItem.name}
        value={formData[controlItem.name]}
        onChange={(e) => {
          setFormData({
            ...formData,
            [controlItem.name]: e.target.value,
          });
        }}
        className="shadow border bg-[#4b0e39] rounded w-full py-2 px-3 text-[#fff] tracking-wide focus:outline-none focus:shadow-outline"
      />
    </div>
  ));
}
