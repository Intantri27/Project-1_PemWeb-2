import { z } from "zod";

export const registerSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
  kategori: z.string().min(1, "Pilih kategori"),
  bio: z.string().min(1, "Bio wajib diisi"),
});