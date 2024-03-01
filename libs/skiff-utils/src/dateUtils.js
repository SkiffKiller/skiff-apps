"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysToMilliseconds = exports.getFutureDate = exports.dateToString = exports.dateToMonthAndOrdinalDay = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const advancedFormat_1 = __importDefault(require("dayjs/plugin/advancedFormat"));
dayjs_1.default.extend(advancedFormat_1.default);
/*
 * Returns date in format like 'April 1st'
 */
const dateToMonthAndOrdinalDay = (date) => {
    return (0, dayjs_1.default)(date).format('MMMM Do');
};
exports.dateToMonthAndOrdinalDay = dateToMonthAndOrdinalDay;
/*
 * Convert date object to an ISO format string (UTC)
 */
const dateToString = (date) => date.toISOString();
exports.dateToString = dateToString;
/*
 * Returns date in future by numDays. Date object incorporates daylight savings time.
 */
const getFutureDate = (numDays) => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + numDays);
    return futureDate;
};
exports.getFutureDate = getFutureDate;
const daysToMilliseconds = (numDays) => {
    return numDays * 24 * 60 * 60 * 1000;
};
exports.daysToMilliseconds = daysToMilliseconds;
