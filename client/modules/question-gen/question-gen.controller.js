let STATE = new WeakMap();
let QUESTIONSERVICE = new WeakMap();


class QuestGenController {
    constructor(QuestionService, $state) {
        QUESTIONSERVICE.set(this, QuestionService);
        STATE.set(this, $state);
        this.fetchQuestions();
    }

    showNewModal() {
        this.new_active = true;
    }

    onSubmit() {
        this.fetchQuestions();
    }

    fetchQuestions() {
        QUESTIONSERVICE.get(this).getAllQuestions().then(result => {
            this.questions = result.data.rows;
        });
    }
}


QuestGenController.$inject = ['QuestionService', '$state'];

export default QuestGenController;