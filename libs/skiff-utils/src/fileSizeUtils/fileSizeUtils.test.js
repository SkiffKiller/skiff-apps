"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileSizeUtils_1 = require("./fileSizeUtils");
describe('File size Utils', () => {
    // Upward conversion functions from bytes
    test('bytesToKb', () => {
        expect((0, fileSizeUtils_1.bytesToKb)(1000)).toBe(1);
    });
    test('bytesToMb', () => {
        expect((0, fileSizeUtils_1.bytesToMb)(1000000)).toBe(1);
    });
    test('bytesToGb', () => {
        expect((0, fileSizeUtils_1.bytesToGb)(1000000000)).toBe(1);
    });
    test('bytesToTb', () => {
        expect((0, fileSizeUtils_1.bytesToTb)(1000000000000)).toBe(1);
    });
    // Downward conversion functions to bytes
    test('kbToBytes', () => {
        expect((0, fileSizeUtils_1.kbToBytes)(1)).toBe(1000);
    });
    test('mbToBytes', () => {
        expect((0, fileSizeUtils_1.mbToBytes)(1)).toBe(1000000);
    });
    test('gbToBytes', () => {
        expect((0, fileSizeUtils_1.gbToBytes)(1)).toBe(1000000000);
    });
    test('tbToBytes', () => {
        expect((0, fileSizeUtils_1.tbToBytes)(1)).toBe(1000000000000);
    });
    // Upward conversion functions between units
    test('kbToMb', () => {
        expect((0, fileSizeUtils_1.kbToMb)(1000)).toBe(1);
    });
    test('mbToGb', () => {
        expect((0, fileSizeUtils_1.mbToGb)(1000)).toBe(1);
    });
    test('gbToTb', () => {
        expect((0, fileSizeUtils_1.gbToTb)(1000)).toBe(1);
    });
    // Downward conversion functions between units
    test('mbToKb', () => {
        expect((0, fileSizeUtils_1.mbToKb)(1)).toBe(1000);
    });
    test('gbToMb', () => {
        expect((0, fileSizeUtils_1.gbToMb)(1)).toBe(1000);
    });
    test('tbToGb', () => {
        expect((0, fileSizeUtils_1.tbToGb)(1)).toBe(1000);
    });
    // Convert bytes to a human-readable string
    test('bytesToHumanReadable with default decimalPlaces', () => {
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(0)).toBe('0 KB');
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(500)).toBe('1 KB');
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1500)).toBe('2 KB');
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1500000)).toBe('1.5 MB');
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1500000000)).toBe('1.5 GB');
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1500000000000)).toBe('1.5 TB');
        // Verified that a value exactly on the line is handled correctly
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1000000000000, 0)).toBe('1 TB');
    });
    test('bytesToHumanReadable with custom decimalPlaces', () => {
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1500, 2)).toBe('1.50 KB');
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1500000, 3)).toBe('1.500 MB');
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1500000000, 0)).toBe('2 GB');
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1500000000000, 2)).toBe('1.50 TB');
        // Verified that a value exactly on the line is handled correctly
        expect((0, fileSizeUtils_1.bytesToHumanReadable)(1000000000000, 0)).toBe('1 TB');
    });
    test('should convert bigint bytes to megabytes correctly', () => {
        expect((0, fileSizeUtils_1.bigIntBytesToMb)(BigInt(1000 * fileSizeUtils_1.BYTE_SCALE_FACTOR ** 2))).toBe(1000);
        expect((0, fileSizeUtils_1.bigIntBytesToMb)(BigInt(500 * fileSizeUtils_1.BYTE_SCALE_FACTOR ** 2))).toBe(500);
    });
    test('should handle values that exceed MAX_SAFE_INTEGER by returning MAX_SAFE_INTEGER', () => {
        const bigIntMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
        const bytesMoreThanMaxSafe = (bigIntMaxSafe + BigInt(1)) * BigInt(fileSizeUtils_1.BYTE_SCALE_FACTOR ** 2);
        expect((0, fileSizeUtils_1.bigIntBytesToMb)(bytesMoreThanMaxSafe)).toBe(Number.MAX_SAFE_INTEGER);
    });
    test('should return MAX_SAFE_INTEGER for extremely large byte values', () => {
        const largeBytesValue = BigInt('9007199254740992') * BigInt(fileSizeUtils_1.BYTE_SCALE_FACTOR ** 2); // one more than max
        expect((0, fileSizeUtils_1.bigIntBytesToMb)(largeBytesValue)).toBe(Number.MAX_SAFE_INTEGER);
    });
    test('should return accurate megabyte values for large byte values within safe range', () => {
        const largeBytesValue = BigInt(9007199254740991) * BigInt(fileSizeUtils_1.BYTE_SCALE_FACTOR ** 2); // Scaled up to bytes
        const expectedMb = Number(BigInt(9007199254740991)); // The original number in megabytes
        expect((0, fileSizeUtils_1.bigIntBytesToMb)(largeBytesValue)).toBe(expectedMb);
    });
});
