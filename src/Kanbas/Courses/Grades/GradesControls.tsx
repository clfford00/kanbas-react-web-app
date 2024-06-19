import { FaFileImport, FaFileExport, FaCog } from "react-icons/fa";

export default function GradesControls() {
  return (
    <div id="wd-grades-controls">
      <button
        id="wd-settings-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaCog />
      </button>
      <button
        id="wd-export-grades-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaFileExport />
        &nbsp;Export
      </button>
      <button
        id="wd-import-grades-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaFileImport />
        &nbsp;Import
      </button>
    </div>
  );
}
