import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { TbFileImport } from "react-icons/tb";
import { TbTargetArrow } from "react-icons/tb";
import { GiTargeted } from "react-icons/gi";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";






{/* Find more icons */ }
export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "300px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                        <MdDoNotDisturbAlt className="me-2 fs-5" />
                        Unpublish
                    </button>
                </div>
                <div className="w-50">
                    <button className="btn btn-lg btn-success w-100">
                        <FaCheckCircle className="me-2 fs-5" />
                        Publish
                    </button>
                </div>
            </div>
            <br />
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <TbFileImport className="me-2 fs-5" />
                Import Existing Content
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <TbTargetArrow className="me-2 fs-5" />
                Import From Commons
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <GiTargeted className="me-2 fs-5" />
                Choose Home Page
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BsFileEarmarkBarGraph className="me-2 fs-5" />
                View Course Stream
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <HiOutlineSpeakerphone className="me-2 fs-5" />
                New Announcement
            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <BsFileEarmarkBarGraph className="me-2 fs-5" />
                New Analytics            </button>
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                <FaRegBell className="me-2 fs-5" />
                View Course Notifications            </button>
            {/* Complete the rest of the buttons */}
        </div>
    );
}

