import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <label className="text-center pe-2 border border-dark rounded-pill">&nbsp; &nbsp; 40% of Total &nbsp; &nbsp;</label>
      <BsPlus/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
