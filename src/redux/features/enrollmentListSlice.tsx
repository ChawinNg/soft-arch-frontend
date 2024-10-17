import { Enrollment } from "@/models/Enrollment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EnrollmentListState = {
  enrollments: Enrollment[];
};

const initialState: EnrollmentListState = { enrollments: [] };

export const enrollmentListSlice = createSlice({
  name: "enrollmentList",
  initialState: initialState,
  reducers: {
    addEnrollment: (state, action: PayloadAction<Enrollment>) => {
      state.enrollments.push(action.payload);
    },
    removeEnrollment: (state, action: PayloadAction<Enrollment>) => {
      const remainEnrollments = state.enrollments.filter(
        (obj) => obj.id != action.payload.id
      );
      state.enrollments = remainEnrollments;
    },
  },
});

export const { addEnrollment, removeEnrollment } = enrollmentListSlice.actions;
export default enrollmentListSlice.reducer;
