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
 * Paged Tag list representation.
 */
class TagCollection extends Array {
  /**
   * Create a TagCollection.
   * @member {string} [nextLink] Next page link if any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TagCollection
   *
   * @returns {object} metadata of TagCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TagCollection',
      type: {
        name: 'Composite',
        className: 'TagCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TagContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'TagContract'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TagCollection;