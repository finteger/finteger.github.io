summary: "Conditionals in Dart"
id: dart-conditionals
categories: dart
status: Published
authors: your-email@example.com
feedback link: https://github.com/your-repo/issues

# Conditionals in Dart

## Using Conditionals

Conditionals allow you to execute different blocks of code based on certain conditions. Dart supports several types of conditionals including `if`, `else if`, `else`, `switch`, and ternary operators.

```dart
void main() {
  int age = 25;
  double height = 1.75;
  bool isFlutterAwesome = true;
  String day = 'Monday';

  // Using if-else statements
  if (age < 18) {
    print('You are a minor.');
  } else if (age < 65) {
    print('You are an adult.');
  } else {
    print('You are a senior.');
  }

  if (height < 1.6) {
    print('You are shorter than average.');
  } else {
    print('You are of average height or taller.');
  }

  if (isFlutterAwesome) {
    print('Flutter is awesome!');
  } else {
    print('Flutter is not awesome.');
  }

  // Using switch statement
  switch (day) {
    case 'Monday':
      print('Start of the work week.');
      break;
    case 'Friday':
      print('End of the work week.');
      break;
    case 'Saturday':
    case 'Sunday':
      print('Weekend!');
      break;
    default:
      print('Midweek day.');
  }

  // Using ternary operator
  String result = isFlutterAwesome ? 'Flutter is awesome!' : 'Flutter is not awesome.';
  print(result);
}
```

### Explanation

- **`if` Statement**: Executes a block of code if a specified condition is true.
- **`else if` Statement**: Executes a block of code if the initial `if` condition is false and the `else if` condition is true.
- **`else` Statement**: Executes a block of code if all preceding conditions are false.
- **`switch` Statement**: Executes different blocks of code based on the value of a variable.
- **Ternary Operator**: A shorthand for `if-else` statements, returning one of two values based on a condition.

## Exercises

### Exercise 1: Are you going golfing?

1. Create a control flow statement to determine if you are going golfing based on variable weather.  
