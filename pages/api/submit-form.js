import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = await clientPromise;
    const db = client.db('form');

    const { formData } = req.body;

    const result = await db.collection('formSubmissions').insertOne(formData);

    res.status(200).json({ success: true, result });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
