//使用Mock
import Mock from 'mockjs';

export default Mock.mock('/deployment/', 'post', {
    "statusCode": "200",
    "msg": "success",
    "data": [
        {
            "deploymentId": "3",
            "strategy": "bg",
            "instancesCount": "3",
            "port": "8533,8534,8535"
        }
    ]
})