import PassLibrary
import UIKit

@objc(RNPassLibrary)
public class RNPassLibrary: NSObject {

    private let passLibrary = PassLibrary() // From PassLibrary

    enum RNPassLibraryErrors: Error {
        case notAValidUrl
        case noKeyWindow
    }

    @objc
    public func constantsToExport() -> [AnyHashable: Any]! {
        return ["name": "RNPassLibrary"]
    }

    @objc
    public func getRemotePKPassAndPresentPKPassView(_ urlString: String,
                                                    resolver resolve: @escaping RCTPromiseResolveBlock,
                                                    rejecter reject: @escaping RCTPromiseRejectBlock) {
        guard let pkPassUrl = URL(string: urlString) else {
            let error = RNPassLibraryErrors.notAValidUrl
            reject("error", error.localizedDescription, error)
            return
        }
        self.passLibrary.getRemotePKPass(from: pkPassUrl) { (result: Result<Data, Error>) in
            switch result {
            case .failure(let failure):
                reject("error", failure.localizedDescription, failure)
                return
            case .success(let pkpassData):
                DispatchQueue.main.async {
                    guard let keyWindow = UIApplication.shared.keyWindow else {
                        let error = RNPassLibraryErrors.noKeyWindow
                        reject("error", error.localizedDescription, error)
                        return
                    }
                    do {
                        try self.passLibrary.presentAddPKPassViewController(window: keyWindow, pkpassData: pkpassData)
                        resolve(true)
                        return
                    } catch {
                        reject("error", error.localizedDescription, error)
                        return
                    }
                }
            }
        }
    }

    @objc
    static func requiresMainQueueSetup() -> Bool {
        true
    }

}

extension RNPassLibrary.RNPassLibraryErrors: LocalizedError {
    public var errorDescription: String? {
        switch self {
        case .notAValidUrl:
            return "The url provided is not valid"
        case .noKeyWindow:
            return "Could not find the key window"
        }
    }
}
