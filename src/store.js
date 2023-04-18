import { create } from "zustand";

const userStore = create((set) => ({
    solders: 0,
    addSolder: () => set((state) => ({solders: state.solders + 1})),
    removeSolder: () => set((state) => ({solders: state.solders - 1})),
    removeAll: () => set((state) => ({solders: 0})),


    eggs: {
        egg: 0
    },
    incEgg: () => set((state) => ({
        eggs: {...state.eggs, egg: state.eggs.egg + 1}
    })),
    redEggs: {
        small: 0
    },
    addRedEggs: () => set(state => ({
        redEggs: {...state.redEggs, small: state.redEggs.small + 1}
    })),

    stars: 90,
    moto: "its kuta kinte",
    goal: "learning state management",
    languages: ["java", "c#"],
    addLangue: (language) => set((state) => ({languages: [...state.languages, language]})),
    cars: [],
    addCar: (car) => set((state) => ({cars: [...state.cars, car]}))
}))

export default userStore