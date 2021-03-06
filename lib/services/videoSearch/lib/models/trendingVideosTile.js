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
 * Class representing a TrendingVideosTile.
 */
class TrendingVideosTile {
  /**
   * Create a TrendingVideosTile.
   * @member {object} query
   * @member {string} [query.text] The query string. Use this string as the
   * query term in a new search request.
   * @member {string} [query.displayText] The display version of the query
   * term. This version of the query term may contain special characters that
   * highlight the search term found in the query string. The string contains
   * the highlighting characters only if the query enabled hit highlighting
   * @member {string} [query.webSearchUrl] The URL that takes the user to the
   * Bing search results page for the query.Only related search results include
   * this field.
   * @member {string} [query.searchLink]
   * @member {object} [query.thumbnail]
   * @member {object} [query.thumbnail.thumbnail] The URL to a thumbnail of the
   * image
   * @member {object} image
   * @member {object} [image.thumbnail] The URL to a thumbnail of the image
   */
  constructor() {
  }

  /**
   * Defines the metadata of TrendingVideosTile
   *
   * @returns {object} metadata of TrendingVideosTile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TrendingVideos/Tile',
      type: {
        name: 'Composite',
        className: 'TrendingVideosTile',
        modelProperties: {
          query: {
            required: true,
            serializedName: 'query',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'Query'
            }
          },
          image: {
            required: true,
            serializedName: 'image',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'ImageObject'
            }
          }
        }
      }
    };
  }
}

module.exports = TrendingVideosTile;
