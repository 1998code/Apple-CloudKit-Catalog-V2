# The CloudKit Catalog Web App V2

Demo: https://cloudkitjs.vercel.app

Tutorial: https://medium.com/@1998design/how-to-use-apple-cloudkit-js-v2-for-web-ce753258cc95

![Cover](https://cdn-images-1.medium.com/max/2600/1*ES7GB2vsVS_-b7zHu60OyA.png)

This web app provides executable sample code for the core API methods provided by the CloudKit JS JavaScript library. 
Topics covered:

1. Authenticating users.
2. Retrieving users' discoverable information.
3. Querying records.
4. CRUD operations on zones.
5. CRUD operations on records within zones.
6. Fetching changed records within a zone using CloudKit's syncing capabilities.
7. CRUD operations on subscriptions.
8. Registering for notifications.

## Configuration

*A valid Apple devloper account is required for the CloudKit development.*

Before running the web app, modify the file *js/init.js*. Replace the container identifier with one that you own and insert an
API token generated through CloudKit Dashboard in the appropriate place. The web app assumes the existence of an **Items**
record type with the following fields.

* name : String
* location : Location
* asset : Asset

Create this record type through CloudKit Dashboard if it doesn't already exist.

## Runtime Requirements
 
For best results, use a recent version of Safari or Chrome.

If you are using Safari, remember to enable cross-site tracking.

Copyright (C) 2015-2021 Apple Inc. All rights reserved.
