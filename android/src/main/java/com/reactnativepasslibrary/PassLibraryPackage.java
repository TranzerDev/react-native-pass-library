package com.reactnativepasslibrary;

import java.util.Arrays;
import java.util.Collections;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.JavaScriptModule;

public class class RNPassLibraryPackage extends ReactPackage {

    @Override
    public List<NativeModule> ccreateNativeModules(ReactApplicationContext reactContext) {
        // return Arrays.asList<NativeModule>(RNPassLibraryModule(reactContext))
        List<NativeModule> modules = new ArrayList<>();
        // Register the encryption module
        modules.add(new RNPassLibraryModule());
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

}
