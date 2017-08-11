"use strict";
class DialogService {
    confirm(message) {
        return new Promise(resolve => {
            return resolve(window.confirm(message || 'Confirmar?'));
        });
    }
}
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map