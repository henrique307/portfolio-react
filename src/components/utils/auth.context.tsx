import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";

interface AuthContextProps {
  authToken: string;
  setAuthToken: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) {
  const [authToken, setAuthToken] = useState("");

  const contextValue: AuthContextProps = {
    authToken,
    setAuthToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {" "}{children}{" "}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext deve ser usado dentro de um Provider");
  }

  return context;
}
