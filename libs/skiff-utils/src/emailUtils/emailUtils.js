"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPremiumUsernamePrice = exports.getPremiumUsernameSuggestions = exports.isPremiumUsername = exports.isFamiliarName = exports.getCategorizedAliases = exports.isGenericSkiffAddress = exports.isQuickAlias = exports.isCryptoAddress = exports.isWalletOrNameServiceAddress = exports.isWalletAddress = exports.isNameServiceAddress = exports.MAX_SIGNATURE_SIZE_KB = exports.isShortAlias = exports.removeDots = void 0;
const partition_1 = __importDefault(require("lodash/partition"));
const isBtcAddress_1 = __importDefault(require("validator/lib/isBtcAddress"));
const isEthereumAddress_1 = __importDefault(require("validator/lib/isEthereumAddress"));
const constants_1 = require("../constants");
const customDomainUtils_1 = require("../customDomainUtils");
const isENSName_1 = require("../wallet/isENSName");
const walletUtils_1 = require("../walletUtils");
const familiarNames_json_1 = __importDefault(require("./familiarNames.json"));
const FAMILIAR_NAMES_LOWERCASE = familiarNames_json_1.default.names.map((name) => name.toLowerCase());
const FAMILIAR_USERNAMES_SET = new Set(FAMILIAR_NAMES_LOWERCASE);
function removeDots(emailAlias) {
    return emailAlias.replaceAll('.', '');
}
exports.removeDots = removeDots;
/** An alias is considered "short" if it is either 4 or 5 characters and is NOT a premium username. */
function isShortAlias(address) {
    const [alias] = address.split('@');
    const aliasWithoutDots = removeDots(alias);
    return (aliasWithoutDots.length < constants_1.SKIFF_ALIAS_MIN_LENGTH &&
        aliasWithoutDots.length >= constants_1.SHORT_ALIAS_MIN_LENGTH &&
        !isPremiumUsername(alias));
}
exports.isShortAlias = isShortAlias;
exports.MAX_SIGNATURE_SIZE_KB = 5000;
/**
 * Checks if the given alias is a wallet name service alias (e.g. ENS, ICNS)
 */
function isNameServiceAddress(emailAlias) {
    return (0, isENSName_1.isENSName)(emailAlias) || (0, walletUtils_1.isBonfidaName)(emailAlias) || (0, walletUtils_1.isICNSName)(emailAlias);
}
exports.isNameServiceAddress = isNameServiceAddress;
/**
 * Checks if the given alias is a wallet address.
 * @returns True if the alias is a wallet address. False otherwise.
 */
function isWalletAddress(emailAlias) {
    return ((0, isEthereumAddress_1.default)(emailAlias) ||
        (0, isBtcAddress_1.default)(emailAlias) ||
        (0, walletUtils_1.isSolanaAddress)(emailAlias) ||
        (0, walletUtils_1.isCosmosHubAddress)(emailAlias) ||
        (0, walletUtils_1.isJunoAddress)(emailAlias));
}
exports.isWalletAddress = isWalletAddress;
/**
 * Checks if the given alias is a wallet address.
 * @returns True if alias is a wallet address. False otherwise.
 */
function isWalletOrNameServiceAddress(emailAlias) {
    return isWalletAddress(emailAlias) || isNameServiceAddress(emailAlias);
}
exports.isWalletOrNameServiceAddress = isWalletOrNameServiceAddress;
/**
 * Checks if the given address is any crypto-associated address, including wallets, naming services, and e.g. UnstoppableDomains.
 * @returns True if address is a crypto address. False otherwise.
 */
function isCryptoAddress(emailAddress) {
    const [alias] = emailAddress.split('@');
    return isWalletOrNameServiceAddress(alias);
}
exports.isCryptoAddress = isCryptoAddress;
const rootQuickAliasSubdomains = ['skiff.house', 'skiff.club', 'maskmy.id', 'mailbox.zip'];
function isQuickAlias(emailAddress) {
    const [, domain] = emailAddress.split('@');
    return rootQuickAliasSubdomains.some((subdomain) => domain.includes(subdomain));
}
exports.isQuickAlias = isQuickAlias;
// only generic skiff addresses (i.e. ending in skiff.com, not in keplr.xyz) count against a user's alias budget
const isGenericSkiffAddress = (address) => {
    const domain = address.slice(address.lastIndexOf('@') + 1);
    return domain === (0, customDomainUtils_1.getMailDomain)();
};
exports.isGenericSkiffAddress = isGenericSkiffAddress;
/**
 * Sorts a user's aliases into relevant categories, particularly with respect to paid-tier limits.
 * @returns four categorized arrays. cryptoAliases and nonCryptoAliases have no overlap. genericSkiffAliases
 * are a subset of nonCryptoAliases, while shortSkiffAliases are a subset of genericSkiffAliases.
 */
function getCategorizedAliases(userEmailAliases) {
    const [cryptoAliases, nonCryptoAliases] = (0, partition_1.default)(userEmailAliases, isCryptoAddress);
    // sort non-crypto aliases alphabetically by custom domain, then by alias
    nonCryptoAliases.sort((a, b) => {
        const [aliasA, domainA] = a.split('@');
        const [aliasB, domainB] = b.split('@');
        if (domainA !== domainB) {
            return domainA.localeCompare(domainB);
        }
        return aliasA.localeCompare(aliasB);
    });
    const nonCryptoOrQuickAliases = nonCryptoAliases.filter((alias) => !isQuickAlias(alias));
    const genericSkiffAliases = nonCryptoAliases.filter(exports.isGenericSkiffAddress);
    const shortGenericSkiffAliases = genericSkiffAliases.filter(isShortAlias);
    return { cryptoAliases, nonCryptoAliases, genericSkiffAliases, shortGenericSkiffAliases, nonCryptoOrQuickAliases };
}
exports.getCategorizedAliases = getCategorizedAliases;
function isFamiliarName(alias) {
    return FAMILIAR_USERNAMES_SET.has(removeDots(alias).toLowerCase());
}
exports.isFamiliarName = isFamiliarName;
/**
 * Checks whether an alias is considered "premium", which is true
 * if it is a familiar name OR less than 4 characters.
 */
function isPremiumUsername(alias) {
    alias = removeDots(alias);
    return isFamiliarName(alias) || alias.length < constants_1.SHORT_ALIAS_MIN_LENGTH;
}
exports.isPremiumUsername = isPremiumUsername;
/**
 * Returns up to `limit` suggestions for a given premium username
 */
function getPremiumUsernameSuggestions(alias, limit) {
    // TODO: Update logic to use string Levenshtein or similar, rather than just prefix
    if (!alias) {
        return [];
    }
    // Get shortest, most expensive names
    return FAMILIAR_NAMES_LOWERCASE.filter((p) => p[0] === alias.toLowerCase()[0] && p !== alias.toLowerCase())
        .sort((a, b) => a.length - b.length)
        .slice(0, limit);
}
exports.getPremiumUsernameSuggestions = getPremiumUsernameSuggestions;
/**
 * Returns the price of a premium username, or `null` if it's not a premium username.
 */
function getPremiumUsernamePrice(alias) {
    const aliasWithoutDots = removeDots(alias);
    if (!isPremiumUsername(aliasWithoutDots)) {
        return null;
    }
    switch (aliasWithoutDots.length) {
        case 1:
            return 300;
        case 2:
            return 120;
        case 3:
        case 4:
        case 5:
        default:
            return 80;
    }
}
exports.getPremiumUsernamePrice = getPremiumUsernamePrice;
