import { ReactNode } from "react";

export interface IMenuOpenProps {
  isOpen: boolean;
  toggle: () => void;
}

export interface INavLinksProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IMenuLinksProps {
  children: ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  to: string;
  isOpen: boolean;
}
