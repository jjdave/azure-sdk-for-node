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
 * All possible faces that may qualify.
 *
 */
class IdentifyResultCandidate {
  /**
   * Create a IdentifyResultCandidate.
   * @member {string} personId Id of candidate
   * @member {number} confidence
   */
  constructor() {
  }

  /**
   * Defines the metadata of IdentifyResultCandidate
   *
   * @returns {object} metadata of IdentifyResultCandidate
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IdentifyResultCandidate',
      type: {
        name: 'Composite',
        className: 'IdentifyResultCandidate',
        modelProperties: {
          personId: {
            required: true,
            serializedName: 'personId',
            type: {
              name: 'String'
            }
          },
          confidence: {
            required: true,
            serializedName: 'confidence',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = IdentifyResultCandidate;