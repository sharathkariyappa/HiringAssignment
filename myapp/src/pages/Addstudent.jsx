import { useState } from 'react';
import { supabase } from '../components/Supabaseclient';

export default function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    cohort: '',
    courses: '',
    dateJoined: '',
    lastLogin: '',
    status: 'green',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('students').insert([formData]);
      if (error) throw error;
      alert('Student added successfully!');
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Error adding student');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow mx-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="cohort"
          placeholder="Cohort"
          value={formData.cohort}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="courses"
          placeholder="Courses (comma separated)"
          value={formData.courses}
          onChange={(e) => setFormData({ ...formData, courses: e.target.value.split(',') })}
          className="w-full p-2 border rounded"
        />
        <input
          name="dateJoined"
          placeholder="Date Joined"
          value={formData.dateJoined}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="lastLogin"
          placeholder="Last Login"
          value={formData.lastLogin}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Student</button>
      </form>
    </div>
  );
}
