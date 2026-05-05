import { useNavigate } from "react-router-dom";
import Button from "../../../component/ui/Button";

export default function EventIndex() {
    const navigate = useNavigate();
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-zinc-800">Halaman pembicara</h2>
            <Button label = "Add New Pembicara" variant = "primary" 
            onClick={() => navigate("/dashboard/pembicara/create")}/>
        </div>
    )
}