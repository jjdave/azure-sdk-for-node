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

/**
 * Properties describing facial hair attributes.
 *
 */
class FacialHairProperties {
  /**
   * Create a FacialHairProperties.
   * @member {number} [moustache]
   * @member {number} [beard]
   * @member {number} [sideburns]
   */
  constructor() {
  }

  /**
   * Defines the metadata of FacialHairProperties
   *
   * @returns {object} metadata of FacialHairProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FacialHairProperties',
      type: {
        name: 'Composite',
        className: 'FacialHairProperties',
        modelProperties: {
          moustache: {
            required: false,
            serializedName: 'moustache',
            constraints: {
              InclusiveMaximum: 1,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          beard: {
            required: false,
            serializedName: 'beard',
            constraints: {
              InclusiveMaximum: 1,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          sideburns: {
            required: false,
            serializedName: 'sideburns',
            constraints: {
              InclusiveMaximum: 1,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = FacialHairProperties;