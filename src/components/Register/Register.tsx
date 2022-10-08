import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import EcommFormControl from "../Atoms/EcommFormControl";
import EcommTitle from "../Atoms/EcommTitle";
import {
  BrowserRouter as Router,
  NavLink as RouterLink,
} from "react-router-dom";
import EcommButton from "../Atoms/EcommButton";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e: any) => setFirstName(e.target.value);
  const handleLastNameChange = (e: any) => setLastName(e.target.value);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);

  const isErrorfirstName = firstName === "";
  const isErrorlastName = lastName === "";
  const isErroremail = email === "";
  const isErrorpassword = password === "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const registerFrom = () => {
    setFormData({
      ...formData,
      firstName,
      lastName,
      email,
      password,
    });
    console.log({
      fName: firstName,
      lName: lastName,
      email: email,
      password: password,
    });
  };
  return (
    <div>
      <Flex color="black" justifyContent="center" alignItems="center" mt="10vh">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          px={4}
          py={2}
        >
          <Box mb={4}>
            <Flex alignItems="center" justifyContent="center">
              <EcommTitle title="Register" fontSize="4xl" textWeight="b" />
            </Flex>
          </Box>
          <Box>
            <Flex alignItems="center" justifyContent="center">
              <Text fontSize="md">
                Already sign up?
                <Link as={RouterLink} to="/">
                  <Text as="b">Sign in</Text>
                </Link>
              </Text>
            </Flex>
          </Box>
          <Stack spacing={5} mx={6} my={4}>
            <EcommFormControl
              type="text"
              value={firstName}
              errorMsg="First Name"
              isInvalid={isErrorfirstName}
              lableText="First Name"
              onChange={handleFirstNameChange}
            />
            <EcommFormControl
              type="text"
              value={lastName}
              errorMsg="Last Name"
              isInvalid={isErrorlastName}
              lableText="Last Name"
              onChange={handleLastNameChange}
            />

            <EcommFormControl
              type="email"
              value={email}
              errorMsg="Email"
              isInvalid={isErroremail}
              lableText="Email"
              onChange={handleEmailChange}
            />

            <EcommFormControl
              type="password"
              value={password}
              errorMsg="Password"
              isInvalid={isErrorpassword}
              lableText="Password"
              onChange={handlePasswordChange}
            />
          </Stack>
          <Box m={4}>
            <Flex alignItems="center" justifyContent="center">
              <EcommButton
                text="Register"
                colour="blue"
                size="sm"
                onClickBtn={registerFrom}
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Register;
