/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var fs = require('fs');
var azure = require('../../lib/azure');
var Constants = require('../../lib/util/constants');
var HttpResponseCodes = Constants.HttpConstants.HttpResponseCodes;
var testCommon = require('./testcommon');

if (!fs.existsSync) {
  fs.existsSync = require('path').existsSync;
}

if (fs.existsSync('./testhost.json')) {
  inp = JSON.parse(fs.readFileSync('./testhost.json'));
} else {
  console.log('The file testhost.json was not found.\n' +
              'This is required and must specify the host, the subscription id, and the certificate file locations');
}

inp.hostopt.serializetype = 'XML';
var svcmgmt = azure.createServiceManagementService(inp.subscriptionId, inp.auth, inp.hostopt);

var inputNames = {
  serviceName: 'testjsSvc',
  deploymentName: 'testjsDeploy',
  deploymentSlot: 'Staging',
  roleInst: 'testjsRole_IN_0',
};


if (process.argv.length < 3) {
  console.log('Pass either reboot or reimage on the command line');
  process.exit();
}

var reqid = process.argv[2];


if (reqid.toLowerCase() == 'reboot') {
  svcmgmt.rebootRole(inputNames.serviceName,
                                inputNames.deploymentSlot,
                                inputNames.roleInst,
                                function(error, response) {
    if (error) {
      testCommon.showErrorResponse(error);
    } else {
      if (response && response.isSuccessful) {
        if (response.statusCode == HttpResponseCodes.Ok) {
          console.log('OK');
        } else {
          console.log('Pending');
          console.log('RequestID: ' + response.headers['x-ms-request-id']);
        }
      } else {
        console.log('Unexpected');
      }
    }
  });
} else if (reqid.toLowerCase() == 'reimage') {
  svcmgmt.reimageRole(inputNames.serviceName,
                                inputNames.deploymentSlot,
                                inputNames.roleInst,
                                function(error, response) {
    if (error) {
      testCommon.showErrorResponse(error);
    } else {
      if (response && response.isSuccessful) {
        if (response.statusCode == HttpResponseCodes.Ok) {
          console.log('OK');
        } else {
          console.log('Pending');
          console.log('RequestID: ' + response.headers['x-ms-request-id']);
        }
      } else {
        console.log('Unexpected');
      }
    }
  });
} else {
  console.log('Pass either reboot or reimage on the command line');
  process.exit();
}

