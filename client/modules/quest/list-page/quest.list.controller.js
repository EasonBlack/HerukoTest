let QUESTCONST = new WeakMap();
let ANSWERSTORE = new WeakMap();

class QuestListController {
    constructor(QuestConst, AnswerStoreService) {
        QUESTCONST.set(this, QuestConst);
        ANSWERSTORE.set(this, AnswerStoreService);
        this.quests = QUESTCONST.get(this).quests;
        this.answer = ANSWERSTORE.get(this).answer;
        console.log(this.answer);
    }
}

export default QuestListController;