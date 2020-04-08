//使用Mock
import Mock from 'mockjs'

export default Mock.mock('/files/', 'post', {
    "statusCode": 200,
    "msg": "success",
    "data|1": [
        {
            "success": [
                {
                    "serviceId": 5,
                    "deploymentId": 7,
                    "fileName": "a2.war"
                }
            ],
            "fail": []
        },
        {
            "success": [],
            "fail|1": [
                [{
                    "fileName": "a1.war",
                    "errorMsg": "檔案已存在"
                }],
                [{
                    "fileName": "pom1.xml",
                    "errorMsg": "檔案類型錯誤"
                }],
                [{
                    "fileName": "fff.jar",
                    "errorMsg": "檔案不是正常的打包專案結構"
                }]
            ]
        }
    ]

})