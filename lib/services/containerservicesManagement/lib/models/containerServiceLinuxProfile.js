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
 * Profile for Linux VMs in the container service cluster.
 *
 */
class ContainerServiceLinuxProfile {
  /**
   * Create a ContainerServiceLinuxProfile.
   * @member {string} adminUsername The administrator username to use for Linux
   * VMs.
   * @member {object} ssh SSH configuration for Linux-based VMs running on
   * Azure.
   * @member {array} [ssh.publicKeys] The list of SSH public keys used to
   * authenticate with Linux-based VMs. Only expect one key specified.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContainerServiceLinuxProfile
   *
   * @returns {object} metadata of ContainerServiceLinuxProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerServiceLinuxProfile',
      type: {
        name: 'Composite',
        className: 'ContainerServiceLinuxProfile',
        modelProperties: {
          adminUsername: {
            required: true,
            serializedName: 'adminUsername',
            constraints: {
              Pattern: '^[a-z][a-z0-9_-]*$'
            },
            type: {
              name: 'String'
            }
          },
          ssh: {
            required: true,
            serializedName: 'ssh',
            type: {
              name: 'Composite',
              className: 'ContainerServiceSshConfiguration'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerServiceLinuxProfile;