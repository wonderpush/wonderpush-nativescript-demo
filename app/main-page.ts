import * as dialogs from "ui/dialogs";

let page;

export function loaded(args) {
    page = args.object;
    console.log('Loaded');
}

export function trackEvent(type, custom) {
    console.log('Track event:', type);
    if (custom) {
        console.log(custom);
    }
}

export function setCustom(custom) {
    console.log('Set custom:');
    console.dir(custom);
}

export function tapTrackEvent(args) {
    trackEvent(args.object.event, args.object.custom);
}

export function tapSetCustom(args) {
    setCustom(args.object.custom);
}

export function getCustom() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({string_fake: 'NOT_IMPLEMENTED'}), 500)
    );
}

export function tapGetCustom() {
    getCustom().then((custom) =>
        dialogs.alert({
            message: JSON.stringify(custom),
            okButtonText: "OK"
        })
    );
}
