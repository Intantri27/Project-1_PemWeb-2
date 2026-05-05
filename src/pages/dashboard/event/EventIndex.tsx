import Button from "../../../component/ui/Button";
import { useNavigate } from "react-router-dom";

export default function EventIndex() {
    const navigate = useNavigate();
    return (
    <div className="p-4">
        <h2 className="text-xl font-medium mb-4 text-zinc-800">
        Halaman Event
      </h2>

      <Button
        label="Add New Event"
        variant="primary"
        onClick={() => navigate("/dashboard/event/create")}
      />
    </div>
    )
}