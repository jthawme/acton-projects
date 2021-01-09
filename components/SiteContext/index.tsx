import React, { createContext, useContext, useState } from "react";

interface SiteContext {
  isTop: boolean;
  setIsTop: (isTop: boolean) => void;
}

const SiteContext = createContext<SiteContext>({
  isTop: true,
  setIsTop: () => false,
});

const SiteContainer: React.FC = ({ children }) => {
  const [isTop, setIsTop] = useState(true);

  return (
    <SiteContext.Provider value={{ isTop, setIsTop }}>
      {children}
    </SiteContext.Provider>
  );
};

const useSiteContext = () => useContext(SiteContext);

export { SiteContainer, useSiteContext };
