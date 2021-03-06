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
 * A ServiceDescription contains all of the information necessary to create a
 * service.
 *
 */
class ServiceDescription {
  /**
   * Create a ServiceDescription.
   * @member {string} [applicationName]
   * @member {string} serviceName
   * @member {string} serviceTypeName
   * @member {array} [initializationData]
   * @member {object} partitionDescription
   * @member {string} [partitionDescription.partitionScheme] Polymorphic
   * Discriminator
   * @member {string} [placementConstraints] The placement constraints as a
   * string. Placement constraints are boolean expressions on node properties
   * and allow for restricting a service to particular nodes based on the
   * service requirements. For example, to place a service on nodes where
   * NodeType is blue specify the following: "NodeColor == blue)".
   * @member {array} [correlationScheme]
   * @member {array} [serviceLoadMetrics]
   * @member {array} [servicePlacementPolicies]
   * @member {string} [defaultMoveCost] Possible values include: 'Zero', 'Low',
   * 'Medium', 'High'
   * @member {boolean} [isDefaultMoveCostSpecified] Indicates if the
   * DefaultMoveCost property is specified.
   * @member {string} [servicePackageActivationMode] Possible values include:
   * 'SharedProcess', 'ExclusiveProcess'
   * @member {string} [serviceDnsName] The DNS name of the service. It requires
   * the DNS system service to be enabled in Service Fabric cluster.
   * @member {string} serviceKind Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceDescription
   *
   * @returns {object} metadata of ServiceDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceDescription',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'ServiceKind',
          clientName: 'serviceKind'
        },
        uberParent: 'ServiceDescription',
        className: 'ServiceDescription',
        modelProperties: {
          applicationName: {
            required: false,
            serializedName: 'ApplicationName',
            type: {
              name: 'String'
            }
          },
          serviceName: {
            required: true,
            serializedName: 'ServiceName',
            type: {
              name: 'String'
            }
          },
          serviceTypeName: {
            required: true,
            serializedName: 'ServiceTypeName',
            type: {
              name: 'String'
            }
          },
          initializationData: {
            required: false,
            serializedName: 'InitializationData',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          partitionDescription: {
            required: true,
            serializedName: 'PartitionDescription',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'PartitionScheme',
                clientName: 'partitionScheme'
              },
              uberParent: 'PartitionSchemeDescription',
              className: 'PartitionSchemeDescription'
            }
          },
          placementConstraints: {
            required: false,
            serializedName: 'PlacementConstraints',
            type: {
              name: 'String'
            }
          },
          correlationScheme: {
            required: false,
            serializedName: 'CorrelationScheme',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceCorrelationDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceCorrelationDescription'
                  }
              }
            }
          },
          serviceLoadMetrics: {
            required: false,
            serializedName: 'ServiceLoadMetrics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceLoadMetricDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceLoadMetricDescription'
                  }
              }
            }
          },
          servicePlacementPolicies: {
            required: false,
            serializedName: 'ServicePlacementPolicies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServicePlacementPolicyDescriptionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'Type',
                      clientName: 'type'
                    },
                    uberParent: 'ServicePlacementPolicyDescription',
                    className: 'ServicePlacementPolicyDescription'
                  }
              }
            }
          },
          defaultMoveCost: {
            required: false,
            serializedName: 'DefaultMoveCost',
            type: {
              name: 'String'
            }
          },
          isDefaultMoveCostSpecified: {
            required: false,
            serializedName: 'IsDefaultMoveCostSpecified',
            type: {
              name: 'Boolean'
            }
          },
          servicePackageActivationMode: {
            required: false,
            serializedName: 'ServicePackageActivationMode',
            type: {
              name: 'String'
            }
          },
          serviceDnsName: {
            required: false,
            serializedName: 'ServiceDnsName',
            type: {
              name: 'String'
            }
          },
          serviceKind: {
            required: true,
            serializedName: 'ServiceKind',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceDescription;
