import { Suspense } from "react";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
  return (
    <Suspense
      fallback={
        <main className="container-x py-10">
          <div className="animate-pulse">
            <div className="h-48 rounded-3xl bg-slate-200" />
            <div className="mt-6 h-64 rounded-3xl bg-slate-100" />
          </div>
        </main>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}