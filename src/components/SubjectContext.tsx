import { createContext, ReactNode, useContext, useState } from 'react';

const SubjectContext = createContext<
  | { selectedSubject: string; setSelectedSubject: (subject: string) => void }
  | undefined
>(undefined);

export const SubjectProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [selectedSubject, setSelectedSubject] = useState('All');

  return (
    <SubjectContext.Provider value={{ selectedSubject, setSelectedSubject }}>
      {children}
    </SubjectContext.Provider>
  );
};

export const useSelectedSubject = () => {
  const context = useContext(SubjectContext);
  if (!context) {
    throw new Error('useSelectedSubject must be used within a SubjectProvider');
  }
  return context;
};
