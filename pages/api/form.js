import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = await clientPromise;
    const db = client.db('tuition_form');

    const { formData } = req.body;

    const result = await db.collection('tuition_form').insertOne(formData);

    res.status(200).json({ success: true, result });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
