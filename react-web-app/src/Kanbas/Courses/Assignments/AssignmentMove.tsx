import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";


export default function AssignmentMove() {
    return (
        <div className="float-start">
            <BsGripVertical className="me-2 fs-3" />
            <TbFilePencil className="me-2 fs-3 text-success" />
        </div>
    );
}
