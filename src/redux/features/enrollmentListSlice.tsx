import { Enrollment } from "@/models/Enrollment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EnrollmentListState = {
  enrollments: Enrollment[];
};

export type DeleteEnroll = {
  id: string;
};
const initialState: EnrollmentListState = { enrollments: [] };

export const enrollmentListSlice = createSlice({
  name: "enrollmentList",
  initialState: initialState,
  reducers: {
    addEnrollment: (state, action: PayloadAction<Enrollment>) => {
      state.enrollments.push(action.payload);
    },
    removeEnrollment: (state, action: PayloadAction<DeleteEnroll>) => {
      const remainEnrollments = state.enrollments.filter(
        (obj) => obj.id != action.payload.id
      );
      state.enrollments = remainEnrollments;
    },
    setInitialData(state, action: PayloadAction<any[]>) {
      state.enrollments = action.payload;
    },
  },
});

export const { addEnrollment, removeEnrollment, setInitialData } =
  enrollmentListSlice.actions;
export default enrollmentListSlice.reducer;
