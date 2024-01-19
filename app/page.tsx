export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* ... existing content ... */}
      
      {/* Update the section for links to Add School and Show Schools */}
      <div className="flex space-x-4">
        <a href="/addSchool" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add School
        </a>
        <a href="/showSchools" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Show Schools
        </a>
      </div>
    </main>
  );
}
