import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Competition from "./pages/Competition";
import MainLayout from "./layouts/MainLayouts";
import Seminar from "./pages/Seminar";
import AuthLayout from "./layouts/AuthLayouts";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";
import EventCreate from "./pages/dashboard/event/EventCreate";
import Homepage from "./pages/Homepage";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";

function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        {/* login dan register */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element = {<DashboardLayout />}>
            <Route index element={<DashboardIndex />} />
            <Route path="category" element={<CategoryIndex />} />
            <Route path="event" element={<EventIndex />} />
            <Route path="category/create" element={<CategoryCreate />} />
            <Route path="event/create" element={<EventCreate />} />
            <Route path="pembicara" element={<PembicaraIndex />} />
            <Route path="pembicara/create" element={<PembicaraCreate />} />
          </Route>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;