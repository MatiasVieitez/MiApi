const express = require('express');
const app = express();

const port = 3000;

app.use(express.json())

app.listen(port, () => {

    console.log('server runing on port :', port)

})



let Personas = [

    {
        id: 1,
        Name: 'Pablo',
        Surname: 'Perez',
        Age: 21,
    },
    {
        id: 2,
        Name: 'Jonathan',
        Surname: 'Fernandez',
        Age: 53,
    },
    {
        id: 3,
        Name: 'Lucas',
        Surname: 'Gonzales',
        Age: 48,
    }
]

app.get('/', (req, res) => {
    res.send('<h1>hola mundo</h1>')
})

app.get('/Api/Personas', (req, res) => {

    res.json(Personas)

})

app.get('/Api/Personas/:id', (req, res) => {

    const id = Number(req.params.id)
    const persona = Personas.find(persona => persona.id === id)
    if (persona) {
        res.json(persona)
    } else {
        res.send('<h2>No existe una persona con esa id</h2 > ')
    }

})


app.delete('/Api/Personas/:id', (req, res) => {

    const id = Number(req.params.id)
    Personas = Personas.filter(persona => persona.id !== id)

    res.status(204).end()
})

app.post('/Api/Personas', (req, res) => {

    const persona = req.body;

    const ids = Personas.map(persona => persona.id)
    const maxId = Math.max(...ids)

    const nPersona = {

        id: maxId + 1,
        Name: persona.Name,
        Surname: persona.Surname,
        Age: persona.Age

    }

    Personas = [...Personas, nPersona] //destructuring

    res.json(nPersona)

})