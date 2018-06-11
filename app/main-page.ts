import * as dialogs from "ui/dialogs";
import { WonderPush } from "wonderpush-nativescript-sdk";

let page;

export function loaded(args) {
    page = args.object;
    console.log('Loaded');
}

export function trackEvent(type, custom) {
    console.log('Track event:', type);
    if (custom) {
        console.dir(custom);
    }
    WonderPush.trackEvent(type, custom);
}

export function setCustom(custom) {
    console.log('Set custom:');
    console.dir(custom);
    WonderPush.putInstallationCustomProperties(custom);
}

export function tapTrackEvent(args) {
    trackEvent(args.object.event, JSON.parse(args.object.custom));
}

export function tapSetCustom(args) {
    setCustom(JSON.parse(args.object.custom));
}

export function getCustom() {
    return WonderPush.getInstallationCustomProperties();
}

export function tapGetCustom() {
    dialogs.alert({
        message: JSON.stringify(getCustom()),
        okButtonText: "OK"
    });
}
