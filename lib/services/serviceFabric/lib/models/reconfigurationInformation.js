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
 * Information about current reconfiguration like phase, type, previous
 * configuration role of replica and reconfiguration start date time.
 *
 */
class ReconfigurationInformation {
  /**
   * Create a ReconfigurationInformation.
   * @member {string} [previousConfigurationRole] Possible values include:
   * 'Unknown', 'None', 'Primary', 'IdleSecondary', 'ActiveSecondary'
   * @member {string} [reconfigurationPhase] Possible values include:
   * 'Unknown', 'None', 'Phase0', 'Phase1', 'Phase2', 'Phase3', 'Phase4',
   * 'AbortPhaseZero'
   * @member {string} [reconfigurationType] Possible values include: 'Unknown',
   * 'SwapPrimary', 'Failover', 'Other'
   * @member {date} [reconfigurationStartTimeUtc] Start time (in UTC) of the
   * ongoing reconfiguration. If no reconfiguration is taking place then this
   * value will be zero date-time.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReconfigurationInformation
   *
   * @returns {object} metadata of ReconfigurationInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReconfigurationInformation',
      type: {
        name: 'Composite',
        className: 'ReconfigurationInformation',
        modelProperties: {
          previousConfigurationRole: {
            required: false,
            serializedName: 'PreviousConfigurationRole',
            type: {
              name: 'String'
            }
          },
          reconfigurationPhase: {
            required: false,
            serializedName: 'ReconfigurationPhase',
            type: {
              name: 'String'
            }
          },
          reconfigurationType: {
            required: false,
            serializedName: 'ReconfigurationType',
            type: {
              name: 'String'
            }
          },
          reconfigurationStartTimeUtc: {
            required: false,
            serializedName: 'ReconfigurationStartTimeUtc',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = ReconfigurationInformation;