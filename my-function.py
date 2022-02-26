import json

def lambda_handler(event, context):
    # TODO implement
    msg = event["keyword"]
    result = 'Sai Prathyusha Potu says '+msg
    return {
        'statusCode': 200,
        'body': json.dumps(result)
    }
