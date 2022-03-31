# Courier React In-App Toast Example

## Online Demo

In this task you are re-creating a working example [here](https://reactinappnotification.com/). Please **do not** look at the source code for that example during the task - we want to see where you struggle to complete the task.

## Understanding the distribution code

This is an incomplete React app bootstrapped with Create React App with Typescript for Usabl testers to test the functionality of the [@trycourier/react-toast](https://github.com/trycourier/courier-react/tree/main/packages/react-toast) package.

Your users will see the React form that's written [in App.tsx](/src/App.tsx). When they submit the form, a request will get sent to a Netlify backend API [in submit_form.ts](/netlify/functions/submit_form.ts) which makes and handles the API call to Courier's notification endpoint. You do not have to write any back-end code.

You will need to add code in App.tsx that imports Courier libraries and displays a Toast and Inbox notification. You will also need to populate the correct [environment variables in .env](/.env)

You can quickly configure and trigger a simple Toast notification on this page. To test it with your own [Courier Push integration](https://app.courier.com/integrations/courier) you need to quickly clone the repository and run it locally.

## Running Locally

#### Prerequisites to run the app:

This app also requires [@trycourier/react-provider](https://www.npmjs.com/package/@trycourier/react-provider), [@trycourier/react-toast](https://www.npmjs.com/package/@trycourier/react-toast), and [@trycourier/react-inbox](https://www.npmjs.com/package/@trycourier/react-inbox), but you will have to install these yourself.

The only front-end other additional dependencies are [chakra-ui](https://chakra-ui.com) and [Formik](https://chakra-ui.com) which are used to quickly build the demo form that will let you quickly configure and trigger a standalone local notification.

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
