import PassLibrary
import UIKit

@objc(RNPassLibrary)
public class RNPassLibrary: NSObject {

    private let passLibrary = PassLibrary() // From PassLibrary

    @objc
    public func constantsToExport() -> [AnyHashable: Any]! {
        return ["name": "RNPassLibrary"]
    }

    @objc
    public func getRemotePKPassAndPresentPKPassView(_ urlString: String,
                                                    resolver resolve: @escaping RCTPromiseResolveBlock,
                                                    rejecter reject: @escaping RCTPromiseRejectBlock) {
        guard let pkPassUrl = URL(string: urlString) else {
            // TODO: Handle with rejecter
            return
        }
        self.passLibrary.getRemotePKPass(from: pkPassUrl) { (result: Result<Data, Error>) in
            switch result {
            case .failure(let failure):
                reject("error", failure.localizedDescription, failure)
            case .success(let pkpassData):
                DispatchQueue.main.async {
                    guard let keyWindow = UIApplication.shared.keyWindow else {
                        // TODO: Handle with rejecter
                        return
                    }
                    do {
                        try self.passLibrary.presentAddPKPassViewController(window: keyWindow, pkpassData: pkpassData)
                        resolve(true)
                    } catch {
                        reject("error", error.localizedDescription, error)
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
