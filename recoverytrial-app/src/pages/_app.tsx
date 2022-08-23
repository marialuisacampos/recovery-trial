import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div>
        <Component {...pageProps} />;
      </div>
    </AuthProvider>
  );
}

export default MyApp;
