/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Premier add-on.
 *
 * @extends models['Resource']
 */
class PremierAddOn extends models['Resource'] {
  /**
   * Create a PremierAddOn.
   * @member {string} [sku] Premier add on SKU.
   * @member {string} [product] Premier add on Product.
   * @member {string} [vendor] Premier add on Vendor.
   * @member {string} [premierAddOnName] Premier add on Name.
   * @member {string} [premierAddOnLocation] Premier add on Location.
   * @member {object} [premierAddOnTags] Premier add on Tags.
   * @member {string} [marketplacePublisher] Premier add on Marketplace
   * publisher.
   * @member {string} [marketplaceOffer] Premier add on Marketplace offer.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PremierAddOn
   *
   * @returns {object} metadata of PremierAddOn
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PremierAddOn',
      type: {
        name: 'Composite',
        className: 'PremierAddOn',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sku: {
            required: false,
            serializedName: 'properties.sku',
            type: {
              name: 'String'
            }
          },
          product: {
            required: false,
            serializedName: 'properties.product',
            type: {
              name: 'String'
            }
          },
          vendor: {
            required: false,
            serializedName: 'properties.vendor',
            type: {
              name: 'String'
            }
          },
          premierAddOnName: {
            required: false,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          premierAddOnLocation: {
            required: false,
            serializedName: 'properties.location',
            type: {
              name: 'String'
            }
          },
          premierAddOnTags: {
            required: false,
            serializedName: 'properties.tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          marketplacePublisher: {
            required: false,
            serializedName: 'properties.marketplacePublisher',
            type: {
              name: 'String'
            }
          },
          marketplaceOffer: {
            required: false,
            serializedName: 'properties.marketplaceOffer',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PremierAddOn;
