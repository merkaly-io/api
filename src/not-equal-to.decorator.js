"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotEqualTo = IsNotEqualTo;
const class_validator_1 = require("class-validator");
function IsNotEqualTo(fn, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isNotEqualTo',
            target: object.constructor,
            propertyName,
            constraints: [fn],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [resolver] = args.constraints;
                    const relatedValue = resolver(args.object);
                    return !value || !relatedValue || value !== relatedValue;
                },
                defaultMessage(args) {
                    return `${args.property} must be different`;
                },
            },
        });
    };
}
//# sourceMappingURL=not-equal-to.decorator.js.map