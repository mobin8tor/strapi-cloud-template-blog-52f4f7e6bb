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

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'globe';
  };
  attributes: {
    Text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
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

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
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

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.benefits-list': SharedBenefitsList;
      'shared.faq-entry': SharedFaqEntry;
      'shared.feature-card': SharedFeatureCard;
      'shared.hero': SharedHero;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
