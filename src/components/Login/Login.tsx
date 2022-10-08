import {
  Box,
  Button,
  Checkbox,
  Flex, 
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { MdPerson, MdHttps } from "react-icons/md";
import {
  BrowserRouter as Router,
  NavLink as RouterLink,
} from "react-router-dom";
import EcommTitle from "../Atoms/EcommTitle";
import EcommInputGroup from "../Atoms/EcommInputGroup";
import EcommButton from "../Atoms/EcommButton";

const Login = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e: any) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const loginFrom = () => {
    setFormData({ ...formData, userName, password });
    console.log({ user: userName, password: password });
  };

  return (
    <div>
      <Flex color="black" justifyContent="center" alignItems="center" mt="25vh">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          flexDirection="row"
          px={6}
          py={2}
        >
          <Box mb={4}>
            <Flex alignItems="center" justifyContent="center">
              <EcommTitle title="Login" fontSize="4xl" textWeight="b" />
            </Flex>
          </Box>
          <Box>
            <Flex alignItems="center" justifyContent="center">
              <Text fontSize="md">
                Not a member yet?
                <Link as={RouterLink} to="/register">
                  <Text as="b">Sign up</Text>
                </Link>
              </Text>
            </Flex>
          </Box>
          <Box m={4}>
            <EcommTitle title="User Name" padding="0 0 2rem 0" textWeight="b" />
            <EcommInputGroup
              padding="0 0 0 4.5"
              type="text"
              required={true}
              value={userName}
              onChange={handleUserName}
              leftChild={true}
              icon={<Icon as={MdPerson} />}
            />
          </Box>
          <Box m={4}>
            <EcommTitle title="Password" padding="0 0 2rem 0" textWeight="b" />
            <EcommInputGroup
              padding="0 0 0 4.5"
              type="password"
              required={true}
              value={password}
              onChange={handlePassword}
              leftChild={true}
              icon={<Icon as={MdHttps} />}
            />
          </Box>
          <Box>
            <Flex alignItems="center" justifyContent="center">
              <Box>
                <Checkbox defaultChecked>Remeber me</Checkbox>
              </Box>
            </Flex>
          </Box>
          <Box m={4}>
            <Flex alignItems="center" justifyContent="center">
              <EcommButton
                text="Login"
                colour="blue"
                size="sm"
                onClickBtn={loginFrom}
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Login;
