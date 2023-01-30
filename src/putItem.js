const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.TableName;

// UUID package

exports.handler = async (event) => {
    const { id, name, message } = event;

    const params = {
        TableName : tableName,
        Item: { 
            id : id,
            name: name,
            message: message
        }
    };

    const result = await docClient.put(params).promise();

    return result
};
