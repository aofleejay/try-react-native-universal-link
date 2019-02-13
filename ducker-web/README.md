# [Ducker Web](https://ducker.netlify.com)
Demo site that supports iOS Universal Links and Android App Links.

## Links Setup

### iOS Universal Links
Create an apple-app-site-association (AASA) file and place it at `https://www.example.com/apple-app-site-association` or `https://www.example.com/.well-known/apple-app-site-association` and contains JSON like below.
```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "9JA89QQLNQ.com.aofleejay.ducker",
        "paths": [
          "/",
          "/about"
        ]
      }
    ]
  }
}
```
  - appID - `[Team ID].[Bundle ID]`
  - paths - Array of path that associate with mobile application.

### Android App Links
Create an Android app links file and place it at `https://www.example.com/.well-known/applinks.json` and contains JSON like below.
```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.aofleejay.ducker",
      "sha256_cert_fingerprints":
      ["39:C7:02:86:A6:B0:77:21:3F:11:67:68:FE:24:0D:97:6F:05:6D:9A:4F:37:52:46:D9:22:F1:DE:8B:FE:01:7E"]
    }
  }
]
```
- package_name - An Android package name.
- sha256_cert_fingerprints - Generate using Android App Links Assistant in Android Studio.
