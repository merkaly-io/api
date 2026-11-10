"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BIRTHDAY_MAX_AGE = exports.BIRTHDAY_MIN_AGE = void 0;
exports.isCpf = isCpf;
exports.IsCpf = IsCpf;
exports.isBirthday = isBirthday;
exports.IsBirthday = IsBirthday;
exports.isFullName = isFullName;
const brazilian_utils_1 = require("@brazilian-utils/brazilian-utils");
const class_validator_1 = require("class-validator");
function isCpf(value) {
    return typeof value === 'string' && /^\d{11}$/.test(value) && (0, brazilian_utils_1.isValidCpf)(value);
}
function IsCpf() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isCpf',
        validator: {
            defaultMessage: () => '$property must be a valid CPF',
            validate: isCpf,
        },
    });
}
exports.BIRTHDAY_MIN_AGE = 16;
exports.BIRTHDAY_MAX_AGE = 120;
function isBirthday(value, today = new Date()) {
    const [, y, m, d] = (typeof value === 'string' && value.match(/^(\d{4})-(\d{2})-(\d{2})$/)) || [];
    if (!y)
        return false;
    const [year, month, day] = [Number(y), Number(m), Number(d)];
    const date = new Date(Date.UTC(year, month - 1, day));
    if (date.getUTCFullYear() !== year ||
        date.getUTCMonth() !== month - 1 ||
        date.getUTCDate() !== day) {
        return false;
    }
    const birthdayPassed = today.getUTCMonth() > month - 1 ||
        (today.getUTCMonth() === month - 1 && today.getUTCDate() >= day);
    const age = today.getUTCFullYear() - year - (birthdayPassed ? 0 : 1);
    return age >= exports.BIRTHDAY_MIN_AGE && age <= exports.BIRTHDAY_MAX_AGE;
}
function IsBirthday() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isBirthday',
        validator: {
            defaultMessage: () => `$property must be a real date (YYYY-MM-DD) of someone aged ${exports.BIRTHDAY_MIN_AGE} to ${exports.BIRTHDAY_MAX_AGE}`,
            validate: (value) => isBirthday(value),
        },
    });
}
function isFullName(value) {
    return typeof value === 'string' && value.trim().split(/\s+/).filter(Boolean).length >= 2;
}
//# sourceMappingURL=person.validator.js.map