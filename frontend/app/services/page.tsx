import { Suspense } from "react";
import ServicesPage from "./ServiceClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesPage />
    </Suspense>
  );
}
