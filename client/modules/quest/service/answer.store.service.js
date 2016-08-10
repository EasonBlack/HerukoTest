let HTTP = new WeakMap();

class AnswerStoreService {
    constructor($http) {
        this.answer = [];
        HTTP.set(this, $http);
    }

    saveAnswer(answer) {

        return (HTTP.get(this))({
            method: 'POST',
            url: `\answer`,
            data: {
                username: 'xxx',
                content: answer
            }
        })

    }

    static factory($http) {
        return new AnswerStoreService($http);
    }

}

AnswerStoreService.$inject = ['$http'];

export default AnswerStoreService;
