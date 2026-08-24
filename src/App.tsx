import EmployeeCard from "./components/EmployeeCard";

// Simulasi data dari Backend (Dummy Data)
const employees = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Frontend Developer",
    isActive: true,
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "UI/UX Designer",
    isActive: true,
  },
  {
    id: 3,
    name: "Agus Pratama",
    role: "Backend Developer",
    isActive: false,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Daftar Pegawai PKL
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            isActive={employee.isActive}
          />
        ))}
      </div>
    </div>
  );
}