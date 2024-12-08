import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectCardProps } from "../../interface/interface";


const initialState: ProjectCardProps = {
    img: "",
    name: "",
    description: "",
    technologies: [],
    link: "",
    git: "",
    id: undefined, 
};

export const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    editData: (
      state, 
      action: PayloadAction<Partial<ProjectCardProps>> 
    ) => {
      Object.assign(state, action.payload); 
    },
    clearData: (state) => {
        Object.assign(state, initialState); 
      },
  },
});

export const { editData,clearData } = editSlice.actions;
export default editSlice.reducer;
