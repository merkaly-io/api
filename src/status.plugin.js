"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusPlugin = statusPlugin;
const mongoose_1 = require("mongoose");
const nestjs_cls_1 = require("nestjs-cls");
function statusPlugin(schema, options) {
    const historySchema = new mongoose_1.Schema({
        date: { default: () => Date.now(), required: true, type: Date },
        name: { default: options.default, enum: options.enum, required: true, type: String },
        user: { required: true, type: String },
    });
    schema.add({
        history: { default: [], type: [historySchema] },
        status: { default: options.default, enum: options.enum, required: true, type: String },
    });
    schema.pre('save', function (next) {
        const doc = this;
        const cls = nestjs_cls_1.ClsServiceManager.getClsService();
        const { userId } = cls.get('auth');
        if (!doc.status) {
            return next();
        }
        if (!Array.isArray(doc.history)) {
            doc.history = [];
        }
        const lastEntry = doc.history[doc.history.length - 1];
        if (!lastEntry || String(lastEntry.name) !== String(doc.status)) {
            doc.history.push({
                date: new Date(),
                name: doc.status,
                user: userId,
            });
        }
        next();
    });
    schema.pre('findOneAndUpdate', async function (next) {
        const query = this;
        const cls = nestjs_cls_1.ClsServiceManager.getClsService();
        const { userId } = cls.get('auth');
        const update = query.getUpdate();
        if (!update) {
            return next();
        }
        const nextStatus = update.status ?? update.$set?.status;
        if (!nextStatus) {
            return next();
        }
        const currentDoc = await query.model
            .findOne(query.getQuery())
            .select('status')
            .session(query.getOptions().session);
        if (!currentDoc) {
            return next();
        }
        if (String(currentDoc.status) === String(nextStatus)) {
            return next();
        }
        const history = {
            date: new Date(),
            name: nextStatus,
            user: userId,
        };
        const hasMongoOperators = Object.keys(update).some((key) => key.startsWith('$'));
        query.setUpdate(hasMongoOperators
            ? { ...update, $push: { ...(update.$push ?? {}), history } }
            : { $set: update, $push: { history } });
        return next();
    });
}
//# sourceMappingURL=status.plugin.js.map