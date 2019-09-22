# Human2Human

React Native Applicaton

## Prerequisites:

1. Min Node Verson: v12.6.0 ([download](https://nodejs.org/en/download/))
2. Install expo: `npm install expo-cli --global`

## Build Native App with [Expo](https://expo.io/features):

1. Clone this repo
2. `cd Human2Human`
3. `npm install`
4. `npm start`

The default browser should open and load http://localhost:19002/

You are now ready to begin testing!

## Test Native App

### Android

1. Download the [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA) app from the [Google Play Store](https://play.google.com/store/)
2. Open the [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA) app and navigate to `Projects` tab in the bottom navigation bar
3. Tap the `Scan QR Code` option under the `Tools` heading and scan the QR code for your app at http://localhost:19002/ (it should also be displayed in your terminal after running `npm start`)
4. If you're logged in with the same [Expo account](https://expo.io/signup) you used to build the app, you can also open it under the `Recently In Development` section

### iOS

1. Download the [Expo Client](https://apps.apple.com/ca/app/expo-client/id982107779) app from the [App Store](https://www.apple.com/ca/ios/app-store/)
2. Open the [Expo Client](https://apps.apple.com/ca/app/expo-client/id982107779) app and navigate to `Projects` tab in the bottom navigation bar
3. The `Scan QR Code` feature was removed from the iOS [Expo Client](https://apps.apple.com/ca/app/expo-client/id982107779) app from the [App Store](https://www.apple.com/ca/ios/app-store/) 😭, so unforunately the best way to test on an iOS device is to log in with the [Expo account](https://expo.io/signup) you used to build the app and open it under the `Recently In Development` section

### Web

1. Go to [snack.expo.io](https://snack.expo.io/)
2. Click the three vertical ellipses to the right of the `Project` section header in the left navigation bar to open the project options and select `Import git repository`
3. Enter the URL for this repo and click `Import repository`
4. Run the app on your chosen simulator

## QR Codes for testing

![c221770a-1b48-474a-8c3b-ba97585c406c](https://user-images.githubusercontent.com/5456509/65389486-d4303100-dd24-11e9-8feb-9ef5130229dd.png)

![f6b013d8-17f1-4b7f-b3d8-342dd5443cfe](https://user-images.githubusercontent.com/5456509/65389492-dd210280-dd24-11e9-8a82-1a18c347d13a.png)

![f24b9bc6-aad9-4f21-8e4d-bc30fb3d6c30](https://user-images.githubusercontent.com/5456509/65389493-e316e380-dd24-11e9-8228-b42b27efbe24.png)

## Troubleshooting

**Watchman:**
If you run into an error that says
`jest-haste-map: Watchman crawl failed. Retrying once with node crawler.`
try to [install watchman on your machine](https://facebook.github.io/watchman/docs/install.html#build-install)

1. `brew update`
2. `brew install watchman`
