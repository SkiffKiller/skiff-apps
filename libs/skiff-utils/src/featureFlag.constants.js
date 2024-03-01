"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkActionPageLengthFlag = exports.GlobalDisableAliasLimitFlag = exports.LowFrequencySenderThresholdFlag = exports.FeatureFlag = exports.ONBOARDING_EXPERIMENT_LAUNCH_DATE = exports.LDKey = exports.ActivationChecklistFeatureFlag = exports.OnboardingRetentionFlowFeatureFlag = exports.OnboardingUpsellFeatureFlag = void 0;
var OnboardingUpsellFeatureFlag;
(function (OnboardingUpsellFeatureFlag) {
    OnboardingUpsellFeatureFlag["CONTROL"] = "control";
    OnboardingUpsellFeatureFlag["SHOW_ESSENTIAL"] = "essential";
    OnboardingUpsellFeatureFlag["SHOW_BUSINESS"] = "business";
})(OnboardingUpsellFeatureFlag || (exports.OnboardingUpsellFeatureFlag = OnboardingUpsellFeatureFlag = {}));
var OnboardingRetentionFlowFeatureFlag;
(function (OnboardingRetentionFlowFeatureFlag) {
    OnboardingRetentionFlowFeatureFlag["CONTROL"] = "control";
    OnboardingRetentionFlowFeatureFlag["CHECKLIST"] = "checklist";
    OnboardingRetentionFlowFeatureFlag["STEPS"] = "steps";
})(OnboardingRetentionFlowFeatureFlag || (exports.OnboardingRetentionFlowFeatureFlag = OnboardingRetentionFlowFeatureFlag = {}));
var ActivationChecklistFeatureFlag;
(function (ActivationChecklistFeatureFlag) {
    ActivationChecklistFeatureFlag["CONTROL"] = "control";
    ActivationChecklistFeatureFlag["TRIAL"] = "trial";
    ActivationChecklistFeatureFlag["CREDITS"] = "credits";
})(ActivationChecklistFeatureFlag || (exports.ActivationChecklistFeatureFlag = ActivationChecklistFeatureFlag = {}));
var LDKey;
(function (LDKey) {
    LDKey["ONBOARING_RETENTION_FLOW_EXPERIMENT"] = "onboarding-retention-flow";
    LDKey["SHOW_BANNER_AFTER_ONBOARDING_EXPERIMENT"] = "show-banners-after-onboarding";
    LDKey["SHOW_MAIL_APP_FOOTER_BUTTON"] = "show-mail-app-footer-button";
    LDKey["SEND_TRIAL_WILL_END_REMINDER"] = "trial-will-cancel-reminder-email";
    LDKey["ACTIVATION_CHECKLIST"] = "activation-checklist";
    LDKey["LOW_FREQUENCY_SENDER_THRESHOLD"] = "low-frequency-sender-threshold";
    LDKey["GLOBAL_DISABLE_ALIAS_LIMIT"] = "global-disable-alias-limit";
    LDKey["FREE_CUSTOM_DOMAIN"] = "free-custom-domain";
    LDKey["DECREASED_FREE_TIER_COLLABORATOR_LIMIT"] = "decreased-free-tier-collaborator-limit";
    LDKey["CUSTOM_DOMAIN_ONBOARDING_STEP"] = "custom-domain-onboarding-step";
    LDKey["BULK_ACTION_PAGE_LENGTH"] = "bulk-action-page-length";
    LDKey["EXEMPT_FROM_REFERRAL_MAX"] = "exempt-from-referral-max";
    LDKey["INDEX_THREAD_CONTENT_UPDATED_AT"] = "index-thread-content-updated-at";
    LDKey["LAZY_DOWNGRADE_ON_TIER_LOOKUP"] = "lazy-downgrade-on-tier-lookup";
    LDKey["BLACK_FRIDAY_DISCOUNT"] = "black-friday-discount";
})(LDKey || (exports.LDKey = LDKey = {}));
exports.ONBOARDING_EXPERIMENT_LAUNCH_DATE = new Date('March 2, 2023 12:00:00 PST');
var FeatureFlag;
(function (FeatureFlag) {
    FeatureFlag["TRASH"] = "trash";
})(FeatureFlag || (exports.FeatureFlag = FeatureFlag = {}));
var LowFrequencySenderThresholdFlag;
(function (LowFrequencySenderThresholdFlag) {
    LowFrequencySenderThresholdFlag["CONTROL"] = "control";
    LowFrequencySenderThresholdFlag["LOW"] = "low";
    LowFrequencySenderThresholdFlag["MEDIUM"] = "medium";
    LowFrequencySenderThresholdFlag["HIGH"] = "high";
})(LowFrequencySenderThresholdFlag || (exports.LowFrequencySenderThresholdFlag = LowFrequencySenderThresholdFlag = {}));
var GlobalDisableAliasLimitFlag;
(function (GlobalDisableAliasLimitFlag) {
    GlobalDisableAliasLimitFlag["CONTROL"] = "control";
    GlobalDisableAliasLimitFlag["LOW"] = "low";
    GlobalDisableAliasLimitFlag["MEDIUM"] = "medium";
    GlobalDisableAliasLimitFlag["HIGH"] = "high";
})(GlobalDisableAliasLimitFlag || (exports.GlobalDisableAliasLimitFlag = GlobalDisableAliasLimitFlag = {}));
var BulkActionPageLengthFlag;
(function (BulkActionPageLengthFlag) {
    BulkActionPageLengthFlag["LOW"] = "low";
    BulkActionPageLengthFlag["MEDIUM"] = "medium";
    BulkActionPageLengthFlag["HIGH"] = "high";
})(BulkActionPageLengthFlag || (exports.BulkActionPageLengthFlag = BulkActionPageLengthFlag = {}));
