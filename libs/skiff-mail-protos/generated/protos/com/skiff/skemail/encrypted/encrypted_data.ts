/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "com.skiff.skemail.encrypted";

/**
 * AttachmentMetadata. Encrypted data about an attachment that is stored for decryption by the client.
 * Metadata is encrypted seperately so it can be retrieved/decrypted by a client on email load without
 * having to download the full attachment.
 */
export interface AttachmentMetadataHeader {
}

export interface AttachmentMetadataBody {
  contentType: string;
  contentDisposition: string;
  filename: string;
  checksum: string;
  size: number;
  contentId: string;
}

/** Mail content datagrams. */
export interface MailSubjectHeader {
}

export interface MailSubjectBody {
  subject: string;
}

export interface MailHTMLHeader {
}

export interface MailHTMLBody {
  html: string;
}

export interface MailTextHeader {
}

export interface MailTextBody {
  text: string;
}

export interface MailTextAsHTMLHeader {
}

export interface MailTextAsHTMLBody {
  textAsHTML: string;
}

/** Attachment content */
export interface AttachmentHeader {
}

export interface AttachmentBody {
  content: string;
}

/** Encrypted raw mime for retrieval by the client. */
export interface RawMimeHeader {
}

export interface RawMimeBody {
  rawMime: string;
}

/** Encrypted email structures. */
export interface Address {
  name: string;
  address: string;
}

export interface EncryptedData {
  encryptedSubject: string;
  encryptedHtml: string;
  encryptedText: string;
  encryptedTextAsHtml: string;
  encryptedTextSnippet: string;
}

function createBaseAttachmentMetadataHeader(): AttachmentMetadataHeader {
  return {};
}

export const AttachmentMetadataHeader = {
  encode(_: AttachmentMetadataHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachmentMetadataHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachmentMetadataHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AttachmentMetadataHeader {
    return {};
  },

  toJSON(_: AttachmentMetadataHeader): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachmentMetadataHeader>, I>>(base?: I): AttachmentMetadataHeader {
    return AttachmentMetadataHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttachmentMetadataHeader>, I>>(_: I): AttachmentMetadataHeader {
    const message = createBaseAttachmentMetadataHeader();
    return message;
  },
};

function createBaseAttachmentMetadataBody(): AttachmentMetadataBody {
  return { contentType: "", contentDisposition: "", filename: "", checksum: "", size: 0, contentId: "" };
}

export const AttachmentMetadataBody = {
  encode(message: AttachmentMetadataBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }
    if (message.contentDisposition !== "") {
      writer.uint32(18).string(message.contentDisposition);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    if (message.checksum !== "") {
      writer.uint32(42).string(message.checksum);
    }
    if (message.size !== 0) {
      writer.uint32(48).int64(message.size);
    }
    if (message.contentId !== "") {
      writer.uint32(58).string(message.contentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachmentMetadataBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachmentMetadataBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contentType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contentDisposition = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.checksum = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.size = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.contentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachmentMetadataBody {
    return {
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      contentDisposition: isSet(object.contentDisposition) ? String(object.contentDisposition) : "",
      filename: isSet(object.filename) ? String(object.filename) : "",
      checksum: isSet(object.checksum) ? String(object.checksum) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      contentId: isSet(object.contentId) ? String(object.contentId) : "",
    };
  },

  toJSON(message: AttachmentMetadataBody): unknown {
    const obj: any = {};
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.contentDisposition !== undefined && (obj.contentDisposition = message.contentDisposition);
    message.filename !== undefined && (obj.filename = message.filename);
    message.checksum !== undefined && (obj.checksum = message.checksum);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.contentId !== undefined && (obj.contentId = message.contentId);
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachmentMetadataBody>, I>>(base?: I): AttachmentMetadataBody {
    return AttachmentMetadataBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttachmentMetadataBody>, I>>(object: I): AttachmentMetadataBody {
    const message = createBaseAttachmentMetadataBody();
    message.contentType = object.contentType ?? "";
    message.contentDisposition = object.contentDisposition ?? "";
    message.filename = object.filename ?? "";
    message.checksum = object.checksum ?? "";
    message.size = object.size ?? 0;
    message.contentId = object.contentId ?? "";
    return message;
  },
};

function createBaseMailSubjectHeader(): MailSubjectHeader {
  return {};
}

export const MailSubjectHeader = {
  encode(_: MailSubjectHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MailSubjectHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailSubjectHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MailSubjectHeader {
    return {};
  },

  toJSON(_: MailSubjectHeader): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MailSubjectHeader>, I>>(base?: I): MailSubjectHeader {
    return MailSubjectHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MailSubjectHeader>, I>>(_: I): MailSubjectHeader {
    const message = createBaseMailSubjectHeader();
    return message;
  },
};

function createBaseMailSubjectBody(): MailSubjectBody {
  return { subject: "" };
}

export const MailSubjectBody = {
  encode(message: MailSubjectBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subject !== "") {
      writer.uint32(10).string(message.subject);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MailSubjectBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailSubjectBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subject = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MailSubjectBody {
    return { subject: isSet(object.subject) ? String(object.subject) : "" };
  },

  toJSON(message: MailSubjectBody): unknown {
    const obj: any = {};
    message.subject !== undefined && (obj.subject = message.subject);
    return obj;
  },

  create<I extends Exact<DeepPartial<MailSubjectBody>, I>>(base?: I): MailSubjectBody {
    return MailSubjectBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MailSubjectBody>, I>>(object: I): MailSubjectBody {
    const message = createBaseMailSubjectBody();
    message.subject = object.subject ?? "";
    return message;
  },
};

function createBaseMailHTMLHeader(): MailHTMLHeader {
  return {};
}

export const MailHTMLHeader = {
  encode(_: MailHTMLHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MailHTMLHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailHTMLHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MailHTMLHeader {
    return {};
  },

  toJSON(_: MailHTMLHeader): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MailHTMLHeader>, I>>(base?: I): MailHTMLHeader {
    return MailHTMLHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MailHTMLHeader>, I>>(_: I): MailHTMLHeader {
    const message = createBaseMailHTMLHeader();
    return message;
  },
};

function createBaseMailHTMLBody(): MailHTMLBody {
  return { html: "" };
}

export const MailHTMLBody = {
  encode(message: MailHTMLBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.html !== "") {
      writer.uint32(10).string(message.html);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MailHTMLBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailHTMLBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.html = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MailHTMLBody {
    return { html: isSet(object.html) ? String(object.html) : "" };
  },

  toJSON(message: MailHTMLBody): unknown {
    const obj: any = {};
    message.html !== undefined && (obj.html = message.html);
    return obj;
  },

  create<I extends Exact<DeepPartial<MailHTMLBody>, I>>(base?: I): MailHTMLBody {
    return MailHTMLBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MailHTMLBody>, I>>(object: I): MailHTMLBody {
    const message = createBaseMailHTMLBody();
    message.html = object.html ?? "";
    return message;
  },
};

function createBaseMailTextHeader(): MailTextHeader {
  return {};
}

export const MailTextHeader = {
  encode(_: MailTextHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MailTextHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailTextHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MailTextHeader {
    return {};
  },

  toJSON(_: MailTextHeader): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MailTextHeader>, I>>(base?: I): MailTextHeader {
    return MailTextHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MailTextHeader>, I>>(_: I): MailTextHeader {
    const message = createBaseMailTextHeader();
    return message;
  },
};

function createBaseMailTextBody(): MailTextBody {
  return { text: "" };
}

export const MailTextBody = {
  encode(message: MailTextBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MailTextBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailTextBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MailTextBody {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: MailTextBody): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<MailTextBody>, I>>(base?: I): MailTextBody {
    return MailTextBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MailTextBody>, I>>(object: I): MailTextBody {
    const message = createBaseMailTextBody();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseMailTextAsHTMLHeader(): MailTextAsHTMLHeader {
  return {};
}

export const MailTextAsHTMLHeader = {
  encode(_: MailTextAsHTMLHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MailTextAsHTMLHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailTextAsHTMLHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MailTextAsHTMLHeader {
    return {};
  },

  toJSON(_: MailTextAsHTMLHeader): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MailTextAsHTMLHeader>, I>>(base?: I): MailTextAsHTMLHeader {
    return MailTextAsHTMLHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MailTextAsHTMLHeader>, I>>(_: I): MailTextAsHTMLHeader {
    const message = createBaseMailTextAsHTMLHeader();
    return message;
  },
};

function createBaseMailTextAsHTMLBody(): MailTextAsHTMLBody {
  return { textAsHTML: "" };
}

export const MailTextAsHTMLBody = {
  encode(message: MailTextAsHTMLBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.textAsHTML !== "") {
      writer.uint32(10).string(message.textAsHTML);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MailTextAsHTMLBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailTextAsHTMLBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.textAsHTML = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MailTextAsHTMLBody {
    return { textAsHTML: isSet(object.textAsHTML) ? String(object.textAsHTML) : "" };
  },

  toJSON(message: MailTextAsHTMLBody): unknown {
    const obj: any = {};
    message.textAsHTML !== undefined && (obj.textAsHTML = message.textAsHTML);
    return obj;
  },

  create<I extends Exact<DeepPartial<MailTextAsHTMLBody>, I>>(base?: I): MailTextAsHTMLBody {
    return MailTextAsHTMLBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MailTextAsHTMLBody>, I>>(object: I): MailTextAsHTMLBody {
    const message = createBaseMailTextAsHTMLBody();
    message.textAsHTML = object.textAsHTML ?? "";
    return message;
  },
};

function createBaseAttachmentHeader(): AttachmentHeader {
  return {};
}

export const AttachmentHeader = {
  encode(_: AttachmentHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachmentHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachmentHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AttachmentHeader {
    return {};
  },

  toJSON(_: AttachmentHeader): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachmentHeader>, I>>(base?: I): AttachmentHeader {
    return AttachmentHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttachmentHeader>, I>>(_: I): AttachmentHeader {
    const message = createBaseAttachmentHeader();
    return message;
  },
};

function createBaseAttachmentBody(): AttachmentBody {
  return { content: "" };
}

export const AttachmentBody = {
  encode(message: AttachmentBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachmentBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachmentBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttachmentBody {
    return { content: isSet(object.content) ? String(object.content) : "" };
  },

  toJSON(message: AttachmentBody): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  create<I extends Exact<DeepPartial<AttachmentBody>, I>>(base?: I): AttachmentBody {
    return AttachmentBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AttachmentBody>, I>>(object: I): AttachmentBody {
    const message = createBaseAttachmentBody();
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseRawMimeHeader(): RawMimeHeader {
  return {};
}

export const RawMimeHeader = {
  encode(_: RawMimeHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RawMimeHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawMimeHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): RawMimeHeader {
    return {};
  },

  toJSON(_: RawMimeHeader): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RawMimeHeader>, I>>(base?: I): RawMimeHeader {
    return RawMimeHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RawMimeHeader>, I>>(_: I): RawMimeHeader {
    const message = createBaseRawMimeHeader();
    return message;
  },
};

function createBaseRawMimeBody(): RawMimeBody {
  return { rawMime: "" };
}

export const RawMimeBody = {
  encode(message: RawMimeBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rawMime !== "") {
      writer.uint32(10).string(message.rawMime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RawMimeBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawMimeBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rawMime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RawMimeBody {
    return { rawMime: isSet(object.rawMime) ? String(object.rawMime) : "" };
  },

  toJSON(message: RawMimeBody): unknown {
    const obj: any = {};
    message.rawMime !== undefined && (obj.rawMime = message.rawMime);
    return obj;
  },

  create<I extends Exact<DeepPartial<RawMimeBody>, I>>(base?: I): RawMimeBody {
    return RawMimeBody.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RawMimeBody>, I>>(object: I): RawMimeBody {
    const message = createBaseRawMimeBody();
    message.rawMime = object.rawMime ?? "";
    return message;
  },
};

function createBaseAddress(): Address {
  return { name: "", address: "" };
}

export const Address = {
  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Address {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEncryptedData(): EncryptedData {
  return {
    encryptedSubject: "",
    encryptedHtml: "",
    encryptedText: "",
    encryptedTextAsHtml: "",
    encryptedTextSnippet: "",
  };
}

export const EncryptedData = {
  encode(message: EncryptedData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptedSubject !== "") {
      writer.uint32(10).string(message.encryptedSubject);
    }
    if (message.encryptedHtml !== "") {
      writer.uint32(18).string(message.encryptedHtml);
    }
    if (message.encryptedText !== "") {
      writer.uint32(26).string(message.encryptedText);
    }
    if (message.encryptedTextAsHtml !== "") {
      writer.uint32(34).string(message.encryptedTextAsHtml);
    }
    if (message.encryptedTextSnippet !== "") {
      writer.uint32(42).string(message.encryptedTextSnippet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptedData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encryptedSubject = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.encryptedHtml = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.encryptedText = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.encryptedTextAsHtml = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.encryptedTextSnippet = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EncryptedData {
    return {
      encryptedSubject: isSet(object.encryptedSubject) ? String(object.encryptedSubject) : "",
      encryptedHtml: isSet(object.encryptedHtml) ? String(object.encryptedHtml) : "",
      encryptedText: isSet(object.encryptedText) ? String(object.encryptedText) : "",
      encryptedTextAsHtml: isSet(object.encryptedTextAsHtml) ? String(object.encryptedTextAsHtml) : "",
      encryptedTextSnippet: isSet(object.encryptedTextSnippet) ? String(object.encryptedTextSnippet) : "",
    };
  },

  toJSON(message: EncryptedData): unknown {
    const obj: any = {};
    message.encryptedSubject !== undefined && (obj.encryptedSubject = message.encryptedSubject);
    message.encryptedHtml !== undefined && (obj.encryptedHtml = message.encryptedHtml);
    message.encryptedText !== undefined && (obj.encryptedText = message.encryptedText);
    message.encryptedTextAsHtml !== undefined && (obj.encryptedTextAsHtml = message.encryptedTextAsHtml);
    message.encryptedTextSnippet !== undefined && (obj.encryptedTextSnippet = message.encryptedTextSnippet);
    return obj;
  },

  create<I extends Exact<DeepPartial<EncryptedData>, I>>(base?: I): EncryptedData {
    return EncryptedData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EncryptedData>, I>>(object: I): EncryptedData {
    const message = createBaseEncryptedData();
    message.encryptedSubject = object.encryptedSubject ?? "";
    message.encryptedHtml = object.encryptedHtml ?? "";
    message.encryptedText = object.encryptedText ?? "";
    message.encryptedTextAsHtml = object.encryptedTextAsHtml ?? "";
    message.encryptedTextSnippet = object.encryptedTextSnippet ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
