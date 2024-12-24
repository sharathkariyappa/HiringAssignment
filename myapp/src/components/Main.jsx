import { useNavigate } from "react-router-dom";

export default function MainContent() {
  const navigate = useNavigate()
    const students = Array(12).fill({
      name: 'Student Name',
      cohort: 'AY 2024-25',
      courses: ['CBSE 9 Science', 'CBSE 9 Math'],
      dateJoined: '17. Nov. 2024',
      lastLogin: '17. Nov. 2024 4:16 PM',
      status: 'green',
    });

    return (
      <div className="flex-1 p-4 bg-white rounded-lg shadow-lg mx-4">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <select className="bg-gray-200 border px-4 py-2 rounded">
                <option>AY 2024-25</option>
              </select>
              <select className="bg-gray-200 border px-4 py-2 rounded">
                <option>CBSE 9</option>
              </select>
            </div>
            <button className="bg-gray-300 text-black px-6 py-3 rounded text-lg" onClick={() => navigate('/add-student')}>+ Add New Student</button>
          </div>

          <table className="w-full rounded shadow">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">Student Name</th>
                <th className="p-4 text-left">Cohort</th>
                <th className="p-4 text-left">Courses</th>
                <th className="p-4 text-left">Date Joined</th>
                <th className="p-4 text-left">Last Login</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.cohort}</td>
                  <td className="p-4">
                    {student.courses.map((course, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2 text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </td>
                  <td className="p-4">{student.dateJoined}</td>
                  <td className="p-4">{student.lastLogin}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${
                        student.status === 'green' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    ></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
