import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { browserHistoryAtom } from "./BrowserHistoryAtom";

const BrowserHistoryComp: React.ComponentType = () => {
  const location = useLocation();
  const [, setHistory] = useAtom(browserHistoryAtom);
  useEffect(() => {
    setHistory((prev) => {
      if (location.pathname !== prev[prev.length - 1]) {
        return [...prev, location.pathname];
      }
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return null;
};
BrowserHistoryComp.displayName = "BrowserHistory";
const BrowserHistory = React.memo(BrowserHistoryComp);
export default BrowserHistory;
