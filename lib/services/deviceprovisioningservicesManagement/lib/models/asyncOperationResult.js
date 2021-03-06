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
 * Result of a long running operation.
 *
 */
class AsyncOperationResult {
  /**
   * Create a AsyncOperationResult.
   * @member {string} [status] current status of a long running operation.
   * @member {object} [error] Error message containing code, description and
   * details
   * @member {string} [error.code] standard error code
   * @member {string} [error.message] standard error description
   * @member {string} [error.details] detailed summary of error
   */
  constructor() {
  }

  /**
   * Defines the metadata of AsyncOperationResult
   *
   * @returns {object} metadata of AsyncOperationResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AsyncOperationResult',
      type: {
        name: 'Composite',
        className: 'AsyncOperationResult',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ErrorMesssage'
            }
          }
        }
      }
    };
  }
}

module.exports = AsyncOperationResult;
