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
 * Send only to users who haven't used the app in the last {threshold} days.
 *
 * @extends models['Filter']
 */
class EngageIdleUsersFilter extends models['Filter'] {
  /**
   * Create a EngageIdleUsersFilter.
   * @member {number} [threshold] An integer value representing the threshold
   * to apply on this filter.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EngageIdleUsersFilter
   *
   * @returns {object} metadata of EngageIdleUsersFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'engage-idle-users',
      type: {
        name: 'Composite',
        className: 'EngageIdleUsersFilter',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          threshold: {
            required: false,
            serializedName: 'threshold',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = EngageIdleUsersFilter;