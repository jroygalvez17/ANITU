const express = require('express');
const app = express();
const sound = require('./routes/api/sound')

const cors = require('cors')

app.use(cors({
    origin: 'http://192.168.100.43:5000',
    credentials: true
}));

app.use(express.json({ extended: false }));
// app.get('/', (req, res) => res.send('API Running'));
app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('API Running: Final Exam');
})

const PORT = process.env.PORT || 5000;

app.use('/api/sound',sound)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));











