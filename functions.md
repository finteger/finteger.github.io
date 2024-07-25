summary: "Functions in Dart"
id: dart-functions
categories: dart
status: Published
authors: your-email@example.com
feedback link: https://github.com/your-repo/issues

# Functions in Dart

## Using Functions

Functions in Dart allow you to group code into reusable blocks. Functions can take parameters, return values, and perform various operations. Dart supports defining functions using the `void` keyword or with a return type.

1. Try this out in an editor:
    ```dart
    void main() {
      // Calling a function with no return value
      greetUser('Alice');

      // Calling a function with return value
      int sum = addNumbers(5, 7);
      print('The sum is: $sum');
      
      // Calling a function with optional parameters
      String message = getGreeting('John', 'Doe');
      print(message);
    }

    // Function with no return value
    void greetUser(String name) {
      print('Hello, $name!');
    }

    // Function with a return value
    int addNumbers(int a, int b) {
      return a + b;
    }

    // Function with optional parameters
    String getGreeting(String firstName, [String lastName = 'Smith']) {
      return 'Hello, $firstName $lastName!';
    }
    ```

### Explanation

- **Function with no return value**: Defined with `void`, and it performs an action without returning a result.
- **Function with a return value**: Defined with a specific return type (e.g., `int`), and it returns a value.
- **Function with optional parameters**: Parameters can be optional and have default values if not provided.

## Exercises

### Exercise 1: Calculate Area

1. Create a function to calculate the area of a rectangle. The function should take the width and height as parameters and return the area.
2. Create a function to calculate the area of a circle. The function should take the radius as a parameter and return the area. Use the formula: `area = π * radius^2`.
