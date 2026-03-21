"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onLogout = async () => {
    setIsLoading(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
    setIsLoading(false);
  };

  return (
    <button type="button" className="btn btn-ghost" onClick={onLogout}>
      {isLoading ? "Keluar..." : "Logout"}
    </button>
  );
}
