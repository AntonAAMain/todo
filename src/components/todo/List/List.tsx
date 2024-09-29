"use client";

import cn from "classnames";

import cls from "./List.module.scss";
import { useAppDispatch, useAppSelector } from "@/shared/redux/store";
import {
  checkTask,
  deleteTask,
  editTask,
} from "@/shared/redux/slices/todoSlice";
import { useState } from "react";
import { ITask } from "@/shared/types";

export const List = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  const dispatch = useAppDispatch();

  const checkTodo = (id: string) => {
    dispatch(checkTask(id));
  };

  const deleteTodo = (id: string) => {
    dispatch(deleteTask(id));
  };

  const editTodo = (todo: ITask, value: string) => {
    dispatch(editTask({ ...todo, title: value }));
  };

  const [filter, setFilter] = useState<boolean | null>(null);

  return (
    <div className={cls.container}>
      <div className={cls.filter}>
        <div>
          Показывать:
          {filter === null
            ? "Все"
            : filter
            ? "Только выполненные"
            : "Только невыполненные"}
        </div>
        <div className={cls.filtersButtons}>
          <button onClick={() => setFilter(null)}>Все</button>
          <button onClick={() => setFilter(true)}>Только выполненные</button>
          <button onClick={() => setFilter(false)}>Только невыполненные</button>
        </div>
      </div>

      <div className={cn(cls.list)}>
        {todos.map(
          (todo) =>
            (filter === null ||
              (filter && todo.checked) ||
              (!filter && !todo.checked)) && (
              <div className={cls.todo} key={todo.id}>
                <div>id: {todo.id}</div>

                <div>
                  title:{" "}
                  <input
                    onChange={(e) => editTodo(todo, e.target.value)}
                    value={todo.title}
                    type="text"
                  />{" "}
                </div>

                <button onClick={() => checkTodo(todo.id)}>{`${
                  todo.checked ? "Выполнено" : "Невыполнено"
                }`}</button>

                <button onClick={() => deleteTodo(todo.id)}>
                  Удалить задачу
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};
