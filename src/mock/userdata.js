import Mock from 'mockjs'

const userdata = Mock.mock('/api/userdata',{
    "users|50": [{
        "key|+1":0,
        "account|+1":10000,
        "name":'@cname',
        "status|1":[
            "启用",
            "禁用",
        ],
        "createdate":"@datetime()",
        }
    ]
})



export default userdata;