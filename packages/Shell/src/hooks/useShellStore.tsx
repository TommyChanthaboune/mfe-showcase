import create from "zustand";

export type User = {
  isAuthorized: boolean;
  name: string;
  avatar: string;
};

export type GlobalStore = {
  user: User | null;
};

const useShellStore = create<GlobalStore>((set) => ({
  user: {
    isAuthorized: true,
    name: "Elle Woods",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg";
  }
}));

export default useShellStore;
