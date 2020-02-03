import { success } from "../../libs/response-lib";
import { a } from "../../commons/index"

export async function main(event, context) {
  return success({
    hello: a
  })
  // const params = {
  //   TableName: "ext-notes",
  //   // 'KeyConditionExpression' defines the condition for the query
  //   // - 'userId = :userId': only return items with matching 'userId'
  //   //   partition key
  //   // 'ExpressionAttributeValues' defines the value in the condition
  //   // - ':userId': defines 'userId' to be Identity Pool identity id
  //   //   of the authenticated user
  //   KeyConditionExpression: "userId = :userId",
  //   ExpressionAttributeValues: {
  //     ":userId": event.requestContext.identity.cognitoIdentityId
  //   }
  // };

  // try {
  //   const result = await dynamoDbLib.call("query", params);
  //   // Return the matching list of items in response body
  //   return success(result.Items);
  // } catch (e) {
  //   return failure({ status: false });
  // }
}
