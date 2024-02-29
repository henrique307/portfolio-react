import { useInView } from "react-intersection-observer";
import "./observer.component.css";
import { useState } from "react";

interface ObserverComponentProps {
  display: boolean;
  recievePage: (pageNumber: number) => void
}

export function ObserverComponent({recievePage, display}: ObserverComponentProps) {
  const [ref, _] = useInView({ onChange: observationTrigger });
  const [pageNumber, setPageNumber] = useState(1);

  function observationTrigger() {
    setPageNumber(pageNumber + 1)
    recievePage(pageNumber)
  }

  return <div ref={ref} style={{display: display ? "block" : "none"}} className="observer">Carregando...</div>;
}
