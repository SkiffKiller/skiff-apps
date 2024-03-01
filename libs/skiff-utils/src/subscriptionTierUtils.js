"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxNumberQuickAliases = exports.getMaxNumberQuickAliasSubdomains = exports.getReplyFromQuickAliasEnabled = exports.getSendFromQuickAliasEnabled = exports.getMaxNumQuickAliases = exports.getMaxInactiveQuickAliasSubdomains = exports.getEditAliasProfileEnabled = exports.getCatchallAliasEnabled = exports.getMaxInactiveAliases = exports.getMaxNumberMailFilters = exports.getUnlimitedVersionHistoryEnabled = exports.getAutoreplyEnabled = exports.getMaxUsersPerWorkspace = exports.getMaxNumLabelsOrFolders = exports.getMaxMessagesPerDay = exports.getAllowedNumberShortAliases = exports.getMaxNumberNonWalletAliases = exports.getMaxQuickAliasSubdomains = exports.getMaxCustomDomains = exports.getUploadLimitInMb = exports.getStorageLimitInMb = exports.isPaywallErrorCode = void 0;
const constants_1 = require("./constants");
// this record should not be accessed directly; rather,
// the getter util functions in this file should be used
const LIMITS_BY_TIER = {
    [constants_1.TierName.Free]: {
        maxStorageInMb: 10000,
        maxUploadLimitInMb: 5000,
        maxNumNonWalletAliases: 4,
        maxCustomDomains: {
            defaultLimit: 0,
            flagLimit: 1
        },
        allowedNumShortAliases: 0,
        messagesPerDay: 200,
        maxNumLabelsOrFolders: 5,
        maxUsersPerWorkspace: 4,
        autoReplyEnabled: false,
        unlimitedVersionHistory: false,
        maxNumMailFilters: 2,
        maxAliasesInactive: 2,
        catchallAliasEnabled: false,
        editAliasProfileEnabled: true,
        maxQuickAliasSubdomains: 1,
        maxInactiveQuickAliasSubdomains: 3,
        maxNumQuickAliases: 10,
        sendFromQuickAliasEnabled: false,
        replyFromQuickAliasEnabled: true
    },
    [constants_1.TierName.Essential]: {
        maxStorageInMb: 15000,
        maxUploadLimitInMb: 5000,
        maxNumNonWalletAliases: 10,
        maxCustomDomains: { defaultLimit: 1 },
        allowedNumShortAliases: 0,
        messagesPerDay: 200,
        maxNumLabelsOrFolders: Infinity,
        maxUsersPerWorkspace: 6,
        autoReplyEnabled: true,
        unlimitedVersionHistory: false,
        maxNumMailFilters: Infinity,
        maxAliasesInactive: 6,
        catchallAliasEnabled: true,
        editAliasProfileEnabled: true,
        maxQuickAliasSubdomains: 1,
        maxInactiveQuickAliasSubdomains: 3,
        maxNumQuickAliases: constants_1.GLOBAL_MAX_NUM_QUICK_ALIASES,
        sendFromQuickAliasEnabled: true,
        replyFromQuickAliasEnabled: true
    },
    [constants_1.TierName.Pro]: {
        maxStorageInMb: 200000,
        maxUploadLimitInMb: 50000,
        maxNumNonWalletAliases: 15,
        maxCustomDomains: { defaultLimit: 3 },
        allowedNumShortAliases: 1,
        messagesPerDay: Infinity,
        maxNumLabelsOrFolders: Infinity,
        maxUsersPerWorkspace: 6,
        autoReplyEnabled: true,
        unlimitedVersionHistory: true,
        maxNumMailFilters: Infinity,
        maxAliasesInactive: 10,
        catchallAliasEnabled: true,
        editAliasProfileEnabled: true,
        maxQuickAliasSubdomains: 2,
        maxInactiveQuickAliasSubdomains: 3,
        maxNumQuickAliases: constants_1.GLOBAL_MAX_NUM_QUICK_ALIASES,
        sendFromQuickAliasEnabled: true,
        replyFromQuickAliasEnabled: true
    },
    [constants_1.TierName.Business]: {
        maxStorageInMb: 1000000,
        maxUploadLimitInMb: 150000,
        maxNumNonWalletAliases: 15,
        maxCustomDomains: { defaultLimit: 15 },
        allowedNumShortAliases: 2,
        messagesPerDay: Infinity,
        maxNumLabelsOrFolders: Infinity,
        maxUsersPerWorkspace: constants_1.MAXIMUM_STRIPE_PURCHASE_QUANTITY,
        autoReplyEnabled: true,
        unlimitedVersionHistory: true,
        maxNumMailFilters: Infinity,
        maxAliasesInactive: 20,
        catchallAliasEnabled: true,
        editAliasProfileEnabled: true,
        maxQuickAliasSubdomains: 5,
        maxInactiveQuickAliasSubdomains: 3,
        maxNumQuickAliases: constants_1.GLOBAL_MAX_NUM_QUICK_ALIASES,
        sendFromQuickAliasEnabled: true,
        replyFromQuickAliasEnabled: true
    }
};
const getFlagConditionedLimit = (flagConditionedLimit, flag) => {
    const defaultLimit = flagConditionedLimit.defaultLimit;
    const flagLimit = flagConditionedLimit.flagLimit ?? defaultLimit;
    return flag ? flagLimit : defaultLimit;
};
// Checks if a given ApolloError's code is a PaywallErrorCode
function isPaywallErrorCode(errorCode) {
    return Object.values(constants_1.PaywallErrorCode).includes(errorCode);
}
exports.isPaywallErrorCode = isPaywallErrorCode;
function getStorageLimitInMb(tierName) {
    return LIMITS_BY_TIER[tierName].maxStorageInMb;
}
exports.getStorageLimitInMb = getStorageLimitInMb;
function getUploadLimitInMb(tierName) {
    return LIMITS_BY_TIER[tierName].maxUploadLimitInMb;
}
exports.getUploadLimitInMb = getUploadLimitInMb;
function getMaxCustomDomains(tierName, freeCustomDomainFlag) {
    return getFlagConditionedLimit(LIMITS_BY_TIER[tierName].maxCustomDomains, freeCustomDomainFlag);
}
exports.getMaxCustomDomains = getMaxCustomDomains;
function getMaxQuickAliasSubdomains(tierName) {
    return LIMITS_BY_TIER[tierName].maxQuickAliasSubdomains;
}
exports.getMaxQuickAliasSubdomains = getMaxQuickAliasSubdomains;
function getMaxNumberNonWalletAliases(tierName) {
    return LIMITS_BY_TIER[tierName].maxNumNonWalletAliases;
}
exports.getMaxNumberNonWalletAliases = getMaxNumberNonWalletAliases;
function getAllowedNumberShortAliases(tierName) {
    return LIMITS_BY_TIER[tierName].allowedNumShortAliases;
}
exports.getAllowedNumberShortAliases = getAllowedNumberShortAliases;
function getMaxMessagesPerDay(tierName) {
    return LIMITS_BY_TIER[tierName].messagesPerDay;
}
exports.getMaxMessagesPerDay = getMaxMessagesPerDay;
function getMaxNumLabelsOrFolders(tierName) {
    return LIMITS_BY_TIER[tierName].maxNumLabelsOrFolders;
}
exports.getMaxNumLabelsOrFolders = getMaxNumLabelsOrFolders;
function getMaxUsersPerWorkspace(tierName) {
    return LIMITS_BY_TIER[tierName].maxUsersPerWorkspace;
}
exports.getMaxUsersPerWorkspace = getMaxUsersPerWorkspace;
function getAutoreplyEnabled(tierName) {
    return LIMITS_BY_TIER[tierName].autoReplyEnabled;
}
exports.getAutoreplyEnabled = getAutoreplyEnabled;
function getUnlimitedVersionHistoryEnabled(tierName) {
    return LIMITS_BY_TIER[tierName].unlimitedVersionHistory;
}
exports.getUnlimitedVersionHistoryEnabled = getUnlimitedVersionHistoryEnabled;
function getMaxNumberMailFilters(tierName) {
    return LIMITS_BY_TIER[tierName].maxNumMailFilters;
}
exports.getMaxNumberMailFilters = getMaxNumberMailFilters;
function getMaxInactiveAliases(tierName) {
    return LIMITS_BY_TIER[tierName].maxAliasesInactive;
}
exports.getMaxInactiveAliases = getMaxInactiveAliases;
function getCatchallAliasEnabled(tierName) {
    return LIMITS_BY_TIER[tierName].catchallAliasEnabled;
}
exports.getCatchallAliasEnabled = getCatchallAliasEnabled;
function getEditAliasProfileEnabled(tierName) {
    return LIMITS_BY_TIER[tierName].editAliasProfileEnabled;
}
exports.getEditAliasProfileEnabled = getEditAliasProfileEnabled;
function getMaxInactiveQuickAliasSubdomains(tierName) {
    return LIMITS_BY_TIER[tierName].maxInactiveQuickAliasSubdomains;
}
exports.getMaxInactiveQuickAliasSubdomains = getMaxInactiveQuickAliasSubdomains;
function getMaxNumQuickAliases(tierName) {
    return LIMITS_BY_TIER[tierName].maxNumQuickAliases;
}
exports.getMaxNumQuickAliases = getMaxNumQuickAliases;
function getSendFromQuickAliasEnabled(tierName) {
    return LIMITS_BY_TIER[tierName].sendFromQuickAliasEnabled;
}
exports.getSendFromQuickAliasEnabled = getSendFromQuickAliasEnabled;
function getReplyFromQuickAliasEnabled(tierName) {
    return LIMITS_BY_TIER[tierName].replyFromQuickAliasEnabled;
}
exports.getReplyFromQuickAliasEnabled = getReplyFromQuickAliasEnabled;
function getMaxNumberQuickAliasSubdomains(tierName) {
    return LIMITS_BY_TIER[tierName].maxQuickAliasSubdomains;
}
exports.getMaxNumberQuickAliasSubdomains = getMaxNumberQuickAliasSubdomains;
function getMaxNumberQuickAliases(tierName) {
    return LIMITS_BY_TIER[tierName].maxNumQuickAliases;
}
exports.getMaxNumberQuickAliases = getMaxNumberQuickAliases;
