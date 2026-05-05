import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../component/ui/Button";

const categorySchema = z.object({
  category_name: z.string().min(1, "Category wajib diisi"),
});

type FormData = z.infer<typeof categorySchema>;

export default function CategoryCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(data);
    navigate("/dashboard/category");
  };

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-xl font-bold mb-5">Create Category</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Category Name</label>
          <input
            {...register("category_name")}
            className="w-full border rounded px-3 py-2"
          />
          {errors.category_name && (
            <p className="text-red-500 text-sm">{errors.category_name.message}</p>
          )}
        </div>

        <Button label="Add" type="submit" className="bg-red-900 text-white px-5 py-2 rounded"/>  

      </form>
    </div>
  );
}