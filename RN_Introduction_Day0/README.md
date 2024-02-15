# Simple React Native App

## Overview

This project is a simple React Native application that demonstrates basic usage of views, text, and styles. The app displays a centered greeting message, "Hey World!", followed by a description, and emphasizes "This Texts" in bold and with a green background. It's built with Expo and showcases how to use the `StatusBar` component for a polished look.

## Features

- **Expo StatusBar**: Utilizes the `expo-status-bar` package to display the status bar with an auto style, adapting to the active theme.
- **React Native Styles**: Demonstrates the use of `StyleSheet` for creating and applying styles within a React Native app. The styles include container alignment, background color, and font weight adjustments.
- **Text Styling**: Shows how to apply multiple styles to text elements, including background color and bold text styling.

## App.js Code Summary

The main component, `App`, returns a view that encapsulates several text components and the status bar. Key aspects of the code include:

- **Flexbox for Layout**: Uses Flexbox to center content within the screen, providing a responsive design.
- **Inline and Array Styles**: Demonstrates both inline styling and the combination of multiple styles using an array.
- **Custom Styles**: Through `StyleSheet.create`, it illustrates custom style definitions, such as `mkbold` for bold text, `bgcol` for a semi-transparent background, and `bgcolgrn` for a green background.

## Screenshot

![App Screenshot](/RN_Introduction_Day0/assets/Screenshot 2024-02-15 232532.png "App Screenshot")

## How to Run

1. **Clone the repo**: `git clone https://github.com/justBaruah/React-Native-.git`
2. **Navigate**: `cd React-Native-`
3. **Install dependencies**: `npm install`
4. **Start the project**: `expo start`

Scan the QR code with the Expo Go app to view the app live on your device.
