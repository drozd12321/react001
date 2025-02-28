import { create } from "zustand";

const useStateManager = create((set) => ({
  select: "setActions",
  SetSelect: (action) =>
    set((state) => ({
      select: action,
    })),
  checked: [],
  SetChecked: (id) =>
    set((state) => {
      if (state.checked.includes(id)) {
        return {
          checked: state.checked.filter((item) => item != id),
        };
      } else {
        return { checked: [...state.checked, id] };
      }
    }),

  activeVue: false,
  SetActiveVue: () =>
    set((state) => ({
      activeVue: !state.activeVue,
    })),
}));
export default useStateManager;
