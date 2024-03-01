"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSIWEChallengeString = exports.isICNSName = exports.isBonfidaName = exports.getCosmosHubAddress = exports.getJunoAddress = exports.isJunoAddress = exports.isCosmosHubAddress = exports.isSolanaAddress = void 0;
const bech32_1 = require("@cosmjs/encoding/build/bech32");
const hex_1 = require("@cosmjs/encoding/build/hex");
const bech32_2 = require("@keplr-wallet/cosmos/build/bech32");
const isBase58_1 = __importDefault(require("validator/lib/isBase58"));
const constants_1 = require("./constants");
const walletUtils_constants_1 = require("./walletUtils.constants");
/**
 * Checks if the given alias is a Solana address.
 * @returns True if the alias is a Solana wallet address. False otherwise.
 */
function isSolanaAddress(publicAddress) {
    // Solana addresses are at least 32 chars long.
    // We must check for the length as well as the base encoding as aliases that
    // are not wallet address such as 'test' will return isBase58 as true
    return publicAddress.length >= 32 && (0, isBase58_1.default)(publicAddress);
}
exports.isSolanaAddress = isSolanaAddress;
function isCosmosAddress(publicAddress, prefix) {
    // Cosmos addresses are bech32 encoded addresses with an HRP depending on the zone
    // https://docs.cosmos.network/master/spec/addresses/bech32.html
    try {
        bech32_2.Bech32Address.validate(publicAddress, prefix);
        return true;
    }
    catch (_e) {
        return false;
    }
}
/**
 * Checks if the given alias is a Cosmos Hub address
 * @returns True if the email address is a valid Cosmos Hub address. False otherwise.
 */
function isCosmosHubAddress(publicAddress) {
    return isCosmosAddress(publicAddress, constants_1.COSMOS_HUB_PREFIX);
}
exports.isCosmosHubAddress = isCosmosHubAddress;
/**
 * Checks if the given alias is a Juno address
 * @returns True if the email address is a valid Juno address. False otherwise.
 */
function isJunoAddress(publicAddress) {
    return isCosmosAddress(publicAddress, constants_1.JUNO_PREFIX);
}
exports.isJunoAddress = isJunoAddress;
/**
 * Converts Cosmos Hub address to Juno address
 */
function getJunoAddress(cosmosHubAddress) {
    if (!isCosmosHubAddress(cosmosHubAddress)) {
        throw new Error('Not a Cosmos Hub address');
    }
    const { data } = (0, bech32_1.fromBech32)(cosmosHubAddress);
    return (0, bech32_1.toBech32)(constants_1.JUNO_PREFIX, (0, hex_1.fromHex)((0, hex_1.toHex)(data)));
}
exports.getJunoAddress = getJunoAddress;
/**
 * Converts Juno address to CosmosHub address
 */
function getCosmosHubAddress(junoAddress) {
    if (!isJunoAddress(junoAddress)) {
        throw new Error('Not a Juno address');
    }
    const { data } = (0, bech32_1.fromBech32)(junoAddress);
    return (0, bech32_1.toBech32)(constants_1.COSMOS_HUB_PREFIX, (0, hex_1.fromHex)((0, hex_1.toHex)(data)));
}
exports.getCosmosHubAddress = getCosmosHubAddress;
function isBonfidaName(name) {
    return name.endsWith(walletUtils_constants_1.BONFIDA_SUFFIX) && name.length > walletUtils_constants_1.BONFIDA_SUFFIX.length;
}
exports.isBonfidaName = isBonfidaName;
function isICNSName(alias) {
    const canonicalAlias = alias.toLowerCase();
    return constants_1.SUPPORTED_ICNS_PREFIXES.some((prefix) => canonicalAlias.endsWith(`.${prefix}`));
}
exports.isICNSName = isICNSName;
/**
 * Get Sign In With Ethereum Challenge String that will be signed by the frontend and veried by the backend
 * For EIP reference, see https://eips.ethereum.org/EIPS/eip-4361
 * @param args.publicAddress string Ethereum address requested to verify
 * @param args.domain string Domain requested usually app.skiff.town, app.skiff.city, and app.skiff.com
 * @param args.token string Nonce which is a skiff_login_<JWT>
 * @param args.issuanceTime Date the time the challange or the JWT token was issued
 * @param args.expiryTime Date the time the challange or the JWT token will expire
 * @returns
 */
function getSIWEChallengeString(args) {
    // Nonce must be alphanumeric so we have to hack around JWTs
    // This is a hack
    const alphanumtoken = args.token
        .replaceAll('_', 'UNDERSCORE')
        .replaceAll('.', 'DOT')
        .replaceAll('-', 'DASH')
        .replaceAll('=', 'EQUALS');
    args.domain = args.domain.endsWith('localhost:1212') ? 'app.skiff.town' : args.domain;
    const protocol = 'https';
    return `${args.domain} wants you to sign in with your Ethereum account:\n${args.publicAddress}\n\nI accept the Skiff Terms of Service: https://skiff.com/terms-of-service\n\nURI: ${protocol}://${args.domain}\nVersion: 1\nChain ID: 1\nNonce: ${alphanumtoken}\nIssued At: ${args.issuanceTime.toISOString()}\nExpiration Time: ${args.expiryTime.toISOString()}`;
}
exports.getSIWEChallengeString = getSIWEChallengeString;
