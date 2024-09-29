"use client";

import cn from "classnames";

import cls from "./Header.module.scss";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/redux/store";
import { createTask } from "@/shared/redux/slices/todoSlice";

export const Header = () => {
  const [newTaskName, setNewTaskName] = useState<string>("");

  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(createTask(newTaskName));

    setNewTaskName("");
  };

  return (
    <div className={cn(cls.container)}>
      <div>Добавить задачу</div>
      <input
        onChange={(e) => setNewTaskName(e.target.value)}
        value={newTaskName}
        type="text"
      />
      <button onClick={addTask}>Добавить задачу</button>
    </div>
  );
};
