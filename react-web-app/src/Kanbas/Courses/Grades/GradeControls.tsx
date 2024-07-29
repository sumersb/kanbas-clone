import { PiGearSixFill } from "react-icons/pi";
import { LiaFileImportSolid } from "react-icons/lia";
import { TbFileExport } from "react-icons/tb";



export default function GradeControls() {
    return (
        <div className="row">
            <div id="wd-grade-controls">
                <button id="wd-grade-settings" className="btn btn-lg me-1 float-end border">
                    <PiGearSixFill className="position-relative me-2" style={{ bottom: "1px" }} />
                </button>
                <div className="dropdown d-inline me-1 float-end">
                    <button id="wd-grade-export" className="btn btn-lg btn-white dropdown-toggle border"
                        type="button" data-bs-toggle="dropdown">
                        <TbFileExport className="position-relative me-2" style={{ bottom: "1px" }} />
                        Export
                    </button>
                    <ul className="dropdown-menu">
                    </ul>
                </div>
                <button id="wd-grade-import" className="btn btn-lg btn-white me-1 float-end border">
                    <LiaFileImportSolid className="position-relative me-2" style={{ bottom: "1px" }} />
                    Import
                </button>
            </div>
        </div>
    );
} 