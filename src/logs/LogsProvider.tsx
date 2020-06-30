import React, { useContext } from "react";
import { ReactReduxContext, ReactReduxContextValue } from "react-redux";
import { RootState } from "../store/store";

const ReduxLogsContext = React.createContext<Array<RootState>>([]);

export const ReduxLogsProvider: React.FC = ({ children }) => {
  const value = React.useContext<ReactReduxContextValue<RootState>>(
    ReactReduxContext
  );
  const [logs, setLogs] = React.useState<Array<RootState>>([]);
  if (!value) {
    throw new TypeError(
      "ReduxLogsProvider should be placed under react-redux provider"
    );
  }
  const { store } = value;
  React.useEffect(() => {
    const addValueToList = () => {
      const current = store.getState();
      setLogs([...logs, current]);
    };
    // initial value
    addValueToList();
    // dispatch
    const unsubscribe = store.subscribe(addValueToList);
    return unsubscribe;
  }, [store]);
  return (
    <ReduxLogsContext.Provider value={logs}>
      {children}
    </ReduxLogsContext.Provider>
  );
};

export const useLogs = () => {
  return useContext(ReduxLogsContext);
};
