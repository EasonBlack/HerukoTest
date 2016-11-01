import tpl from './quest.input.template.html'

class appQuestInputController {
    constructor() {
    }
}

let appQuestInput = {
    template: tpl,
    bindings: {
        type: '<',
        quest: '<',
        index: '@'
    }
    //controller: appQuestInputController
}


export default appQuestInput;