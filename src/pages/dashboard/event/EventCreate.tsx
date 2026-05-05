import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../component/ui/Button";


const eventSchema = z.object({
  event_name: z.string().min(1, "Event wajib diisi"),
  category_name: z.string().min(1, "Category wajib dipilih"),
  event_date: z.string().min(1, "Tanggal wajib diisi"),
  description: z.string().min(1, "Deskripsi wajib diisi"),
});

type FormData = z.infer<typeof eventSchema>;

export default function EventCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(data);

    navigate("/dashboard/event");
  };

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-xl font-bold mb-5">Create Event</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Event Name</label>
          <input
            {...register("event_name")}
            className="w-full border rounded px-3 py-2"
          />
          {errors.event_name && (
            <p className="text-red-500 text-sm">{errors.event_name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            {...register("category_name")}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Category</option>
            <option value="Competition">Competition</option>
            <option value="Seminar">Seminar</option>
            <option value="Workshop">Workshop</option>
          </select>
          {errors.category_name && (
            <p className="text-red-500 text-sm">{errors.category_name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Event Date</label>
          <input
            type="date"
            {...register("event_date")}
            className="w-full border rounded px-3 py-2"
          />
          {errors.event_date && (
            <p className="text-red-500 text-sm">{errors.event_date.message}</p>
          )}
        </div>


        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description")}
            className="w-full border rounded px-3 py-2"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <Button label="Add" type="submit" className="bg-red-900 text-white px-5 py-2 rounded"/>  

      </form>
    </div>
  );
}