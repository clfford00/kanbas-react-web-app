import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import BsGripVertical from "./BsGripVertical";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModuleControls from "./ModuleControls";
import * as client from "./client";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";

export default function Modules() {
  const { cid } = useParams(); // Get course ID from URL parameters
  const { modules } = useSelector((state: any) => state.modulesReducer); // Get modules from Redux state
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const [moduleName, setModuleName] = useState(""); // Local state to manage new module name

  // Fetch modules for the course when component mounts or course ID changes
  useEffect(() => {
    const fetchModules = async () => {
      const modules = await client.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    };
    fetchModules();
  }, [cid, dispatch]);

  // Create a new module and update Redux state
  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };

  // Remove a module and update Redux state
  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  // Save updates to a module and update Redux state
  const saveModule = async (module: any) => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div>
      {/* Module Controls: Input for adding a new module */}
      <div className="row mb-4">
        <ModuleControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={() => {
            createModule({ name: moduleName, course: cid });
            setModuleName(""); // Clear input field after adding
          }}
        />
      </div>

      {/* List of Modules */}
      <div className="row">
        <ul id="wd-modules" className="list-group rounded-0">
          {modules
            .filter((module: any) => module.course === cid) // Filter modules for the current course
            .map((module: any) => (
              <li key={module._id} className="wd-module list-group-item p-0 mb-5 ds-5 border-grey">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) => saveModule({ ...module, name: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule({ ...module, editing: false });
                        }
                      }}
                      value={module.name}
                    />
                  )}
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={removeModule}
                    editModule={() => dispatch(editModule(module._id))}
                  />
                </div>

                {/* List of Lessons within a Module */}
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0 border-start border-3 border-success">
                    {module.lessons.map((lesson: any) => (
                      <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                        <BsGripVertical />
                        <span className="wd-title">{lesson.name}</span>
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
  );
}
