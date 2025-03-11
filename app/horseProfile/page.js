
import HorseProfileClient from "@/components/HorseProfile/Profile";
import { Suspense } from "react";

export default function HorseProfilePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HorseProfileClient />
    </Suspense>
  );
}
