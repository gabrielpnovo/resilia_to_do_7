import app from './src/app.js'

const port = process.env.PORT || 3300

app.listen(port, () => {
    console.log(`Estou escutando em http://localhost:${port}`)
})