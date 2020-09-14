/*
Copyright (C) 2016 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
The first use of the CloudKit namespace should be to set the configuration parameters.
*/

/**
 * This function is run immediately after CloudKit has loaded.
 */
CKCatalog.init = function() {
  try {

    // Configure CloudKit for your app.
    CloudKit.configure({
      containers: [{

        // Change this to a container identifier you own.
        containerIdentifier: 'iCloud.io.startway.CloudKitCatalog',

        apiTokenAuth: {
          // And generate a web token through CloudKit Dashboard.
          apiToken: 'e257905ec3989ae3945a8f7152fa2b047817ef516a2c943710744b087134ba38',

          persist: true, // Sets a cookie.
          
          signInButton: {
            id: 'apple-sign-in-button',
            theme: 'black' // Other options: 'white', 'white-with-outline'.
          },
    
          signOutButton: {
            id: 'apple-sign-out-button',
            theme: 'black'
          }
        },

        environment: 'development'
      }]
    });

    var failAuth = function(ckError) {
      var span = document.getElementById('username');
      span.textContent = 'Not Authenticated';

      var error = ckError;
      if(ckError.ckErrorCode === 'AUTHENTICATION_FAILED') {
        error = new Error(
          'Please check that you have a valid container identifier and API token in your configuration.'
        );
      }

      CKCatalog.dialog.showError(error);
    };

    // Try to run the authentication code.
    CKCatalog.tabs['authentication'][0].sampleCode().catch(failAuth);

  } catch (e) {
    CKCatalog.dialog.showError(e);
  }
};
