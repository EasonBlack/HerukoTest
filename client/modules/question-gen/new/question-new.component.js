import template from './question-new.template.html'
import controller from './question-new.controller'

let QeustionNewComponent = {
    template,
    controller,
    bindings:  {
        active: '=',
        onSubmit: '&'
    }
}

export default QeustionNewComponent;