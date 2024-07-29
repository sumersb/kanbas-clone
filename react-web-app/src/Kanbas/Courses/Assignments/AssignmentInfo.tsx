import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentInfo() {
    return (
        <div className="float-end">
            <span className="border rounded-pill px-3 py-1">40% of Total</span>            <FaPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}