title: Flutter ListView Codelab
author: Todd Nash
summary: A Flutter codelab demonstrating the usage of ListView widget.
id: flutter-listview-codelab
categories: 
  - codelab
environments: 
  - Mobile
status: Draft


# Flutter ListView Codelab

## Introduction

In this codelab, we'll explore how to use the ListView widget in Flutter to create scrollable lists of widgets.

## Prerequisites

Before starting this codelab, make sure you have Flutter installed on your system. You can follow the [official installation instructions](https://flutter.dev/docs/get-started/install).

## Getting Started

1. Create a new Flutter project:
    ```bash
    flutter create listview_codelab
    ```
2. Navigate to the project directory:
    ```bash
    cd listview_codelab
    ```

## Creating a ListView

Open the `lib/main.dart` file in your Flutter project and replace the existing code with the following:

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
          title: Text('ListView Codelab'),
        ),
        body: ListView(
          children: <Widget>[
            ListTile(
              leading: Icon(Icons.map),
              title: Text('Map'),
            ),
            ListTile(
              leading: Icon(Icons.photo),
              title: Text('Album'),
            ),
            ListTile(
              leading: Icon(Icons.phone),
              title: Text('Phone'),
            ),
          ],
        ),
      ),
    );
  }
}
```

In this code:

We define a simple Flutter app with a MyApp widget that extends StatelessWidget.
Inside the build method of MyApp, we return a MaterialApp with a Scaffold.
The Scaffold contains an AppBar with a title.
The body of the Scaffold contains a ListView widget.
Inside the ListView, we have three ListTile widgets, each representing an item in the list. Each ListTile contains an icon and a title.