# Ionic Project with Camera and Câmera Preview

App developed using Native Camera and Native Camera Preview from Ionic Framework. Ionic Version 3

## Running App
1. npm install
2. ionic cordova platform add [platform_name(ios,android)]
3. ionic cordova run [platform_name(ios,android)]

## What I did when I was developing ##
1. Created a ionic project
ionic start Camera01 --type=ionic-angular

2. Installed Camera Plugin (https://ionicframework.com/docs/native/camera)

Run: ionic cordova plugin add cordova-plugin-camera

Run: npm install @ionic-native/camera

Set Code in config.xml: 
<config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
 <string>You can take photos</string>
</config-file>

3. Installed Camera Preview Plugin (https://www.npmjs.com/package/cordova-plugin-camera-preview)

Run: ionic cordova plugin add cordova-plugin-camera-preview

Run: npm install @ionic-native/camera-preview@3


4. Developed Camera Page
- Look pages/Home

5. Developed Camera Preview Page
- Look pages/List

![Farmers Market Finder Demo](camera-preview.gif)
