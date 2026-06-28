"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeItemAvailability = computeItemAvailability;
function computeItemAvailability({ mode, quantity, remaining, reserved, }) {
    if (reserved === null) {
        return {
            allocatable: null,
            mode,
            processable: true,
            remaining,
            reserved: null,
            unreserved: null,
        };
    }
    const secured = Math.min(Math.max(reserved, 0), quantity);
    const unreserved = Math.max(quantity - secured, 0);
    return {
        allocatable: mode === 'incoming' ? null : remaining + secured,
        mode,
        processable: mode === 'incoming' ? true : unreserved === 0,
        remaining,
        reserved: secured,
        unreserved,
    };
}
//# sourceMappingURL=item.availability.js.map