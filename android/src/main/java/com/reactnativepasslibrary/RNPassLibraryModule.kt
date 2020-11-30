package com.reactnativepasslibrary

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class RNPassLibraryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "RNPassLibrary"
    }

    @ReactMethod
    fun getRemotePKPassAndPresentPKPassView(urlString: String, promise: Promise) {
        promise.reject(Exception("This library is not supported on Android!"))
    }

}
