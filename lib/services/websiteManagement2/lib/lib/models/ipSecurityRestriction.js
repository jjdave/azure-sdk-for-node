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
 * IP security restriction on an app.
 *
 */
class IpSecurityRestriction {
  /**
   * Create a IpSecurityRestriction.
   * @member {string} ipAddress IP address the security restriction is valid
   * for.
   * @member {string} [subnetMask] Subnet mask for the range of IP addresses
   * the restriction is valid for.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IpSecurityRestriction
   *
   * @returns {object} metadata of IpSecurityRestriction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IpSecurityRestriction',
      type: {
        name: 'Composite',
        className: 'IpSecurityRestriction',
        modelProperties: {
          ipAddress: {
            required: true,
            serializedName: 'ipAddress',
            type: {
              name: 'String'
            }
          },
          subnetMask: {
            required: false,
            serializedName: 'subnetMask',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IpSecurityRestriction;