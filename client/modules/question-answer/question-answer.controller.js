
let QUESTIONSERVICE = new WeakMap();

class QuestAnswerController {
    constructor(QuestionService) {
        QUESTIONSERVICE.set(this, QuestionService);
        this.fetchAnswers();
    }

    fetchAnswers() {
        QUESTIONSERVICE.get(this).getAllAnswer().then(result => {
            this.answers = result.data;
        });
    }
}

QuestAnswerController.$inject = ['QuestionService'];

export default QuestAnswerController;