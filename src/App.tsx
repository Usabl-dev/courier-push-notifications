import { useCallback } from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Link,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { Formik, Field, FieldProps, FormikHelpers } from "formik";

const initialValues = {
  title: "",
  message: "",
  cta: "",
};

type Values = typeof initialValues;

interface AppProps {
  courierUserId: string;
}

const App = ({ courierUserId }: AppProps) => {
  /**
   * This is a callback that submits a POST request to
   * Courier's backend in order to deliver your notification.
   * You do not need to edit anything here to complete the task.
   */
  const submitHandler = useCallback(
    async (values: Values, helpers: FormikHelpers<Values>) => {
      try {
        const response = await fetch("/.netlify/functions/submit_form", {
          method: "POST",
          body: JSON.stringify({ userId: courierUserId, ...values }),
          headers: { "content-type": "application/json" },
        });

        if (!response.ok) throw new Error("Request failed");

        helpers.resetForm();
        helpers.setStatus("success");
      } catch {
        helpers.setStatus("error");
      }
    },
    [courierUserId]
  );

  return (
    // CourierProvider goes here
    <Container my={8}>
      <Box textAlign="right">{/* Inbox goes here */}</Box>

      {/* Toast goes here */}

      <Heading as="h4" size="md" textAlign="center">
        Welcome to the React In-App Toast App.
      </Heading>
      <Text textAlign="center" mt={2} mb={12} fontSize="lg">
        Select the options for your toast and try it below.
      </Text>

      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ handleSubmit, isSubmitting, status }) => (
          <form onSubmit={handleSubmit}>
            {status === "error" && (
              <Alert status={status} mb={8}>
                <AlertIcon />
                <AlertDescription>Error submitting the form</AlertDescription>
              </Alert>
            )}

            <Field name="title">
              {({ field }: FieldProps) => (
                <FormControl mb={8}>
                  <FormLabel>Notification Name</FormLabel>
                  <Input {...field} />
                </FormControl>
              )}
            </Field>

            <Field name="message">
              {({ field }: FieldProps) => (
                <FormControl mb={8}>
                  <FormLabel>Notification Message</FormLabel>
                  <Input {...field} />
                </FormControl>
              )}
            </Field>

            <Field name="cta">
              {({ field }: FieldProps) => (
                <FormControl mb={8}>
                  <FormLabel>Call To Action Copy</FormLabel>
                  <Input {...field} />
                </FormControl>
              )}
            </Field>

            <Button
              type="submit"
              colorScheme="purple"
              isLoading={isSubmitting}
              isFullWidth
            >
              Trigger Toast
            </Button>
          </form>
        )}
      </Formik>

      <Flex mt={12} justify="center">
        <Link mx={4} href="https://courier.com">
          Powered by Courier
        </Link>
      </Flex>
    </Container>
  );
};

export default App;
