var dialogs = require("ui/dialogs");

var page;

function loaded(args) {
    page = args.object;
    console.log('Loaded');
}

exports.loaded = loaded;

function trackEvent(type, custom) {
    console.log('Track event:', type);
    if (custom) {
        console.log(custom);
    }
}

exports.trackEvent = trackEvent;

function setCustom(custom) {
    console.log('Set custom:');
    console.dir(custom);
}

exports.setCustom = setCustom;

exports.tapTrackEvent = function(args) {
    trackEvent(args.object.event, args.object.custom);
};

exports.tapSetCustom = function(args) {
    setCustom(args.object.custom);
};

function getCustom() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({string_fake: 'NOT_IMPLEMENTED'}), 500)
    );
}

exports.getCustom = getCustom;

exports.tapGetCustom = function() {
    getCustom().then((custom) =>
        dialogs.alert({
            message: JSON.stringify(custom),
            okButtonText: "OK"
        })
    );
};
