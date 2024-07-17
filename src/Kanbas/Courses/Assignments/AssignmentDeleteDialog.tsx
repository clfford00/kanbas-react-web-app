export default function AssignmentDeleteDialog({
    deleteAssignment,
}: {
    deleteAssignment: () => void;
}) {
    return (
        <div
            id="wd-delete-assignment-dialog"
            className="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                        >
                            Would you like to delete this assignment?
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            onClick={deleteAssignment}
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Yes{" "}
                        </button>
                        <button
                            type="button"
                            data-bs-dismiss="modal"
                            className="btn btn-secondary"
                        >
                            No{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
