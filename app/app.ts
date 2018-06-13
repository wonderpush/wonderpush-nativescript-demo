import "./bundle-config";
import * as application from "application";
import { WonderPush } from "wonderpush-nativescript-sdk";

WonderPush.setLogging(true);
if (application.ios) {
    class AppDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];
        public applicationWillFinishLaunchingWithOptions(app: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
            try {
                WonderPush.ios.setClientIdSecret("7524c8a317c1794c0b23895dce3a3314d6a24105", "b43a2d0fbdb54d24332b4d70736954eab5d24d29012b18ef6d214ff0f51e7901");
                WonderPush.ios.setupDelegateForApplication(app);
                WonderPush.ios.setupDelegateForUserNotificationCenter();
            } catch (error) {
                console.error('error', error);
            }
            return true;
        }
    }
    application.ios.delegate = AppDelegate;
}

application.run({
    moduleName: "app-root",
});
// code below application.run is never executed on iOS
