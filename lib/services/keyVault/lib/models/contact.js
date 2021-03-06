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
 * The contact information for the vault certificates.
 *
 */
class Contact {
  /**
   * Create a Contact.
   * @member {string} [emailAddress] Email addresss.
   * @member {string} [name] Name.
   * @member {string} [phone] Phone number.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Contact
   *
   * @returns {object} metadata of Contact
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Contact',
      type: {
        name: 'Composite',
        className: 'Contact',
        modelProperties: {
          emailAddress: {
            required: false,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          phone: {
            required: false,
            serializedName: 'phone',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Contact;
