/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const Cc = Components.classes;
const Ci = Components.interfaces;
const CC = Components.Constructor;
const Cu = Components.utils;

Cu.import("resource://gre/modules/Services.jsm");

this.EXPORTED_SYMBOLS = ["WebappOSUtils"];

this.WebappOSUtils = {
  launch: function(aData) {
//@line 45 "/Users/mjgp2/gecko-dev/toolkit/webapps/WebappOSUtils.jsm"
    let mwaUtils = Cc["@mozilla.org/widget/mac-web-app-utils;1"]
                    .createInstance(Ci.nsIMacWebAppUtils);
    let appPath;
    try {
      appPath = mwaUtils.pathForAppWithIdentifier(aData.origin);
    } catch (e) {}

    if (appPath) {
      mwaUtils.launchAppWithIdentifier(aData.origin);
      return true;
    }

    return false;
//@line 80 "/Users/mjgp2/gecko-dev/toolkit/webapps/WebappOSUtils.jsm"
  },

  uninstall: function(aData) {
//@line 106 "/Users/mjgp2/gecko-dev/toolkit/webapps/WebappOSUtils.jsm"
  }
}
