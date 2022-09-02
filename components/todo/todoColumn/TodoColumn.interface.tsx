import { TodoCardI } from "../todoCard";

export interface TodoColumnI {
  cards: TodoCardI[];
  title: string;
}

export interface CardsI {
  [key: string]: TodoCardI[];
}