/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * An error response from the Batch AI service.
 *
 */
class CloudError {
  /**
   * Create a CloudError.
   * @member {object} [error] An error response from the Batch AI service.
   * @member {string} [error.code] An identifier for the error. Codes are
   * invariant and are intended to be consumed programmatically.
   * @member {string} [error.message] A message describing the error, intended
   * to be suitable for display in a user interface.
   * @member {string} [error.target] The target of the particular error. For
   * example, the name of the property in error.
   * @member {array} [error.details] A list of additional details about the
   * error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CloudError
   *
   * @returns {object} metadata of CloudError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CloudError',
      type: {
        name: 'Composite',
        className: 'CloudError',
        modelProperties: {
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'CloudErrorBody'
            }
          }
        }
      }
    };
  }
}

module.exports = CloudError;
