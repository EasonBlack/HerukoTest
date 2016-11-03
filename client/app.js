
//module
import "./modules/quest/quest.module.js"
import "./modules/question-gen/question-gen.module.js"
import "./modules/question-answer/question-answer.module.js"

angular.module('app', [
    'ui.router',
    'quest.module',
    'question-gen.module',
    'question-answer.module'
])
