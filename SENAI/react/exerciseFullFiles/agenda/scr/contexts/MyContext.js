import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
    
    let agenda = []
  
    return (
      <MyContext.Provider value={{ agenda }}>
        {children}
      </MyContext.Provider>
    );
  }

  export function useMyContext() {
    return useContext(MyContext);
  }