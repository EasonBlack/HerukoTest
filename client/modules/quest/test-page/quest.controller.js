let QUESTCONST = new WeakMap();
let ANSWERSTORE = new WeakMap();
let STATE = new WeakMap();

class QuestController {
    constructor(QuestConst, AnswerStoreService, $state) {
        QUESTCONST.set(this, QuestConst)
        ANSWERSTORE.set(this, AnswerStoreService);
        STATE.set(this, $state);
        this.quests = QUESTCONST.get(this).quests;
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
        if (this.current == this.quests.length - 1) {
            return true;
        } else {
            return false;
        }
    }

    confirm() {
        let answer = this.quests.map((q)=> {
            return q.answer || q.others;
        })
        (ANSWERSTORE.get(this)).saveAnswer(answer)
            .then((res)=>{
                if(res.msg=='success') {
                    alert('Success');
                } else {
                    alert('Failed');
                }
            })
        //(STATE.get(this)).go('quest-list');
    }
}

QuestController.$inject = ['QuestConst', 'AnswerStoreService', '$state'];

export default QuestController;