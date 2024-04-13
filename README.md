![]()

# Context API project

## Table of Contents

1. [Introduction](https://www.codechat.co/#introduction)
2. [Setup](https://www.codechat.co/#setup)
3. [Usage](https://www.codechat.co/#usage)
4. [Components](https://www.codechat.co/#components)
5. [Context](https://www.codechat.co/#context)
6. [License](https://www.codechat.co/#license)

## Introduction

This project is a simple React application that demonstrates the use of context API to share state between components. The application contains two grandparent components, `GP1` and `GP2`, which are wrapped inside a `MyContext.Provider` component.

## Setup

To set up the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage

To run the project, execute the following command:

```
npm start
```

This will start the development server and open the application in your default web browser.

## Components

The project contains the following components:

* `App`: The main component that sets up the context and renders the grandparent components.
* `GP1` and `GP2`: The grandparent components that consume the context.

## Context

The context is set up using the `MyContext` component, which is imported from `./MyContext`. The context provider is set up in the `App` component, and the `count` state and `setCount` function are passed as the context value.

## License

This project is licensed under the MIT License.
