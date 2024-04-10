import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//database
import sampleData from './db.js'

//types
import { typeDefs } from './schema.js';

//resolvers
const resolvers = {
    Query: {
      games: () => sampleData.games,
      game: (_, args) => sampleData.games.find((game)=> game.id === args.id ),
      reviews: () => sampleData.reviews,
      review: (_, args) => sampleData.reviews.find((review)=> review.id === args.id ),
      authors: () => sampleData.authors,
      author: (_, args) => sampleData.authors.find((author)=> author.id === args.id ),

    },
    Game:{
      reviews: (parent)=> sampleData.reviews.filter(review=>review.gameId === parent.id)
    },
    Review:{
      author: (parent)=> sampleData.authors.find(author=>author.id === parent.authorId)
    },
    Author:{
      reviews:(parent)=>sampleData.reviews.filter(review=>review.authorId === parent.id)
    },
    Mutation:{
      addGame:(_, args)=>{
        sampleData.games.push({...args.game, id:Math.floor(Math.random()*10000).toString()})
        return {...args.game, id:Math.floor(Math.random()*10000).toString()}
      },
      deleteGame:(_, args)=>sampleData.games.filter(game=>game.id !== args.id) 
    }
  };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests 
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);