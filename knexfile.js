
module.exports = {
    development: {
      
      client: 'sqlite3',
      connection: {
      
        filename: './dev.sqlite3'
      
      
      },
      migration: {
      
      
        directory: '/data/migrations'
      
      },
      
      seeds: {
        directory: '/data/migrations'
    




      },
      
      useNullAsDefault:true,
    },






  
    staging: {