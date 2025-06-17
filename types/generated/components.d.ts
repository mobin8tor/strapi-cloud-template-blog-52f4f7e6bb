import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBenefitsList extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits_lists';
  info: {
    description: '';
    displayName: 'Benefit';
  };
  attributes: {
    subtext: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedEligibilityBullet extends Struct.ComponentSchema {
  collectionName: 'components_shared_eligibility_bullets';
  info: {
    description: '';
    displayName: 'Eligibility Bullet';
  };
  attributes: {
    negative: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sub_bullet: Schema.Attribute.Component<
      'shared.eligibility-sub-bullet',
      true
    >;
    subtext: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedEligibilitySection extends Struct.ComponentSchema {
  collectionName: 'components_shared_eligibility_sections';
  info: {
    description: '';
    displayName: 'Eligibility Section';
  };
  attributes: {
    bullet: Schema.Attribute.Component<'shared.eligibility-bullet', true>;
    header: Schema.Attribute.String;
    header_icon: Schema.Attribute.String;
  };
}

export interface SharedEligibilitySubBullet extends Struct.ComponentSchema {
  collectionName: 'components_shared_eligibility_sub_bullets';
  info: {
    displayName: 'Eligibility Sub Bullet';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedExternalLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_external_links';
  info: {
    displayName: 'External Link';
  };
  attributes: {
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface SharedFaqEntry extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_entries';
  info: {
    displayName: 'FAQ Entry';
    icon: 'information';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    displayName: 'Feature card';
  };
  attributes: {
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
  };
}

export interface SharedFooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_link_groups';
  info: {
    description: '';
    displayName: 'Footer Link Group';
  };
  attributes: {
    header: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    callout_header: Schema.Attribute.String;
    callout_text: Schema.Attribute.String;
    description_one: Schema.Attribute.String;
    description_two: Schema.Attribute.String;
    header: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    subheader: Schema.Attribute.String;
  };
}

export interface SharedHowItWorksStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_it_works_steps';
  info: {
    displayName: 'How it Works Step';
  };
  attributes: {
    step_description: Schema.Attribute.String;
    step_header: Schema.Attribute.String;
    step_title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'globe';
  };
  attributes: {
    internal_url: Schema.Attribute.Enumeration<
      [
        'home',
        'about-us',
        'eligibility',
        'credit-cards',
        'how-it-works',
        'resources',
        'faq',
        'contact-us',
        'application',
        'privacy-policy',
        'terms-of-use',
        'legal',
        'blog',
        'accessibility',
      ]
    >;
    Text: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMetricCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_metric_cards';
  info: {
    displayName: 'Metric Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
    metric: Schema.Attribute.String;
  };
}

export interface SharedRepeatableText extends Struct.ComponentSchema {
  collectionName: 'components_shared_repeatable_texts';
  info: {
    displayName: 'Repeatable Text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedResourceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_resource_cards';
  info: {
    displayName: 'Resource Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.external-link', false>;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    description: '';
    displayName: 'Benefits Section';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.benefits-list', true>;
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
    primary_button_text: Schema.Attribute.String;
    subheader: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.benefits-list': SharedBenefitsList;
      'shared.eligibility-bullet': SharedEligibilityBullet;
      'shared.eligibility-section': SharedEligibilitySection;
      'shared.eligibility-sub-bullet': SharedEligibilitySubBullet;
      'shared.external-link': SharedExternalLink;
      'shared.faq-entry': SharedFaqEntry;
      'shared.feature-card': SharedFeatureCard;
      'shared.footer-link-group': SharedFooterLinkGroup;
      'shared.hero': SharedHero;
      'shared.how-it-works-step': SharedHowItWorksStep;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.metric-card': SharedMetricCard;
      'shared.repeatable-text': SharedRepeatableText;
      'shared.resource-card': SharedResourceCard;
      'shared.section': SharedSection;
    }
  }
}
