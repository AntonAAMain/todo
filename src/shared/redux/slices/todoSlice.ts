import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ITask } from "@/shared/types";

interface TodoState {
  todos: ITask[];
}

const initialState: TodoState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Math.random().toString(),
        title: action.payload,
        checked: false,
      });
    },

    checkTask: (state, action: PayloadAction<string>) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );

      return { ...state, todos: updatedTodos };
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      return { ...state, todos: updatedTodos };
    },

    editTask: (state, action: PayloadAction<ITask>) => {
      const updatedTodos = state.todos.map((todo) => {
        let title = todo.title;
        if (todo.id === action.payload.id) {
          title = action.payload.title;
        }
        return { ...todo, title: title };
      }) as ITask[];

      return { ...state, todos: updatedTodos };
    },
  },
});

export const { createTask, checkTask, deleteTask, editTask } =
  counterSlice.actions;

export default counterSlice.reducer;
