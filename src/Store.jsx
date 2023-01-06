import create from "zustand";

export const usePageStore = create((set) => ({
    home : true,
    toggleHome: () => set((state) => ({ home: !state.home })),
    about : false,
    toggleAbout: () => set((state) => ({ about: !state.about })),
    contact : false,
    toggleContact: () => set((state) => ({ contact: !state.contact })),
    projects : false,
    toggleProjects: () => set((state) => ({ projects: !state.projects })),
    githubb : false,
    toggleGithubb: () => set((state) => ({ githubb: !state.githubb }))


}));
