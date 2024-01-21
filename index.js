// run `node index.js` in the terminal
const csv = require('csvtojson');
const fs = require('fs');

csv({
  colParser: {
    'options': (item, head, resultRow, row, colIdx) => {
      const options = ['option1','option2','option3','option4']
      .map(option => resultRow[option])
      .filter(Boolean);

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
        id: obj.id,
        question: obj.question,
        options: ['option1','option2','option3','option4']
        .map(option => obj[option])
        .filter(Boolean),
        answer:  obj.answer,
      }
    })
    console.log(modifiedJson);
    fs.writeFileSync('./Output.json', JSON.stringify(modifiedJson, null, 2));
  });
