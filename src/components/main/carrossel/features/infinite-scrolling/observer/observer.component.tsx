import { useInView } from "react-intersection-observer";
import "./observer.component.css";
import { useState } from "react";

interface ObserverComponentProps {
  recievePage: (pageNumber: number) => void
}

export function ObserverComponent({recievePage}: ObserverComponentProps) {
  const [ref, _] = useInView({ onChange: observationTrigger });
  const [pageNumber, setPageNumber] = useState(1);

  function observationTrigger() {
    setPageNumber(pageNumber + 1)
    recievePage(pageNumber)
  }

  return <div ref={ref} className="observer">Carregando...</div>;
}
