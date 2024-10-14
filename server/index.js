const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const { registerUserSchema } = require('./validators/register-user-schema');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/registration', (req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, '../ui/dist', 'index.html'));
    }
});
app.use(express.static(path.join(__dirname, '../ui/dist')));

app.post('/registration', function(req, res) {
    console.log('[POST] Creating new register');
    console.log('register is: ', req.body);
    try {
        const data = registerUserSchema.validateSync(req.body, { abortEarly: false, stripUnknown: true });
    
        console.log('register saved');
        return res.json({ message: 'Sucesso', data });
      } catch (e) {
        console.log('register not valid');
        return res.status(422).json({ errors: e.errors });
      }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});