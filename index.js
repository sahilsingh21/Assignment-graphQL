import express from 'express'
import resolvers from './resolver'
import schema from './schema'

import {graphqlHTTP} from 'express-graphql'


const app = express()

app.get("/", (req, res) =>{
    res.send("Hello, I'm doing graphQL")
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(5001, ()=> console.log("Running at 5001"))