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
 * SQL stored procedure parameter.
 *
 */
class StoredProcedureParameter {
  /**
   * Create a StoredProcedureParameter.
   * @member {object} value Stored procedure parameter value. Type: string (or
   * Expression with resultType string).
   * @member {string} [type] Stored procedure parameter type. Possible values
   * include: 'String', 'Int', 'Decimal', 'Guid', 'Boolean', 'Date'
   */
  constructor() {
  }

  /**
   * Defines the metadata of StoredProcedureParameter
   *
   * @returns {object} metadata of StoredProcedureParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StoredProcedureParameter',
      type: {
        name: 'Composite',
        className: 'StoredProcedureParameter',
        modelProperties: {
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Object'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StoredProcedureParameter;