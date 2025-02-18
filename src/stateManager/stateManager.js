import { create } from "zustand";

const useStateManager = create((set) => ({
  activeMenu: null,
  activeVue: false,
  setActiveMenu: (item) =>
    set({
      activeMenu: item,
    }),
  SetActiveVue: () =>
    set((state) => ({
      activeVue: !state.activeVue,
    })),
}));
export default useStateManager;
