let STATE = new WeakMap();
let QUESTIONSERVICE = new WeakMap();

class QuestNewController {
    constructor(QuestionService, $state) {
        QUESTIONSERVICE.set(this, QuestionService);
        STATE.set(this, $state);
        QUESTIONSERVICE.get(this).getQuestionType().then(result => {
            this.question_type = result.data;
        });
        this.question_options = [];
    }

    add_options() {
        this.question_options.push(this.current_option);
        this.current_option = '';
    }

    remove_options(index) {
        this.question_options.splice(index, 1);
    }

    post_question() {
        let question = {
            type: this.selected_type,
            content: this.question_content,
            options: this.question_options.join(','),
            extra: false,
            show: true
        }
        QUESTIONSERVICE.get(this).postQuestion(question).then(result=> {
            if (result.data == 'success') {
                this.new_cancel();
                this.onSubmit({
                    event: {}
                })
            }
        })
    }

    new_cancel() {
        this.question_options = [];
        this.selected_type = null;
        this.current_option = '';
        this.question_content = '';
        this.active = false;
    }

}

QuestNewController.$inject = ['QuestionService', '$state'];

export default QuestNewController;