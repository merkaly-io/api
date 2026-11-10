"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upper = exports.digits = exports.trim = void 0;
const trim = ({ value }) => typeof value === 'string' ? value.trim() : value;
exports.trim = trim;
const digits = ({ value }) => typeof value === 'string' ? value.replace(/\D/g, '') : value;
exports.digits = digits;
const upper = ({ value }) => typeof value === 'string' ? value.trim().toUpperCase() : value;
exports.upper = upper;
//# sourceMappingURL=transform.validator.js.map