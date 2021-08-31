cordova.define("cordova-plugin-firebase-crashlytics.FirebaseCrashlytics", function(require, exports, module) { 
  var exec = require('cordova/exec');
  
    var PLUGIN_NAME = 'FirebaseCrashlytics';
  
    var Crashlytics = function() {
    };
  
    Crashlytics.initialise = function(hasConsent) {
      return new Promise(function (resolve, reject) {
        exec(resolve, reject, PLUGIN_NAME, 'initialise', [hasConsent]);
      })
    };
  
    Crashlytics.crash = function() {
      exec(null, null, PLUGIN_NAME, 'crash', []);
    };
  
    Crashlytics.logPriority = function(priority, tag, message) {
      exec(null, null, PLUGIN_NAME, 'logPriority', [priority, tag, message]);
    };
  
    Crashlytics.log = function(message) {
      exec(null, null, PLUGIN_NAME, 'log', [message]);
    };
  
    Crashlytics.logException = function(message) {
      exec(null, null, PLUGIN_NAME, 'logException', [message]);
    };
  
    Crashlytics.setString = function(key, value) {
      exec(null, null, PLUGIN_NAME, 'setString', [key, value]);
    };
  
    Crashlytics.setBool = function(key, value) {
      exec(null, null, PLUGIN_NAME, 'setBool', [key, value]);
    };
  
    Crashlytics.setDouble = function(key, value) {
      exec(null, null, PLUGIN_NAME, 'setDouble', [key, value]);
    };
  
    Crashlytics.setFloat = function(key, value) {
      exec(null, null, PLUGIN_NAME, 'setFloat', [key, value]);
    };
  
    Crashlytics.setInt = function(key, value) {
      exec(null, null, PLUGIN_NAME, 'setInt', [key, value]);
    };
  
    Crashlytics.setUserIdentifier = function(identifier) {
      exec(null, null, PLUGIN_NAME, 'setUserIdentifier', [identifier]);
    };
  
    Crashlytics.logError = function(message, stackTrace) {
      exec(null, null, PLUGIN_NAME, 'logError', [message, stackTrace]);
    };
  
  
    // Log levels
    // See https://developer.android.com/reference/android/util/Log
    Crashlytics.LOG = {
      VERBOSE: 2,
      DEBUG: 3,
      INFO: 4,
      WARN: 5,
      ERROR: 6
    }
  
    module.exports = Crashlytics;
  });
  