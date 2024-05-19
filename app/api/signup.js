import supabase from '../../lib/supabase';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, password, role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to Supabase
    const { data, error } = await supabase
      .from('users')
      .insert([{ id, password: hashedPassword, role }]);

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json({ message: 'User created successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
