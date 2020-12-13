package com.reactnativepasslibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class RNPassLibraryModule extends ReactContextBaseJavaModule {

	public RNPassLibraryModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNPassLibrary";  // Name of the Native Modules.
    }

    @ReactMethod
    public void getRemotePKPassAndPresentPKPassView(String urlString, Promise promise) {
        promise.reject("LIBRARY_NOT_SUPPORTED", "This library is not supported on Android!");
    }

}
