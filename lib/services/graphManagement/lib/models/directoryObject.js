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
 * Represents an Azure Active Directory object.
 *
 */
class DirectoryObject {
  /**
   * Create a DirectoryObject.
   * @member {string} [objectId] The object ID.
   * @member {date} [deletionTimestamp] The time at which the directory object
   * was deleted.
   * @member {string} objectType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of DirectoryObject
   *
   * @returns {object} metadata of DirectoryObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DirectoryObject',
      type: {
        name: 'Composite',
        additionalProperties: {
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'ObjectElementType',
                type: {
                  name: 'Object'
                }
            }
          }
        },
        polymorphicDiscriminator: {
          serializedName: 'objectType',
          clientName: 'objectType'
        },
        uberParent: 'DirectoryObject',
        className: 'DirectoryObject',
        modelProperties: {
          objectId: {
            required: false,
            readOnly: true,
            serializedName: 'objectId',
            type: {
              name: 'String'
            }
          },
          deletionTimestamp: {
            required: false,
            readOnly: true,
            serializedName: 'deletionTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          objectType: {
            required: true,
            serializedName: 'objectType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DirectoryObject;