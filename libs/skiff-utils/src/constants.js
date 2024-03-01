"use strict";
// This file contains constants shared between editor front and back
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeBillingInterval = exports.PaywallErrorCode = exports.PaymentQueryParamValue = exports.PaymentQueryParam = exports.STRIPE_WEBHOOK_RETRY_DURATION_IN_MS = exports.CustomDomainTierName = exports.CUSTOMER_FACING_SKIFF_CREDIT_COUPON_NAME = exports.STRIPE_PAYMENT_RETRY_TIME_LIMIT = exports.STRIPE_SUBSCRIPTION_RENEWAL_COUPON_REDEMPTION_PERIOD = exports.STRIPE_CHECKOUT_SESSION_LIFESPAN_SECONDS = exports.UNIT_PRICE_BY_TIER_NAME = exports.FreeTrialIdentifier = exports.PlanRelation = exports.PlanPrices = exports.PurchaseType = exports.SkiffCreditEligibleTier = exports.TierName = exports.JUNO_PREFIX = exports.COSMOS_HUB_PREFIX = exports.CustomDomainStatus = exports.CHALLENGE_TOKEN_PREFIX = exports.ADMIN_API_TOKEN_HEADER = exports.SKIFF_PRODUCT_HEADER_NAME = exports.SKIFF_DEVICEID_HEADER_NAME = exports.SKIFF_USERID_HEADER_NAME = exports.POLL_INTERVAL_IN_MS = exports.EmailType = exports.SKIFF_SUPPORT_DOMAINS = exports.SUPPORT_EMAIL = exports.CustomDomainPriceExperimentGroup = exports.ONE_CLICK_CUSTOM_DOMAIN_FLOOR_PRICE = exports.ONE_CLICK_CUSTOM_DOMAIN_FEE = exports.GODADDY_PRICE_SCALE_FACTOR = exports.MB_SCALE_FACTOR = exports.DEFAULT_FEATURE_FLAGS = exports.CREDIT_FOR_DESKTOP_APP = exports.MAX_TRANSACTION_CREDIT_FOR_USER = exports.MAX_CREDIT_FOR_USER = exports.CREDIT_FOR_MOBILE_APP = exports.CREDIT_FOR_ENS_NAME = exports.CREDIT_FOR_GMAIL_IMPORT = exports.CREDIT_FOR_OUTLOOK_IMPORT = exports.MAX_CREDIT_FOR_GOOGLE_DRIVE_IMPORTS = exports.MAX_CREDIT_FOR_REFERRALS = exports.CREDIT_FOR_REFERRAL = exports.GLOBAL_MAX_NUM_QUICK_ALIASES = exports.MAXIMUM_STRIPE_PURCHASE_QUANTITY = exports.DOCUMENT_HISTORY_FREE_TIER_HOURS = exports.FILE_SLICE_SIZE = exports.MAX_CACHE_ELEMS_PER_DOC = void 0;
exports.STORAGE_WARNING_THRESHOLDS = exports.QUICK_ALIAS_LIMIT_WARNING_BUFFER = exports.VERIFIED_SKIFF_EMAILS = exports.SUBSCRIPTION_UPDATE_ALIAS = exports.ONBOARDING_ALIAS = exports.WELCOME_EMAIL_ALIAS = exports.UPDATES_EMAIL_ALIAS = exports.SUPPORT_COM_EMAIL_ALIAS = exports.SUPPORT_EMAIL_ALIAS = exports.ALERTS_EMAIL_ALIAS = exports.CONTENT_SNIPPET_SIZE = exports.ActiveGoodStandingStates = exports.ActiveSubscriptionStates = exports.ProcessingStates = exports.TerminalStates = exports.SubscriptionStates = exports.SUPPORTED_ICNS_PREFIXES = exports.CaptchaBehaviorTypes = exports.CALENDAR_SYNC_ERROR_MESSAGE = exports.CUSTOM_DOMAIN_RECORD_ERRORS = exports.USER_TAG_RE = exports.CUSTOM_DOMAINS_ALIAS_MAX_LENGTH = exports.CUSTOM_DOMAINS_ALIAS_MIN_LENGTH = exports.SKIFF_ALIAS_MAX_LENGTH = exports.SKIFF_ALIAS_MIN_LENGTH = exports.SHORT_ALIAS_MIN_LENGTH = exports.FREE_TRIALS = void 0;
const fileSizeUtils_1 = require("./fileSizeUtils");
// In the new file storage architecture, this limit doesn't really matter - we just set it to a high value for sanity.
// The maximum file size we can store is MAX_CACHE_ELEMS_PER_DOC * FILE_SLICE_SIZE.
exports.MAX_CACHE_ELEMS_PER_DOC = 1000000;
// Controls the maximum slice size for file uploads. Files larger than this size will be split into multiple slices.
exports.FILE_SLICE_SIZE = (0, fileSizeUtils_1.mbToBytes)(5); // MB
// Number of hours of document history granted to a user on the free tier.
// If this var is updated, also update the warning text in react-client/app/components/editor/SnapshotsPanel/SnapshotsPanel.tsx
exports.DOCUMENT_HISTORY_FREE_TIER_HOURS = 24;
exports.MAXIMUM_STRIPE_PURCHASE_QUANTITY = 999999;
exports.GLOBAL_MAX_NUM_QUICK_ALIASES = 10000;
/** Credits */
// Number of credits (in cents) users receive for a successful referral
// $10
exports.CREDIT_FOR_REFERRAL = {
    cents: 1000,
    skemailStorageBytes: 500000000,
    editorStorageBytes: 500000000
};
// $60, 6GB
exports.MAX_CREDIT_FOR_REFERRALS = {
    cents: 6000,
    skemailStorageBytes: 3000000000,
    editorStorageBytes: 3000000000
};
// $15
exports.MAX_CREDIT_FOR_GOOGLE_DRIVE_IMPORTS = {
    cents: 1500,
    skemailStorageBytes: 0,
    editorStorageBytes: 0
};
// $10 - One-time credit
exports.CREDIT_FOR_OUTLOOK_IMPORT = {
    cents: 1000,
    skemailStorageBytes: 0,
    editorStorageBytes: 0
};
// $10 - One-time credit
exports.CREDIT_FOR_GMAIL_IMPORT = {
    cents: 1000,
    skemailStorageBytes: 0,
    editorStorageBytes: 0
};
// 1GB - One-time credit
exports.CREDIT_FOR_ENS_NAME = {
    cents: 0,
    skemailStorageBytes: (0, fileSizeUtils_1.gbToBytes)(1),
    editorStorageBytes: 0
};
// $10
exports.CREDIT_FOR_MOBILE_APP = {
    cents: 1000,
    skemailStorageBytes: 0,
    editorStorageBytes: 0
};
// $100, 10GB
exports.MAX_CREDIT_FOR_USER = {
    cents: 10000,
    skemailStorageBytes: 10000000000,
    editorStorageBytes: 10000000000
};
// $100, 10GB
exports.MAX_TRANSACTION_CREDIT_FOR_USER = {
    cents: 10000,
    skemailStorageBytes: 10000000000,
    editorStorageBytes: 10000000000
};
// $10
exports.CREDIT_FOR_DESKTOP_APP = {
    cents: 1000,
    skemailStorageBytes: 0,
    editorStorageBytes: 0
};
exports.DEFAULT_FEATURE_FLAGS = {
    documentSnapshot: false,
    contentSearch: true,
    uploadLimitMegabytes: 50,
    storageLimitMegabytes: 10000,
    embedFiles: true // cannot embed files in pages
};
exports.MB_SCALE_FACTOR = 1000 ** 2; // bytes in a megabytes
// Conversion factor to convert price from GoDaddy API (in currency-micro-units) to standard decimal pricing (e.g. $10.99)
exports.GODADDY_PRICE_SCALE_FACTOR = 1 / 10 ** 6;
// A fee that we add to custom domain purchases to account for possible ICANN fees, taxes and Stripe fees (numerator is denominated in dollars)
exports.ONE_CLICK_CUSTOM_DOMAIN_FEE = 1 / exports.GODADDY_PRICE_SCALE_FACTOR;
// Minimum price that we charge for the first year of a custom domain, currently only enforced for an experimental group (numerator is denominated in dollars)
exports.ONE_CLICK_CUSTOM_DOMAIN_FLOOR_PRICE = 9.99 / exports.GODADDY_PRICE_SCALE_FACTOR;
var CustomDomainPriceExperimentGroup;
(function (CustomDomainPriceExperimentGroup) {
    CustomDomainPriceExperimentGroup["TREATMENT"] = "has-floor-price";
    CustomDomainPriceExperimentGroup["CONTROL"] = "no-floor-price";
})(CustomDomainPriceExperimentGroup || (exports.CustomDomainPriceExperimentGroup = CustomDomainPriceExperimentGroup = {}));
exports.SUPPORT_EMAIL = 'support@skiff.org';
// email domains from which support comms may originate
exports.SKIFF_SUPPORT_DOMAINS = ['skiff.org', 'skiff.zendesk.com'];
var EmailType;
(function (EmailType) {
    EmailType["SHARE"] = "SHARE";
    EmailType["COMMENT"] = "COMMENT";
    EmailType["ACCESS"] = "ACCESS";
    EmailType["RECOVERY"] = "RECOVERY";
    EmailType["VERIFY"] = "VERIFY";
    EmailType["REFER_PAGES"] = "REFER_PAGES";
    EmailType["REFER_EMAIL"] = "REFER_EMAIL";
    EmailType["SUGGESTION"] = "SUGGESTION";
    EmailType["ADD_EMAIL"] = "ADD_EMAIL";
    EmailType["DELETE_RECOVERY_EMAIL"] = "DELETE_RECOVERY_EMAIL";
    EmailType["MENTION"] = "MENTION";
    EmailType["PROVISION_USER"] = "PROVISION_USER";
    EmailType["SHARE_WORKSPACE"] = "SHARE_WORKSPACE";
    EmailType["SUGGEST_WORKSPACE"] = "SUGGEST_WORKSPACE";
})(EmailType || (exports.EmailType = EmailType = {}));
exports.POLL_INTERVAL_IN_MS = 20000; // 20 seconds
// Header name for auth link
exports.SKIFF_USERID_HEADER_NAME = 'x-skiff-userid';
// Header name for device id
exports.SKIFF_DEVICEID_HEADER_NAME = 'x-skiff-deviceid';
// Header name for product
exports.SKIFF_PRODUCT_HEADER_NAME = 'x-skeader-product';
// Admin API Token
exports.ADMIN_API_TOKEN_HEADER = 'x-skiff-admin-api-token';
// Human-readable prefix for challenge to clarify to users what they're signing
exports.CHALLENGE_TOKEN_PREFIX = 'skiff_signup_';
var CustomDomainStatus;
(function (CustomDomainStatus) {
    CustomDomainStatus["PENDING"] = "PENDING";
    CustomDomainStatus["VERIFIED"] = "VERIFIED";
    CustomDomainStatus["FAILED_REVERIFICATION"] = "FAILED_REVERIFICATION";
})(CustomDomainStatus || (exports.CustomDomainStatus = CustomDomainStatus = {}));
// Human-readable prefix (HRP) for Cosmos Hub zone
exports.COSMOS_HUB_PREFIX = 'cosmos';
// Human-readable prefix (HRP) for Juno zone
exports.JUNO_PREFIX = 'juno';
// Equal to Tier.name in database, which corresponds to Stripe product names, via SyncWithStripe
var TierName;
(function (TierName) {
    TierName["Free"] = "Free";
    TierName["Essential"] = "Essential";
    TierName["Pro"] = "Pro";
    TierName["Business"] = "Business";
})(TierName || (exports.TierName = TierName = {}));
var SkiffCreditEligibleTier;
(function (SkiffCreditEligibleTier) {
    SkiffCreditEligibleTier["Pro"] = "Pro";
    SkiffCreditEligibleTier["Business"] = "Business";
})(SkiffCreditEligibleTier || (exports.SkiffCreditEligibleTier = SkiffCreditEligibleTier = {}));
var PurchaseType;
(function (PurchaseType) {
    PurchaseType["NewCheckout"] = "New Checkout";
    PurchaseType["Renewal"] = "Renewal";
    PurchaseType["PlanChange"] = "PlanChange";
})(PurchaseType || (exports.PurchaseType = PurchaseType = {}));
// Costs for different plans in dollars
var PlanPrices;
(function (PlanPrices) {
    PlanPrices[PlanPrices["EssentialMonthly"] = 4] = "EssentialMonthly";
    PlanPrices[PlanPrices["EssentialYearly"] = 36] = "EssentialYearly";
    PlanPrices[PlanPrices["ProMonthly"] = 10] = "ProMonthly";
    PlanPrices[PlanPrices["ProYearly"] = 96] = "ProYearly";
    PlanPrices[PlanPrices["BusinessMonthly"] = 15] = "BusinessMonthly";
    PlanPrices[PlanPrices["BusinessYearly"] = 144] = "BusinessYearly";
})(PlanPrices || (exports.PlanPrices = PlanPrices = {}));
var PlanRelation;
(function (PlanRelation) {
    PlanRelation["CURRENT"] = "CURRENT";
    PlanRelation["UPGRADE"] = "UPGRADE";
    PlanRelation["DOWNGRADE"] = "DOWNGRADE";
})(PlanRelation || (exports.PlanRelation = PlanRelation = {}));
// unique identifiers for free trials; used e.g. to control how past trial participation affects future trial eligibility
// MUST be limited to 40 CHARS to conform to key-length limits for Stripe metadata;
// If you change an identifier for a given trial, you need to do a stripe migration to mark all of the subscriptions that have participated
// with the new name; otherwise, name change would invalidate record of past participation
var FreeTrialIdentifier;
(function (FreeTrialIdentifier) {
    FreeTrialIdentifier["CUSTOM_DOMAIN_PURCHASE_TRIAL"] = "CUSTOM_DOMAIN_PURCHASE_TRIAL";
    FreeTrialIdentifier["ESSENTIAL_ON_FULL_ACTIVATION"] = "ESSENTIAL_ON_FULL_ACTIVATION";
})(FreeTrialIdentifier || (exports.FreeTrialIdentifier = FreeTrialIdentifier = {}));
exports.UNIT_PRICE_BY_TIER_NAME = {
    [TierName.Essential]: { monthly: PlanPrices.EssentialMonthly, yearly: PlanPrices.EssentialYearly },
    [TierName.Pro]: { monthly: PlanPrices.ProMonthly, yearly: PlanPrices.ProYearly },
    [TierName.Business]: { monthly: PlanPrices.BusinessMonthly, yearly: PlanPrices.BusinessYearly }
};
exports.STRIPE_CHECKOUT_SESSION_LIFESPAN_SECONDS = 24 * 60 * 60;
// a coupon attached to a specific subscription in advance of a renewal has a one-month redemption limit
exports.STRIPE_SUBSCRIPTION_RENEWAL_COUPON_REDEMPTION_PERIOD = 30 * 24 * 60 * 60;
// note that this 2-week limit after which plans are cancelled is configurable; if we change on stripe, should change here too
exports.STRIPE_PAYMENT_RETRY_TIME_LIMIT = 14 * 24 * 60 * 60;
exports.CUSTOMER_FACING_SKIFF_CREDIT_COUPON_NAME = 'Skiff Credit';
var CustomDomainTierName;
(function (CustomDomainTierName) {
    //corresponds to Stripe product name
    CustomDomainTierName["ActiveCustomDomain"] = "Custom Domain";
    //canonical end-of-life and pre-activation state for custom domain subscription history
    CustomDomainTierName["InactiveCustomDomain"] = "Inactive Custom Domain";
})(CustomDomainTierName || (exports.CustomDomainTierName = CustomDomainTierName = {}));
// failed webhooks from Stripe will continue to retry at decreasing frequency for 3 days
exports.STRIPE_WEBHOOK_RETRY_DURATION_IN_MS = 259200000;
// query string for plan checkout redirects
var PaymentQueryParam;
(function (PaymentQueryParam) {
    PaymentQueryParam["PAYMENT_SUCCESS"] = "paymentSuccess";
    PaymentQueryParam["DOMAIN_REGISTRATION_SUCCESS"] = "domainRegistration";
})(PaymentQueryParam || (exports.PaymentQueryParam = PaymentQueryParam = {}));
var PaymentQueryParamValue;
(function (PaymentQueryParamValue) {
    PaymentQueryParamValue["Succeeded"] = "1";
    PaymentQueryParamValue["Cancelled"] = "0";
})(PaymentQueryParamValue || (exports.PaymentQueryParamValue = PaymentQueryParamValue = {}));
// ApolloError codes for errors in which users hit tier limits
var PaywallErrorCode;
(function (PaywallErrorCode) {
    PaywallErrorCode["AliasLimit"] = "ALIAS_LIMIT";
    PaywallErrorCode["ShortAlias"] = "SHORT_ALIAS";
    PaywallErrorCode["StorageLimit"] = "STORAGE_LIMIT";
    PaywallErrorCode["UploadLimit"] = "UPLOAD_LIMIT";
    PaywallErrorCode["CustomDomainLimit"] = "CUSTOM_DOMAIN_LIMIT";
    PaywallErrorCode["MessageLimit"] = "MESSAGE_LIMIT";
    PaywallErrorCode["UserLabelLimit"] = "USER_LABEL_LIMIT";
    PaywallErrorCode["UserFolderLimit"] = "USER_FOLDER_LIMIT";
    PaywallErrorCode["WorkspaceUserLimit"] = "WORKSPACE_USER_LIMIT";
    PaywallErrorCode["SecuredBySkiffSig"] = "SECURED_BY_SKIFF_SIG";
    PaywallErrorCode["AutoReply"] = "AUTO_REPLY";
    PaywallErrorCode["MailFilterLimit"] = "MAIL_FILTER";
    PaywallErrorCode["CatchallAlias"] = "CATCHALL_ALIAS";
    PaywallErrorCode["EditAliasDisplayInfo"] = "EDIT_ALIAS_DISPLAY_INFO";
    PaywallErrorCode["AnonymousSubdomain"] = "ANONYMOUS_SUBDOMAIN";
})(PaywallErrorCode || (exports.PaywallErrorCode = PaywallErrorCode = {}));
// the billing cycles supported by both Stripe and Skiff
var StripeBillingInterval;
(function (StripeBillingInterval) {
    StripeBillingInterval["MONTH"] = "month";
    StripeBillingInterval["YEAR"] = "year";
})(StripeBillingInterval || (exports.StripeBillingInterval = StripeBillingInterval = {}));
exports.FREE_TRIALS = {
    [FreeTrialIdentifier.CUSTOM_DOMAIN_PURCHASE_TRIAL]: {
        trialTier: TierName.Pro,
        trialDays: 60,
        trialTierInterval: StripeBillingInterval.MONTH
    },
    [FreeTrialIdentifier.ESSENTIAL_ON_FULL_ACTIVATION]: {
        trialTier: TierName.Essential,
        trialDays: 60,
        trialTierInterval: StripeBillingInterval.MONTH
    }
};
exports.SHORT_ALIAS_MIN_LENGTH = 4;
exports.SKIFF_ALIAS_MIN_LENGTH = 6;
exports.SKIFF_ALIAS_MAX_LENGTH = 30;
// Custom domains rules
exports.CUSTOM_DOMAINS_ALIAS_MIN_LENGTH = 1;
exports.CUSTOM_DOMAINS_ALIAS_MAX_LENGTH = 64;
// example string to parse: "urn:sk:USER_FEATURES:STORAGE_LIMIT_BYTES=100000000"
exports.USER_TAG_RE = /^urn:sk:USER_FEATURES:(\S+)=(\S+)$/;
exports.CUSTOM_DOMAIN_RECORD_ERRORS = {
    RECORD_MISMATCH: 'RecordMismatch',
    DNS_RETRIEVAL_ERROR: 'DNSRetrievalError'
};
exports.CALENDAR_SYNC_ERROR_MESSAGE = 'Sync failed to save events';
// The following values are determined based on behavior types
// specified here: https://docs.hcaptcha.com/enterprise#behavior_type
var CaptchaBehaviorTypes;
(function (CaptchaBehaviorTypes) {
    CaptchaBehaviorTypes["SIGNUP"] = "signup";
    CaptchaBehaviorTypes["LOGIN"] = "login";
    CaptchaBehaviorTypes["PASSWORD_RESET"] = "password_reset";
    CaptchaBehaviorTypes["SEND_MESSAGE"] = "user_post";
    CaptchaBehaviorTypes["REPLY_MESSAGE"] = "user_comment";
    CaptchaBehaviorTypes["DELETE_ALIAS"] = "delete_alias";
    CaptchaBehaviorTypes["DELETE_QUICK_ALIAS"] = "delete_quick_alias";
    CaptchaBehaviorTypes["PROVISION_USER"] = "provision_user";
})(CaptchaBehaviorTypes || (exports.CaptchaBehaviorTypes = CaptchaBehaviorTypes = {}));
exports.SUPPORTED_ICNS_PREFIXES = ['cosmos', 'juno'];
/**
 * The states that a Stripe subscription can be in. Includes both terminal and processing states.
 * Source: https://stripe.com/docs/api/subscriptions/object#subscription_object-status
 * WARNING: IF YOU UPDATE THE ENUM, YOU MUST UPDATE THE DATABASE BY PERFORMING A MIGRATION!
 */
var SubscriptionStates;
(function (SubscriptionStates) {
    SubscriptionStates["ACTIVE"] = "active";
    SubscriptionStates["PAST_DUE"] = "past_due";
    SubscriptionStates["UNPAID"] = "unpaid";
    SubscriptionStates["CANCELLED"] = "canceled";
    SubscriptionStates["INCOMPLETE"] = "incomplete";
    SubscriptionStates["INCOMPLETE_EXPIRED"] = "incomplete_expired";
    SubscriptionStates["TRIALING"] = "trialing";
})(SubscriptionStates || (exports.SubscriptionStates = SubscriptionStates = {}));
exports.TerminalStates = [
    SubscriptionStates.CANCELLED,
    SubscriptionStates.INCOMPLETE_EXPIRED,
    SubscriptionStates.UNPAID
];
exports.ProcessingStates = [
    SubscriptionStates.ACTIVE,
    SubscriptionStates.PAST_DUE,
    SubscriptionStates.INCOMPLETE,
    SubscriptionStates.TRIALING
];
exports.ActiveSubscriptionStates = [
    SubscriptionStates.ACTIVE,
    SubscriptionStates.PAST_DUE,
    SubscriptionStates.TRIALING
];
exports.ActiveGoodStandingStates = [SubscriptionStates.ACTIVE, SubscriptionStates.TRIALING];
// Size of content snippet to be displayed in the email list.
exports.CONTENT_SNIPPET_SIZE = 100; // chars
exports.ALERTS_EMAIL_ALIAS = 'alerts@notifications.skiff.org';
exports.SUPPORT_EMAIL_ALIAS = 'support@skiff.org';
exports.SUPPORT_COM_EMAIL_ALIAS = 'support@skiff.com';
exports.UPDATES_EMAIL_ALIAS = 'updates@marketing.skiff.org';
exports.WELCOME_EMAIL_ALIAS = 'hello@skiff.com';
exports.ONBOARDING_ALIAS = 'onboarding@marketing.skiff.org';
exports.SUBSCRIPTION_UPDATE_ALIAS = 'subscriptions-noreply@skiff.com';
exports.VERIFIED_SKIFF_EMAILS = [
    exports.ALERTS_EMAIL_ALIAS,
    exports.SUPPORT_EMAIL_ALIAS,
    exports.SUPPORT_COM_EMAIL_ALIAS,
    exports.ONBOARDING_ALIAS,
    exports.UPDATES_EMAIL_ALIAS,
    exports.WELCOME_EMAIL_ALIAS,
    exports.SUBSCRIPTION_UPDATE_ALIAS
];
// the distance away from the quick alias limit within which we warn the user on alias creation;
// i.e. if limit is 10, we start warning at the creation of the (10 - BUFFER)th alias
exports.QUICK_ALIAS_LIMIT_WARNING_BUFFER = 2;
// proportions of storage allowance usage at which we warn users
exports.STORAGE_WARNING_THRESHOLDS = [
    0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.92, 0.95, 0.96, 0.97, 0.98, 0.99
];
