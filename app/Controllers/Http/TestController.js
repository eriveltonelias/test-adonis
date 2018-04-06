'use strict'

class TestController {

    index(){
        return {
            status : 'OK',
            data: [
                {
                    id : 1,
                    name : 'Test 1',
                },
                {
                    id : 2,
                    name : 'Test 2'
                },
                {
                    id : 3,
                    name : 'Test 3'
                }
            ]
        }
    }

    getParams ( request ){
        let { params } = request

        return {
            status : 'OK',
            data : params
        }
    }
}

module.exports = TestController
