import { createContext, useState } from 'react';

export const DataItemsContext = createContext();

export const DataItemsProvider = ({ children }) => {
  const [dataItems, setDataItems] = useState([
    // initial dataItems
  ]);

  return (
    <DataItemsContext.Provider value={{ dataItems, setDataItems }}>
      {children}
    </DataItemsContext.Provider>
  );
};
