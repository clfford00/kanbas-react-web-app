import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModuleControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
//import "./styles.css"
export default function Modules() {
    const { cid } = useParams();
    const modules = db.modules;
    return (
      <div id="wd-modules">
        <div className="pb-5">
          <ModuleControls/>
        </div>
        <div>
          <ul id="wd-modules" className="list-group flex-fill rounded-0 pt-4">
            {modules
              .filter((module: any) => module.course === cid)
              .map((module: any) => (
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2">
                  <BsGripVertical className="me-2 fs-3"/>
                  {module.name}
                  <ModuleControlButtons />
                </div>
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lessons: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1 border-green">
                      <BsGripVertical className="me-2 fs-3"/>
                      {lessons.name}
                      <LessonControlButtons />
                    </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
  );}
