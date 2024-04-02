title: Basic Layout Tutorial for Flutter
author: Todd Nash
summary: Code Labs
id: code-labs-mobile-development
categories: 
  - codelab
  - markdown
  - internet computer
environments: 
  - Web
status: Published


# Flutter Basic Layout Tutorial

## Introduction

Flutter is a popular UI toolkit developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. In this tutorial, we will explore the basics of creating layouts in Flutter.

## Getting Started

Before we begin, ensure that you have Flutter installed on your system. You can follow the [official documentation](https://flutter.dev/docs/get-started/install) for installation instructions.

## Creating a New Flutter Project

First, let's create a new Flutter project. Open your terminal or command prompt and run the following command:

```bash
flutter create basic_layout_tutorial
```

This command will create a new Flutter project named basic_layout_tutorial.

## Understanding Widgets
In Flutter, everything is a widget. Widgets are the basic building blocks of Flutter applications. There are two main types of widgets:

## Stateless Widgets: Widgets that do not require mutable state.
Stateful Widgets: Widgets that maintain mutable state.
Creating a Simple Layout
Let's create a simple layout with a text widget centered on the screen. Open the lib/main.dart file in your Flutter project and replace the existing code with the following:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Basic Layout Tutorial'),
        ),
        body: Center(
          child: Text(
            'Hello, Flutter!',
            style: TextStyle(fontSize: 24.0),
          ),
        ),
      ),
    );
  }
}
```

In this code:

We import the material.dart package, which contains Flutter's material design widgets.
We define a MyApp class that extends StatelessWidget.
In the build method of MyApp, we return a MaterialApp widget, which provides basic material design visual components.
Inside the MaterialApp, we define a Scaffold widget, which provides a basic layout structure with app bars, drawers, and more.
The Scaffold contains an AppBar with a title.
The body of the Scaffold contains a Center widget, which centers its child vertically and horizontally.
Inside the Center widget, we have a Text widget displaying the text "Hello, Flutter!".