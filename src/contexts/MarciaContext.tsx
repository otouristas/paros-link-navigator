import { createContext, useContext, useState, ReactNode } from 'react';

interface MarciaContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
}

const MarciaContext = createContext<MarciaContextType | undefined>(undefined);

export function MarciaProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <MarciaContext.Provider value={{ isOpen, openChat, closeChat }}>
      {children}
    </MarciaContext.Provider>
  );
}

export function useMarcia() {
  const context = useContext(MarciaContext);
  if (context === undefined) {
    throw new Error('useMarcia must be used within a MarciaProvider');
  }
  return context;
}