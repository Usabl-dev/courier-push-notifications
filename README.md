# Courier React In-App Toast Example

This is an incomplete React app bootstrapped with Create React App with Typescript for Usabl testers to test the functionality of the [@trycourier/react-toast](https://github.com/trycourier/courier-react/tree/main/packages/react-toast) package.

[@trycourier/react-provider](https://github.com/trycourier/courier-react/tree/main/packages/react-provider) is a dependency that handles all the authentication and integration with the Courier backend.

The only other additional dependencies are [chakra-ui](https://chakra-ui.com) and [Formik](https://chakra-ui.com) which are used to quickly build the demo form that will let you quickly configure and trigger a standalone local notification.

## Online Demo

[Check it here](https://reactinappnotification.com/)

You can quickly configure and trigger a simple Toast notification on this page. To test it with your own [Courier Push integration](https://app.courier.com/integrations/courier) you need to quickly clone the repository and run it locally.

## Running Locally

#### Prerequisites to run the app:

- Node.js
- yarn

Clone the repository and install the dependencies:

```bash
$ yarn install
```

Start the dev server:

```bash
$ yarn develop
```

The app URL will open automatically in your browser.

## Configuring Courier Provider

You need to set environment variables for the client key you get when installing the [Courier Push integration](https://app.courier.com/integrations/courier), the notification id of your [Courier Notification](https://app.courier.com/designer/notifications), and your [Courier Authentication Token](https://app.courier.com/settings/api-keys).
