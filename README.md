# try-react-native-universal-link
Repository for practice about iOS universal link and Android app link in React-Native.

## Universal Links (iOS) or App Links (Android)
With universal links, you can redirect user to your installed application when tap link (ex. www.exmple.com). If application is not installed, it go to browser instead.

## Usages
1. Open simulator.
2. Run command to open link
    - for iOS type `xcrun simctl openurl booted https://ducker.netlify.com` in terminal.
    - for Android type `adb shell am start -W -a android.intent.action.VIEW -d "https://ducker.netlify.com"` in terminal.
3. If [ducker app](https://github.com/aofleejay/try-react-native-universal-link/tree/master/ducker) installed, it go to installed app. If not, it go to [https://ducker.netlify.com](https://ducker.netlify.com)
