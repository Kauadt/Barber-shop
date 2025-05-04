import app from './src/app.js'

const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`This App is listening in the port ${PORT}`)
})
