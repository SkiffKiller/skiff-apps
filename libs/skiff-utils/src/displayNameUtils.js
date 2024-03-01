"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDisplayName = void 0;
const validateDisplayName = (displayName) => {
    if (!displayName) {
        return false;
    }
    const trimmedName = displayName.trim();
    if (trimmedName.length > 200 || !/^(?:[,.'\-_\p{L}()\d]+)(?: (?:[,.'\-_\p{L}()\d]+))*$/u.test(trimmedName)) {
        return false;
    }
    return true;
};
exports.validateDisplayName = validateDisplayName;
