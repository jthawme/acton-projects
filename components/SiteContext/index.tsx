import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface SiteContext {
  isTop: boolean;
  setIsTop: (isTop: boolean) => void;
  isAbsoluteTop: boolean;
  setIsAbsoluteTop: (isTop: boolean) => void;
  observeElement: (el: HTMLElement) => () => void;
  activeSection?: string;
  virtualSplash?: boolean;
}

const SiteContext = createContext<SiteContext>({
  isTop: true,
  setIsTop: () => false,
  isAbsoluteTop: true,
  setIsAbsoluteTop: () => false,
  observeElement: () => () => false,
  virtualSplash: true,
});

const SiteContainer: React.FC = ({ children }) => {
  const [isTop, setIsTop] = useState(true);
  const [isAbsoluteTop, setIsAbsoluteTop] = useState(true);
  const sectionObserver = useRef<IntersectionObserver>();
  const deferredObserves = useRef<HTMLElement[]>([]);
  const [activeSections, setActiveSections] = useState({
    landing: false,
    about: false,
    service: false,
  });
  const [activeSection, setActiveSection] = useState<string>();
  const [virtualSplash, setVirtualSplash] = useState(true);

  const observeElement = useCallback((el) => {
    if (!sectionObserver.current) {
      deferredObserves.current.push(el);
    } else {
      sectionObserver.current.observe(el);
    }

    return () => {
      sectionObserver.current.unobserve(el);
    };
  }, []);

  useEffect(() => {
    if (window.scrollY < window.innerHeight * 0.25) {
      document.documentElement.classList.toggle("lock", virtualSplash);
    }
  }, [virtualSplash]);

  useEffect(() => {
    sectionObserver.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setActiveSections((state) => ({
            ...state,
            [e.target.id]: e.isIntersecting,
          }));
        });
      },
      {
        threshold: [0.1],
        rootMargin: "50px",
      }
    );

    deferredObserves.current.forEach((el) => {
      sectionObserver.current.observe(el);
    });

    setTimeout(() => {
      setVirtualSplash(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setActiveSection(
      Object.keys(activeSections)
        .reverse()
        .find((k) => activeSections[k])
    );
  }, [activeSections]);

  return (
    <SiteContext.Provider
      value={{
        isTop,
        setIsTop,
        observeElement,
        activeSection,
        virtualSplash,
        isAbsoluteTop,
        setIsAbsoluteTop,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

const useSiteContext = () => useContext(SiteContext);

export { SiteContainer, useSiteContext };
