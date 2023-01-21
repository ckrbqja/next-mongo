export default function handler(req, res) {
    if (req.method === 'POST') {
        const eventId = req.query.eventId;
        res.status(201).json({data: {eventId, ...req.body}})
    }

    if (req.method === 'GET') {
        res.status(200).json({data: [{title: 'title', address: 'address'}]})
    }
};