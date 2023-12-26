import { create } from 'zustand';
import data from './../db.json';

export const useSalaStore = create(set => ({
  sala: {},
  enviarId: e =>
    set({
      sala: data[e.target.parentElement.parentElement.parentElement.id - 1],
    }),
}));
