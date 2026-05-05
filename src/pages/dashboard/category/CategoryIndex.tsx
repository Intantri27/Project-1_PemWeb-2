import Button from "../../../component/ui/Button";
import { useNavigate } from "react-router-dom";

export default function CategoryIndex() {
    const navigate = useNavigate();
    return (
    <div className="p-4">
        <h2 className="text-xl font-medium mb-4 text-zinc-800">
        Halaman category
      </h2>

      <Button
        label="Add New Category"
        variant="primary"
        onClick={() => navigate("/dashboard/category/create")}
      />
    </div>
    )
}
