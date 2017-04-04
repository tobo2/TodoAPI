//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Get a new car'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Mike'}).then((result) => {
        console.log(result);
    });


    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Get a new car'}).then((result) => {
    //     console.log(result);
    // });


    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('58e1b3833471bd1e85d7030d')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});