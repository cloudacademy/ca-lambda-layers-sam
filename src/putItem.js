const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.TableName;

// UUID package
// const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    const { id, name, message } = JSON.parse(event);

    const params = {
        TableName : tableName,
        Item: { 
            id : id, //uuidv4()
            name: name,
            message: message
        }
    };

    const result = await docClient.put(params).promise();

    return result
};
