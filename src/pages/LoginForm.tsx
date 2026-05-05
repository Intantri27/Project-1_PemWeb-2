import { useForm } from "react-hook-form";
import InputText from "../component/ui/InputText";
import InputPassword from "../component/ui/InputPassword";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import Button from "../component/ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";

type FormData = {
    email: string;
    password: string;
};

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function LoginForm() {

    const { login } = useAuthStore();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        if (data.email === "admin@gmail.com" && data.password === "password123") {
            alert("Login berhasil");
            login(data.email);
            navigate("/dashboard");
        } else {
            alert("Email atau password salah");
            return;
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <InputText 
                label="Email" 
                name="email" 
                register={register} 
                error={errors.email?.message} />

                {/* Password */}
                <InputPassword 
                label="Password" 
                name="password" 
                register={register} 
                error={errors.password?.message} />

                <Button label="Login" type="submit" className="mt-4 mr-2.5"/> 

                <div>Belum punya akun? <Link to="/register" className="text-red-900">Daftar Sekarang</Link></div>
            </form>
        </div>
    );
}