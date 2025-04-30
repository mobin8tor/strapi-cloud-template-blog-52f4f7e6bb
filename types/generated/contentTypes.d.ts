import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutYouAddressAboutYouAddress
  extends Struct.SingleTypeSchema {
  collectionName: 'about_you_addresses';
  info: {
    displayName: 'About You - Address';
    pluralName: 'about-you-addresses';
    singularName: 'about-you-address';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address_label: Schema.Attribute.String;
    apt_suite_label: Schema.Attribute.String;
    city_label: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    current_address_header: Schema.Attribute.String;
    housing_payment_label: Schema.Attribute.String;
    living_situation_label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-you-address.about-you-address'
    > &
      Schema.Attribute.Private;
    mailing_address_header: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    same_address_label: Schema.Attribute.String;
    state_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    zip_code_label: Schema.Attribute.String;
  };
}

export interface ApiAboutYouBankruptcyAboutYouBankruptcy
  extends Struct.SingleTypeSchema {
  collectionName: 'about_you_bankruptcies';
  info: {
    description: '';
    displayName: 'About You - Bankruptcy';
    pluralName: 'about-you-bankruptcies';
    singularName: 'about-you-bankruptcy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    discharge_date_label: Schema.Attribute.String;
    discharge_header: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-you-bankruptcy.about-you-bankruptcy'
    > &
      Schema.Attribute.Private;
    no_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    yes_label: Schema.Attribute.String;
  };
}

export interface ApiAboutYouDependentAboutYouDependent
  extends Struct.SingleTypeSchema {
  collectionName: 'about_you_dependents';
  info: {
    displayName: 'About You - Dependents';
    pluralName: 'about-you-dependents';
    singularName: 'about-you-dependent';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-you-dependent.about-you-dependent'
    > &
      Schema.Attribute.Private;
    none_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    ten_plus_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutYouOtpAboutYouOtp extends Struct.SingleTypeSchema {
  collectionName: 'about_you_otps';
  info: {
    displayName: 'About You - OTP';
    pluralName: 'about-you-otps';
    singularName: 'about-you-otp';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code_label: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-you-otp.about-you-otp'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutYouOverviewAboutYouOverview
  extends Struct.SingleTypeSchema {
  collectionName: 'about_you_overviews';
  info: {
    displayName: 'About You - Overview';
    pluralName: 'about-you-overviews';
    singularName: 'about-you-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-you-overview.about-you-overview'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutYouPhoneAboutYouPhone extends Struct.SingleTypeSchema {
  collectionName: 'about_you_phones';
  info: {
    displayName: 'About You - Phone';
    pluralName: 'about-you-phones';
    singularName: 'about-you-phone';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    info_card_description: Schema.Attribute.Text;
    info_card_header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-you-phone.about-you-phone'
    > &
      Schema.Attribute.Private;
    modal_cancel_button: Schema.Attribute.String;
    modal_continue_button: Schema.Attribute.String;
    modal_description: Schema.Attribute.Blocks;
    modal_header: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutYouResidencyAboutYouResidency
  extends Struct.SingleTypeSchema {
  collectionName: 'about_you_residencies';
  info: {
    description: '';
    displayName: 'About You - Residency';
    pluralName: 'about-you-residencies';
    singularName: 'about-you-residency';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    expiry_label: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-you-residency.about-you-residency'
    > &
      Schema.Attribute.Private;
    nationality_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    when_move_usa_label: Schema.Attribute.String;
  };
}

export interface ApiAboutYouSsnAboutYouSsn extends Struct.SingleTypeSchema {
  collectionName: 'about_you_ssns';
  info: {
    displayName: 'About You - SSN';
    pluralName: 'about-you-ssns';
    singularName: 'about-you-ssn';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    info_card_description: Schema.Attribute.Text;
    info_card_header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-you-ssn.about-you-ssn'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    ssn_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiApplicationGlobalApplicationGlobal
  extends Struct.SingleTypeSchema {
  collectionName: 'application_globals';
  info: {
    displayName: 'Application Global';
    pluralName: 'application-globals';
    singularName: 'application-global';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    about_you_section_description: Schema.Attribute.String;
    about_you_section_label: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eligibility_section_description: Schema.Attribute.String;
    eligibility_section_label: Schema.Attribute.String;
    final_verification_section_description: Schema.Attribute.String;
    final_verification_section_label: Schema.Attribute.String;
    income_section_description: Schema.Attribute.String;
    income_section_label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::application-global.application-global'
    > &
      Schema.Attribute.Private;
    next_button_text: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    description: 'Create your blog content';
    displayName: 'Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description_tag: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    title_tag: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactUsContactUs extends Struct.SingleTypeSchema {
  collectionName: 'contact_uses';
  info: {
    description: '';
    displayName: 'Page - Contact Us';
    pluralName: 'contact-uses';
    singularName: 'contact-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    email_description: Schema.Attribute.String;
    email_email: Schema.Attribute.Email;
    email_title: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us.contact-us'
    > &
      Schema.Attribute.Private;
    location_description: Schema.Attribute.String;
    location_location: Schema.Attribute.String;
    location_title: Schema.Attribute.String;
    phone_description: Schema.Attribute.String;
    phone_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEligibilityAboutYouEligibilityAboutYou
  extends Struct.SingleTypeSchema {
  collectionName: 'eligibility_about_yous';
  info: {
    displayName: 'Eligibility - About You';
    pluralName: 'eligibility-about-yous';
    singularName: 'eligibility-about-you';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date_of_birth_label: Schema.Attribute.String;
    email_address_label: Schema.Attribute.String;
    first_name_label: Schema.Attribute.String;
    header: Schema.Attribute.String;
    last_name_label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eligibility-about-you.eligibility-about-you'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    state_of_residence_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEligibilityBankAccountEligibilityBankAccount
  extends Struct.SingleTypeSchema {
  collectionName: 'eligibility_bank_accounts';
  info: {
    displayName: 'Eligibility - Bank Account';
    pluralName: 'eligibility-bank-accounts';
    singularName: 'eligibility-bank-account';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eligibility-bank-account.eligibility-bank-account'
    > &
      Schema.Attribute.Private;
    no_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    yes_label: Schema.Attribute.String;
  };
}

export interface ApiEligibilityCreditLoanEligibilityCreditLoan
  extends Struct.SingleTypeSchema {
  collectionName: 'eligibility_credit_loans';
  info: {
    displayName: 'Eligibility - Credit/Loan';
    pluralName: 'eligibility-credit-loans';
    singularName: 'eligibility-credit-loan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    auto_loan_label: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    credit_builder_label: Schema.Attribute.String;
    credit_card_label: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eligibility-credit-loan.eligibility-credit-loan'
    > &
      Schema.Attribute.Private;
    mortgage_label: Schema.Attribute.String;
    no_label: Schema.Attribute.String;
    personal_loan_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    specify_credit_loan_label: Schema.Attribute.String;
    student_loan_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    yes_label: Schema.Attribute.String;
  };
}

export interface ApiEligibilityNoBankAccountEligibilityNoBankAccount
  extends Struct.SingleTypeSchema {
  collectionName: 'eligibility_no_bank_accounts';
  info: {
    displayName: 'Eligibility - No Bank Account';
    pluralName: 'eligibility-no-bank-accounts';
    singularName: 'eligibility-no-bank-account';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eligibility-no-bank-account.eligibility-no-bank-account'
    > &
      Schema.Attribute.Private;
    next_button_text: Schema.Attribute.String;
    open_account_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    subheader: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEligibilityOverviewEligibilityOverview
  extends Struct.SingleTypeSchema {
  collectionName: 'eligibility_overviews';
  info: {
    displayName: 'Eligibility - Overview';
    pluralName: 'eligibility-overviews';
    singularName: 'eligibility-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eligibility-overview.eligibility-overview'
    > &
      Schema.Attribute.Private;
    next_button_text: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resume_link_text: Schema.Attribute.String;
    started_application_text: Schema.Attribute.String;
    subheader: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEligibilityResidencyStatusEligibilityResidencyStatus
  extends Struct.SingleTypeSchema {
  collectionName: 'eligibility_residency_statuses';
  info: {
    displayName: 'Eligibility - Residency Status';
    pluralName: 'eligibility-residency-statuses';
    singularName: 'eligibility-residency-status';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    green_card_label: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eligibility-residency-status.eligibility-residency-status'
    > &
      Schema.Attribute.Private;
    opt_label: Schema.Attribute.String;
    other_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    us_citizen_label: Schema.Attribute.String;
    visa_label: Schema.Attribute.String;
  };
}

export interface ApiEligibilityVisaTypeEligibilityVisaType
  extends Struct.SingleTypeSchema {
  collectionName: 'eligibility_visa_types';
  info: {
    displayName: 'Eligibility - Visa Type';
    pluralName: 'eligibility-visa-types';
    singularName: 'eligibility-visa-type';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    e1_label: Schema.Attribute.String;
    e2_label: Schema.Attribute.String;
    e3_label: Schema.Attribute.String;
    f1_not_graduated_label: Schema.Attribute.String;
    f1_opt_label: Schema.Attribute.String;
    f1_opt_stem_label: Schema.Attribute.String;
    g1_label: Schema.Attribute.String;
    h1b_label: Schema.Attribute.String;
    h1b_renewed_label: Schema.Attribute.String;
    header: Schema.Attribute.String;
    j1_label: Schema.Attribute.String;
    l1_label: Schema.Attribute.String;
    l2_label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eligibility-visa-type.eligibility-visa-type'
    > &
      Schema.Attribute.Private;
    o1_label: Schema.Attribute.String;
    other_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    tn_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEligibilityWorkAuthEligibilityWorkAuth
  extends Struct.SingleTypeSchema {
  collectionName: 'eligibility_work_auths';
  info: {
    displayName: 'Eligibility - Work Auth';
    pluralName: 'eligibility-work-auths';
    singularName: 'eligibility-work-auth';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::eligibility-work-auth.eligibility-work-auth'
    > &
      Schema.Attribute.Private;
    no_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    yes_label: Schema.Attribute.String;
  };
}

export interface ApiGlobalGlobal extends Struct.SingleTypeSchema {
  collectionName: 'globals';
  info: {
    description: 'Define global settings';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global.global'
    > &
      Schema.Attribute.Private;
    phone_number: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIncomeAdditionalIncomeIncomeAdditionalIncome
  extends Struct.SingleTypeSchema {
  collectionName: 'income_additional_incomes';
  info: {
    displayName: 'Income - Additional Income';
    pluralName: 'income-additional-incomes';
    singularName: 'income-additional-income';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    amount_label: Schema.Attribute.String;
    child_support_label: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    frequency_label: Schema.Attribute.String;
    header: Schema.Attribute.String;
    investment_income_label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::income-additional-income.income-additional-income'
    > &
      Schema.Attribute.Private;
    no_additional_income_label: Schema.Attribute.String;
    other_label: Schema.Attribute.String;
    pension_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIncomeAssetsOrInvestmentIncomeAssetsOrInvestment
  extends Struct.SingleTypeSchema {
  collectionName: 'income_assets_or_investments';
  info: {
    description: '';
    displayName: 'Income - Assets or Investments';
    pluralName: 'income-assets-or-investments';
    singularName: 'income-assets-or-investment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cash_label: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    estimated_value_label: Schema.Attribute.String;
    header: Schema.Attribute.String;
    investments_label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::income-assets-or-investment.income-assets-or-investment'
    > &
      Schema.Attribute.Private;
    no_answer_label: Schema.Attribute.String;
    no_assets_investments_label: Schema.Attribute.String;
    other_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    real_estate_label: Schema.Attribute.String;
    savings_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIncomeEmploymentDetailIncomeEmploymentDetail
  extends Struct.SingleTypeSchema {
  collectionName: 'income_employment_details';
  info: {
    description: '';
    displayName: 'Income - Employment Details';
    pluralName: 'income-employment-details';
    singularName: 'income-employment-detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company_name_label: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    employed_header: Schema.Attribute.String;
    full_time_label: Schema.Attribute.String;
    gross_annual_income_label: Schema.Attribute.String;
    job_title_label: Schema.Attribute.String;
    job_type_label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::income-employment-detail.income-employment-detail'
    > &
      Schema.Attribute.Private;
    part_time_label: Schema.Attribute.String;
    previous_employer_header: Schema.Attribute.String;
    previous_employer_no_label: Schema.Attribute.String;
    previous_employer_subheader: Schema.Attribute.String;
    previous_employer_yes_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seasonal_label: Schema.Attribute.String;
    secondary_employment_details_header: Schema.Attribute.String;
    secondary_employment_header: Schema.Attribute.String;
    secondary_employment_no_label: Schema.Attribute.String;
    secondary_employment_yes_label: Schema.Attribute.String;
    self_employed_business_type_label: Schema.Attribute.String;
    self_employed_header: Schema.Attribute.String;
    self_employed_label: Schema.Attribute.String;
    self_employed_payment_type_label: Schema.Attribute.String;
    start_date_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIncomeEmploymentStatusIncomeEmploymentStatus
  extends Struct.SingleTypeSchema {
  collectionName: 'income_employment_statuses';
  info: {
    displayName: 'Income - Employment Status';
    pluralName: 'income-employment-statuses';
    singularName: 'income-employment-status';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    employed_label: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::income-employment-status.income-employment-status'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    self_employed_label: Schema.Attribute.String;
    unemployed_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIncomeOverviewIncomeOverview
  extends Struct.SingleTypeSchema {
  collectionName: 'income_overviews';
  info: {
    displayName: 'Income - Overview';
    pluralName: 'income-overviews';
    singularName: 'income-overview';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::income-overview.income-overview'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subheader: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageAboutUsPageAboutUs extends Struct.SingleTypeSchema {
  collectionName: 'page_about_uses';
  info: {
    description: '';
    displayName: 'Page - About Us';
    pluralName: 'page-about-uses';
    singularName: 'page-about-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    card_one: Schema.Attribute.Component<'shared.metric-card', false>;
    card_two: Schema.Attribute.Component<'shared.metric-card', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-about-us.page-about-us'
    > &
      Schema.Attribute.Private;
    our_commitment: Schema.Attribute.Component<'shared.section', false>;
    publishedAt: Schema.Attribute.DateTime;
    solution: Schema.Attribute.Component<'shared.section', false>;
    solution_card_header: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageBlogListPageBlogList extends Struct.SingleTypeSchema {
  collectionName: 'page_blog_lists';
  info: {
    displayName: 'Page - Blog List';
    pluralName: 'page-blog-lists';
    singularName: 'page-blog-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-blog-list.page-blog-list'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageCreditCardPageCreditCard
  extends Struct.SingleTypeSchema {
  collectionName: 'page_credit_cards';
  info: {
    displayName: 'Page - Credit Card';
    pluralName: 'page-credit-cards';
    singularName: 'page-credit-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    email_placeholder: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-credit-card.page-credit-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sign_up_cta_text: Schema.Attribute.String;
    sign_up_subtext: Schema.Attribute.String;
    sign_up_text: Schema.Attribute.String;
    stinger_text: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageEligibilityPageEligibility
  extends Struct.SingleTypeSchema {
  collectionName: 'page_eligibilities';
  info: {
    description: '';
    displayName: 'Page - Eligibility';
    pluralName: 'page-eligibilities';
    singularName: 'page-eligibility';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    check_description: Schema.Attribute.String;
    check_header: Schema.Attribute.String;
    check_section: Schema.Attribute.Component<
      'shared.eligibility-section',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_cta_text: Schema.Attribute.String;
    hero_description: Schema.Attribute.String;
    hero_header: Schema.Attribute.String;
    hero_subtext: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-eligibility.page-eligibility'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    qualify_cta_text: Schema.Attribute.String;
    qualify_description: Schema.Attribute.String;
    qualify_header: Schema.Attribute.String;
    qualify_subtext: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageFaqPageFaq extends Struct.SingleTypeSchema {
  collectionName: 'page_faqs';
  info: {
    displayName: 'Page - FAQ';
    pluralName: 'page-faqs';
    singularName: 'page-faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-faq.page-faq'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageHomePageHome extends Struct.SingleTypeSchema {
  collectionName: 'page_homes';
  info: {
    description: '';
    displayName: 'Page - Home';
    pluralName: 'page-homes';
    singularName: 'page-home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    credit_confidence: Schema.Attribute.Component<'shared.section', false>;
    flexible_loan: Schema.Attribute.Component<'shared.section', false>;
    hero: Schema.Attribute.Component<'shared.hero', false>;
    hero_feature_cards: Schema.Attribute.Component<'shared.feature-card', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-home.page-home'
    > &
      Schema.Attribute.Private;
    no_credit: Schema.Attribute.Component<'shared.section', false>;
    pay_early: Schema.Attribute.Component<'shared.section', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageHowItWorksPageHowItWorks
  extends Struct.SingleTypeSchema {
  collectionName: 'page_how_it_workses';
  info: {
    description: '';
    displayName: 'Page - How it Works';
    pluralName: 'page-how-it-workses';
    singularName: 'page-how-it-works';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    apply_bullet: Schema.Attribute.Component<'shared.benefits-list', true>;
    apply_cta_text: Schema.Attribute.String;
    apply_description: Schema.Attribute.String;
    apply_header: Schema.Attribute.String;
    apply_list_header: Schema.Attribute.String;
    apply_overview_1: Schema.Attribute.String;
    apply_overview_2: Schema.Attribute.String;
    apply_overview_3: Schema.Attribute.String;
    apply_subtext: Schema.Attribute.String;
    comparison_table_header: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    credit_confidence: Schema.Attribute.Component<'shared.section', false>;
    hero_card_description: Schema.Attribute.String;
    hero_card_header: Schema.Attribute.String;
    hero_cta_text: Schema.Attribute.String;
    hero_description: Schema.Attribute.String;
    hero_header: Schema.Attribute.String;
    hero_subtext: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-how-it-works.page-how-it-works'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    step_1: Schema.Attribute.Component<'shared.how-it-works-step', false>;
    step_2: Schema.Attribute.Component<'shared.how-it-works-step', false>;
    step_3: Schema.Attribute.Component<'shared.how-it-works-step', false>;
    steps_cta_text: Schema.Attribute.String;
    steps_description: Schema.Attribute.String;
    steps_header: Schema.Attribute.String;
    steps_subtext: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPagePrivacyPolicyPagePrivacyPolicy
  extends Struct.SingleTypeSchema {
  collectionName: 'page_privacy_policies';
  info: {
    displayName: 'Page - Privacy Policy';
    pluralName: 'page-privacy-policies';
    singularName: 'page-privacy-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-privacy-policy.page-privacy-policy'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageResourcesPageResources extends Struct.SingleTypeSchema {
  collectionName: 'page_resourceses';
  info: {
    description: '';
    displayName: 'Page - Resources';
    pluralName: 'page-resourceses';
    singularName: 'page-resources';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_description: Schema.Attribute.String;
    hero_header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-resources.page-resources'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    resource_card_1: Schema.Attribute.Component<'shared.resource-card', false>;
    resource_card_2: Schema.Attribute.Component<'shared.resource-card', false>;
    resource_card_3: Schema.Attribute.Component<'shared.resource-card', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageTermsOfUsePageTermsOfUse
  extends Struct.SingleTypeSchema {
  collectionName: 'page_terms_of_uses';
  info: {
    displayName: 'Page - Terms of Use';
    pluralName: 'page-terms-of-uses';
    singularName: 'page-terms-of-use';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-terms-of-use.page-terms-of-use'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSectionCompareToCcSectionCompareToCc
  extends Struct.SingleTypeSchema {
  collectionName: 'section_compare_to_ccs';
  info: {
    description: '';
    displayName: 'Section - Compare to CC';
    pluralName: 'section-compare-to-ccs';
    singularName: 'section-compare-to-cc';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::section-compare-to-cc.section-compare-to-cc'
    > &
      Schema.Attribute.Private;
    primary_button_subtext: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    subheader: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSectionEstimatePaymentSectionEstimatePayment
  extends Struct.SingleTypeSchema {
  collectionName: 'section_estimate_payments';
  info: {
    description: '';
    displayName: 'Section - Estimate Payment';
    pluralName: 'section-estimate-payments';
    singularName: 'section-estimate-payment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::section-estimate-payment.section-estimate-payment'
    > &
      Schema.Attribute.Private;
    primary_button_subtext: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    subheader: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSectionFaqSectionFaq extends Struct.SingleTypeSchema {
  collectionName: 'section_faqs';
  info: {
    description: '';
    displayName: 'Section - FAQ';
    pluralName: 'section-faqs';
    singularName: 'section-faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contact_button_text: Schema.Attribute.String;
    contact_email: Schema.Attribute.Email;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq_button_text: Schema.Attribute.String;
    faq_entry: Schema.Attribute.Component<'shared.faq-entry', true>;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::section-faq.section-faq'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subheader: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSectionFooterSectionFooter extends Struct.SingleTypeSchema {
  collectionName: 'section_footers';
  info: {
    description: '';
    displayName: 'Section - Footer';
    pluralName: 'section-footers';
    singularName: 'section-footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    facebook_url: Schema.Attribute.String;
    instagram_url: Schema.Attribute.String;
    legal_text: Schema.Attribute.Blocks;
    link_group_1: Schema.Attribute.Component<'shared.footer-link-group', false>;
    link_group_2: Schema.Attribute.Component<'shared.footer-link-group', false>;
    link_group_3: Schema.Attribute.Component<'shared.footer-link-group', false>;
    linkedin_url: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::section-footer.section-footer'
    > &
      Schema.Attribute.Private;
    privacy_policy_label: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    terms_of_use_label: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    x_url: Schema.Attribute.String;
  };
}

export interface ApiSectionGetStartedSectionGetStarted
  extends Struct.SingleTypeSchema {
  collectionName: 'section_get_starteds';
  info: {
    displayName: 'Section - Get Started';
    pluralName: 'section-get-starteds';
    singularName: 'section-get-started';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    check_rate_text: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    disclaimer_text: Schema.Attribute.String;
    eligibility_button_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::section-get-started.section-get-started'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subheading: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSectionLoanStepSectionLoanStep
  extends Struct.SingleTypeSchema {
  collectionName: 'section_loan_steps';
  info: {
    description: '';
    displayName: 'Section - Loan Step';
    pluralName: 'section-loan-steps';
    singularName: 'section-loan-step';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    learn_more_link_text: Schema.Attribute.String;
    learn_more_text: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::section-loan-step.section-loan-step'
    > &
      Schema.Attribute.Private;
    primary_button_subtext: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    step_one_text: Schema.Attribute.String;
    step_three_text: Schema.Attribute.String;
    step_two_text: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-you-address.about-you-address': ApiAboutYouAddressAboutYouAddress;
      'api::about-you-bankruptcy.about-you-bankruptcy': ApiAboutYouBankruptcyAboutYouBankruptcy;
      'api::about-you-dependent.about-you-dependent': ApiAboutYouDependentAboutYouDependent;
      'api::about-you-otp.about-you-otp': ApiAboutYouOtpAboutYouOtp;
      'api::about-you-overview.about-you-overview': ApiAboutYouOverviewAboutYouOverview;
      'api::about-you-phone.about-you-phone': ApiAboutYouPhoneAboutYouPhone;
      'api::about-you-residency.about-you-residency': ApiAboutYouResidencyAboutYouResidency;
      'api::about-you-ssn.about-you-ssn': ApiAboutYouSsnAboutYouSsn;
      'api::application-global.application-global': ApiApplicationGlobalApplicationGlobal;
      'api::article.article': ApiArticleArticle;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::eligibility-about-you.eligibility-about-you': ApiEligibilityAboutYouEligibilityAboutYou;
      'api::eligibility-bank-account.eligibility-bank-account': ApiEligibilityBankAccountEligibilityBankAccount;
      'api::eligibility-credit-loan.eligibility-credit-loan': ApiEligibilityCreditLoanEligibilityCreditLoan;
      'api::eligibility-no-bank-account.eligibility-no-bank-account': ApiEligibilityNoBankAccountEligibilityNoBankAccount;
      'api::eligibility-overview.eligibility-overview': ApiEligibilityOverviewEligibilityOverview;
      'api::eligibility-residency-status.eligibility-residency-status': ApiEligibilityResidencyStatusEligibilityResidencyStatus;
      'api::eligibility-visa-type.eligibility-visa-type': ApiEligibilityVisaTypeEligibilityVisaType;
      'api::eligibility-work-auth.eligibility-work-auth': ApiEligibilityWorkAuthEligibilityWorkAuth;
      'api::global.global': ApiGlobalGlobal;
      'api::income-additional-income.income-additional-income': ApiIncomeAdditionalIncomeIncomeAdditionalIncome;
      'api::income-assets-or-investment.income-assets-or-investment': ApiIncomeAssetsOrInvestmentIncomeAssetsOrInvestment;
      'api::income-employment-detail.income-employment-detail': ApiIncomeEmploymentDetailIncomeEmploymentDetail;
      'api::income-employment-status.income-employment-status': ApiIncomeEmploymentStatusIncomeEmploymentStatus;
      'api::income-overview.income-overview': ApiIncomeOverviewIncomeOverview;
      'api::page-about-us.page-about-us': ApiPageAboutUsPageAboutUs;
      'api::page-blog-list.page-blog-list': ApiPageBlogListPageBlogList;
      'api::page-credit-card.page-credit-card': ApiPageCreditCardPageCreditCard;
      'api::page-eligibility.page-eligibility': ApiPageEligibilityPageEligibility;
      'api::page-faq.page-faq': ApiPageFaqPageFaq;
      'api::page-home.page-home': ApiPageHomePageHome;
      'api::page-how-it-works.page-how-it-works': ApiPageHowItWorksPageHowItWorks;
      'api::page-privacy-policy.page-privacy-policy': ApiPagePrivacyPolicyPagePrivacyPolicy;
      'api::page-resources.page-resources': ApiPageResourcesPageResources;
      'api::page-terms-of-use.page-terms-of-use': ApiPageTermsOfUsePageTermsOfUse;
      'api::section-compare-to-cc.section-compare-to-cc': ApiSectionCompareToCcSectionCompareToCc;
      'api::section-estimate-payment.section-estimate-payment': ApiSectionEstimatePaymentSectionEstimatePayment;
      'api::section-faq.section-faq': ApiSectionFaqSectionFaq;
      'api::section-footer.section-footer': ApiSectionFooterSectionFooter;
      'api::section-get-started.section-get-started': ApiSectionGetStartedSectionGetStarted;
      'api::section-loan-step.section-loan-step': ApiSectionLoanStepSectionLoanStep;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
