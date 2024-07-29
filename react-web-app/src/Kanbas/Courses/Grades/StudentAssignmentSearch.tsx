import { PiGearSixFill } from "react-icons/pi";
import { LiaFileImportSolid } from "react-icons/lia";
import { TbFileExport } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";




export default function StudentAssignmentSearch() {
    return (
        <div className="mt-3">
            <div className="row mb-3">
                <div className="form-group col-md-6">
                    <label htmlFor="wd-available-from" className="form-label"><b>Student Names</b></label>
                    <div className="dropdown me-1">
                        <button id="wd-publish-all-btn" className="btn btn-lg btn-white dropdown-toggle border w-100 d-flex justify-content-between align-items-center"
                            type="button" data-bs-toggle="dropdown">
                            <div className="d-flex align-items-center">
                                <FaSearch className="me-2" />
                                <span>Search Students</span>
                            </div>
                        </button>
                        <ul className="dropdown-menu">
                        </ul>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="wd-available-from" className="form-label"><b>Assignment Names</b></label>
                    <div className="dropdown me-1">
                        <button id="wd-publish-all-btn" className="btn btn-lg btn-white dropdown-toggle border w-100 d-flex justify-content-between align-items-center"
                            type="button" data-bs-toggle="dropdown">
                            <div className="d-flex align-items-center">
                                <FaSearch className="me-2" />
                                <span>Search Assignments</span>
                            </div>
                        </button>
                        <ul className="dropdown-menu">
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="text-nowrap">
                    <button id="wd-add-assignment-group" className="btn btn-lg btn-white me-1 float-start border">
                        <CiFilter className="position-relative me-2" style={{ bottom: "1px" }} />
                        Import
                    </button>
                </div>
            </div>
        </div>
    );
}