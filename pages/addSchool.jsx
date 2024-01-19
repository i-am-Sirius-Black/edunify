// pages/addSchool.jsx
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddSchool() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

     for (const key in data) {
      formData.append(key, data[key]);
      }


      await axios.post('/api/addSchool', formData);

      console.log('School added successfully');
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  return (
    <div>
      <h1>Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>School Name</label>
        <input {...register('name', { required: true })} placeholder="School Name" />

        {/* Add other input fields with validation */}
        <label>Address</label>
        <input {...register('address', { required: true })} placeholder="School Address" />

        <label>City</label>
        <input {...register('city', { required: true })} placeholder="City" />

        <label>State</label>
        <input {...register('state', { required: true })} placeholder="State" />

        <label>Contact</label>
        <input {...register('contact', { required: true })} placeholder="Contact" />

        <label>Email</label>
        <input {...register('email_id', { required: true })} placeholder="Email" />

        <label>Image</label>
        <input type="file" {...register('image', { required: true })} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
