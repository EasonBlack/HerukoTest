let QUESTCONST = new WeakMap();
let ANSWERSTORE = new WeakMap();
let QUESTIONSERVICE = new WeakMap();
let STATE = new WeakMap();

class QuestController {
    constructor(QuestConst, AnswerStoreService,QuestionService, $state) {
        QUESTCONST.set(this, QuestConst)
        ANSWERSTORE.set(this, AnswerStoreService);
        QUESTIONSERVICE.set(this, QuestionService);
        STATE.set(this, $state);
        QUESTIONSERVICE.get(this).getAllQuestions().then(result=>{
            this.quests = result.data.rows;
        })
        this.current = 0;
    }

    prev() {
        this.current = this.current - 1;
        this.position = this.current * 100;
    }

    next() {
        this.current = this.current + 1;
        this.position = this.current * 100;
    }

    isFirst() {
        if (this.current == 0) {
            return true;
        } else {
            return false;
        }
    }

    isLast() {
        if(!this.quests) return ;

        if (this.current == this.quests.length - 1) {
            return true;
        } else {
            return false;
        }
    }

    confirm() {
        let answer = this.quests.map((q)=> {
            return q.answer || q.others;
        });
        (ANSWERSTORE.get(this)).saveAnswer(answer)
            .then((res)=>{
                if(res|| res.data.msg=='success') {
                    alert('Success');
                } else {
                    alert('Failed');
                }
            })
        //(STATE.get(this)).go('quest-list');
    }
}

QuestController.$inject = ['QuestConst', 'AnswerStoreService', 'QuestionService', '$state'];

export default QuestController;