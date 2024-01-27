// run `node index.js` in the terminal
const csv = require('csvtojson');
const fs = require('fs');

csv({
  colParser: {
    
    'options': (item, head, resultRow, row, colIdx) => {
      const options = ['option1','option2','option3','option4']
      .map(option => resultRow[option])
      .filter(Boolean);

      //delete the original option columns from the resultRow
      // ['option1','option2','option3','option4'].forEach(option => {
      //   delete resultRow[option];
      // })
      return {
        id: 'id',
        question: 'question',
        options: 'options',
        answer: 'answer',
      }
      //colParser method parses the different options columns to a single array of 'options'
    },
  },
})
  .fromFile('Test1.csv')
  .then((JsonObj) => {
    const modifiedJson = JsonObj.map(obj=>{
      return{
        id:obj.id,
        question:obj.question,
        options: ['option1','option2','option3','option4']
        .map(option => obj[option])
        .filter(Boolean),
        answer:obj.answer,
      }
    })
    console.log(modifiedJson);
  });


  //random changes

 /*********************************Test Mongodb API************************************** */ 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://luhar270698:Softie@321@mock-testapi.mflhpmz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
/************************************************************************************/