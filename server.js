const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// Sample dataset (You can replace this with the provided 100-student dataset)
const students = [
    {
        "student_id": "1",
        "name": "Alice Johnson",
        "marks": {
            "math": 85,
            "science": 90,
            "english": 78,
            "history": 88,
            "geography": 92
        },
        "total": 433
    },
    {
        "student_id": "2",
        "name": "Bob Smith",
        "marks": {
            "math": 80,
            "science": 85,
            "english": 75,
            "history": 80,
            "geography": 90
        },
        "total": 410
    }
];

// POST Endpoint
app.post('/students/above-threshold', (req, res) => {
    const { threshold } = req.body;

    // Validate input
    if (typeof threshold !== 'number' || threshold < 0) {
        return res.status(400).json({ error: "Invalid threshold value" });
    }

    // Filter students
    const filteredStudents = students.filter(student => student.total > threshold);

    // Prepare response
    res.json({
        count: filteredStudents.length,
        students: filteredStudents.map(student => ({
            name: student.name,
            total: student.total
        }))
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));