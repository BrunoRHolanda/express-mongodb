import Bill from '../schemas/bill.schema.js';

export default async (req, res) => {
    try {
        const bill = await Bill.create(req.body);

        res.status(201);
        res.json({
            status: false,
            data: bill
        });
    } catch (err) {
        console.log(err);
        
        res.status(500);
        res.json({
            status: false,
            data: null
        });
    }
}
