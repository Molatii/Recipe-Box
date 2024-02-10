import DashboardLayout from "@/components/dashboard_components/dashboardLayout";


export default function search() {
  return (
    <main className="w-full">
          <DashboardLayout>
              <p>search result for:</p>
        <div
          id="cards-container"
          className="w-full flex flex-wrap gap-5 ml-0 sm:ml-2"
        >
       
        </div>
      </DashboardLayout>
    </main>
  );
}
