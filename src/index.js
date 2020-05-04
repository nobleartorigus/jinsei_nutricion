require('dotenv').config()

const app = require('./server')

console.log(process.env.TESTING)

require('./db')

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})