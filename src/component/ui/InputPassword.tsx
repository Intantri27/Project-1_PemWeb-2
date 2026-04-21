import { useState } from "react";

export const PasswordInput = ({ label, name, register, error }: any) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <div className="flex">
        <input
          type={show ? "text" : "password"}
          {...register(name)}
          className="w-full border border-r-0 p-2 rounded-l"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="px-3 border border-l-0 rounded-r"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default PasswordInput;