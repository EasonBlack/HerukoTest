let STATE = new WeakMap();
let QUESTIONSERVICE = new WeakMap();


class QuestNewController {
    constructor(QuestionService, $state) {
        QUESTIONSERVICE.set(this, QuestionService);
        STATE.set(this, $state);
        QUESTIONSERVICE.get(this).getQuestionType().then(result => {
            this.question_type = result.data;
        })
    }

    add_options() {
        this.current.options.push(this.current_option);
        this.current_option = '';
    }

    remove_options(index) {
        this.question_options.splice(index, 1);
    }

    post_question() {
        let question = {
            type: this.current.type,
            content: this.current.content,
            options: this.current.options ? this.current.options.join(',') : '',
            extra: this.current.extra,
            show: this.current.show,
            order_num: 1 * this.current.order_num
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
        this.current_option = '';
        this.onCancel({
            event: {}
        })
    }

}

QuestNewController.$inject = ['QuestionService', '$state'];

export default QuestNewController;