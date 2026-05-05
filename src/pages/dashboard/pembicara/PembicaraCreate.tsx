import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../component/ui/Button";


const pembicaraSchema = z.object({
  pembicara_name: z.string().min(1, "Nama pembicara wajib diisi"),
  role: z.string().min(1, "Role wajib dipilih"),
});

type FormData = z.infer<typeof pembicaraSchema>;

export default function PembicaraCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(pembicaraSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(data);

    navigate("/dashboard/pembicara");
  };

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-xl font-bold mb-5">Create Pembicara</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Pembicara Name</label>
          <input
            {...register("pembicara_name")}
            className="w-full border rounded px-3 py-2"
          />
          {errors.pembicara_name && (
            <p className="text-red-500 text-sm">{errors.pembicara_name.message}</p>
          )}
        </div>

       <div>
          <label className="block mb-1 font-medium">Role</label>
          <input
            {...register("role")}
            className="w-full border rounded px-3 py-2"
          />
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        <Button label="Add" type="submit" className="bg-red-900 text-white px-5 py-2 rounded"/>  
      </form>
    </div>
  );
}