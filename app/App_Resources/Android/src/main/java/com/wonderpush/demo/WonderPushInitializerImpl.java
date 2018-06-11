package com.wonderpush.demo;

import android.content.Context;

import com.wonderpush.sdk.WonderPush;
import com.wonderpush.sdk.WonderPushInitializer;

public class WonderPushInitializerImpl implements WonderPushInitializer {

    public void initialize(Context context) {
        WonderPush.setLogging(true);
        WonderPush.initialize(context, "7524c8a317c1794c0b23895dce3a3314d6a24105", "b43a2d0fbdb54d24332b4d70736954eab5d24d29012b18ef6d214ff0f51e7901");
    }

}
