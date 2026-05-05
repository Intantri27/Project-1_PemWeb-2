import { useForm } from "react-hook-form";
import InputText from "../component/ui/InputText";
import { registerSchema } from "../schema/RegisterSchema";
import {PasswordInput} from "../component/ui/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectInput } from "../component/ui/SelectInput";
import Button from "../component/ui/Button";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      <InputText
        label="Nama Lengkap"
        name="nama"
        register={register}
        error={errors.nama?.message}
      />

      <InputText
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />

      <PasswordInput
        label="Password"
        name="password"
        register={register}
        error={errors.password?.message}
      />

      <SelectInput
        label="Kategori Event"
        name="kategori"
        register={register}
        options={[
          { label: "IT Seminar", value: "seminar" },
          { label: "IT Workshop", value: "workshop" },
          { label: "IT Talkshow", value: "talkshow" },
        ]}
        error={errors.kategori?.message}
      />

      <div>
        <label className="block mb-1 font-medium">Bio</label>
        <textarea
          {...register("bio")}
          className="w-full border p-2 rounded"
        />
        {errors.bio && (
          <p className="text-red-500 text-sm">{errors.bio.message}</p>
        )}
      </div>

      <Button label="Daftar" loading={isSubmitting} />
              <div>
          Sudah punya akun? <Link to="/login" className="text-red-900">Login Sekarang</Link>
        </div>
    </form>
  );
}