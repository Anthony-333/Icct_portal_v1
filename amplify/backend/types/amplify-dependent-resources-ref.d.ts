export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "icctportal": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    },
    "storage": {
        "s3icctportalstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}