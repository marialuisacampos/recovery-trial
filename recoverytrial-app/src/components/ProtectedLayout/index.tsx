import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthProvider/useAuth";

type Props = {};

const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.email) {
      router.push("/");
    }
  });

  return auth.email && children;
};

export default ProtectedLayout;
