let HTTP = new WeakMap();

class QuestionService {
    constructor($http) {
        HTTP.set(this, $http);
    }

    getAllQuestions() {
        return (HTTP.get(this))({
            method: 'GET',
            url: `\question`
        })
    }

    getQuestionType() {
        return (HTTP.get(this))({
            method: 'GET',
            url: '\question-type'
        })
    }

    postQuestion(object) {
        return (HTTP.get(this))({
            method: 'POST',
            url: '\question',
            data: object
        })
    }

    static factory($http) {
        return new QuestionService($http);
    }

}

QuestionService.$inject = ['$http'];

export default QuestionService;