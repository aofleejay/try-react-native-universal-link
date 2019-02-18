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

## Blog
[บันทึกการใช้งาน iOS Universal Links และ Android App Links บน React Native](https://medium.com/@aofleejay/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99-ios-universal-links-%E0%B9%81%E0%B8%A5%E0%B8%B0-android-app-links-%E0%B8%9A%E0%B8%99-react-native-b867ca254bdb)
