const express = require('express')
const app = express()

app.use(express.json())

const characters = [
    { id: 1, name: 'Flash', universe: 'DC' },
    { id: 2, name: 'Superman', universe: 'DC' },
    { id: 3, name: 'Robin', universe: 'DC' },
    { id: 4, name: 'Batman', universe: 'DC' },
    { id: 5, name: 'Doctor Strange', universe: 'Marvel' },
    { id: 6, name: 'Iron Man', universe: 'Marvel' },
    { id: 7, name: 'Captain America', universe: 'Marvel' },
]

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/characters', (req, res) => {
    res.send(characters)
})

app.get('/api/characters/:id', (req, res) => {
    const character = characters.find(c => c.id === parseInt(req.params.id))
    if (!character) res.status(404).send('Character not found')
    res.send(character)
})

app.post('/api/characters', (req, res) => {
    const character = {
        id: characters.length + 1,
        name: req.body.name,
        universe: req.body.universe
    }
    characters.push(character)
    res.send(character)
})

app.delete('/api/characters/:id', (req, res) => {
    const character = characters.find(c => c.id === parseInt(req.params.id))
    if (!character) res.status(404).send('Character not found')

    const index = characters.indexOf(character)
    characters.splice(index, 1)

    res.send(character)
})

app.get('/api/characters/universe/:universe', (req, res) => {
    const character = characters.filter(c => c.universe === req.params.universe)
    if (!character) res.status(404).send('Character not found')
    res.send(character)
})

const port = process.env.port || 8080
app.listen(port, () => console.log(`Listening on port ${port}...`))