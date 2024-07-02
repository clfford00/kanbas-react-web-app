import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const initialState = {
  assignments: initialAssignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      state.assignments.push(assignment);
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === updatedAssignment._id ? updatedAssignment : assignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
