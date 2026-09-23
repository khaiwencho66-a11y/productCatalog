# Notes:
Setup environment:
RN version 0.83.9
node version 20.19.4

-using React Native CLI to create.
# How to run the app
-use "npm install" to install dependencies
-use "npx react-native run-android" to run. OR use "npm start" first to open Metro and then use "npx react-native run-android" to run.

# Product Catalog App:
1. Product List
2. Product detail

# TODOs — list
1. Thumbnail for image (willing to do a modal to display image first before navigate to product detail page & display onclick display product image)
2. product detail display list of image (some product have more than 1 image)
3. loading indicator for page loading while it is empty and loading the data behind
4. States — implement and visually distinguish: loading, error (with a **retry** button), empty, and success
5. replace a product icon at bottom nav bar
6. need to solve issue on ScrollView cannot use together with FlatList (Product Detail line 128-151). Cause issue of:
VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead. Error Stack: ...

# Testing Bug
1. There is a bug where after search products name, and refresh back to by default 20 list, can't scroll down to load more products. Find out solution already, but can't change now.
2. Error issue on bottom show:  Cause issue of:
VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead. Error Stack: ... (In ProductDetail.tsx, cause by incorrect way using using the ScrollViews & FlatList)

# Function/Feature
1. Product List
-able to search by product name, and need to click on the search button
-by default diaply 20 product, scroll down to load more (20 + 20 = 40 display)
-scroll back to top and can pull to refresh page
-onclick product to redirect to product detail page

2. Product Detail page
-have a back button to go back to Product List
-display product image and product detail such as title, price, description, specification (i pcik some from the detail: availability status, stock, brand, weight, dimension), Service (pick: warranty info, shipping info, return policy), rating

# stack used
-React Native Cli: to create and run the project
-React Native with TypeSript
-React Navigation: use to nagivate from a page to another page
-FlatList: to display data list
-FastImage: use for display image
-fetch(): use for integrate API call
-phone to test: I use my own phone due to Android Studio may running slow in my laptop.

# architecture decision
I have few separate folder for file to easy to manage and finding like actions, assets, navigation, screens, and services.

actions: 
-to handle some function before or after calling the API from services. Eg: like calculation or display specific data only.

assets:
-to store all those images

naigation:
-to separate the folder specific for navigation related
-MainStack > Stack Navigator to handle overall screen flow
-BottomNavBar: a bottom navigation bar for switch to go for a section screen (currently only have one: Products)

screens:
-all screen created in this folder, easy to find

services:
-for service file to call api

# AI usage - for research
1. Navigator/Navigation setup at App.tsx and how the MainStack and BottomNavbar setup works
-include file: App.tsx, MainStack.tsx, BottomNavBar
2. on endreached use in flatlist react native

# reference:
https://react.dev/reference/react/useEffect

https://devtrium.com/posts/async-functions-useeffect

https://reactnative.dev/docs/flatlist#example

https://reactnative.dev/docs/textinput

icon downlaod from: https://www.flaticon.com

# Working time
-Used like 3 hours 08 min++ to finish. 
-Init setup like create project, then use above 3 hours+ to setting environment due to first time implement in own laptop

# ------------------------------
# DEFAULT GENERATED NOTE
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
