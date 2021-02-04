import React, { useState } from 'react'
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  Button,
  FormControl,
  Flex,
  Checkbox,
  FormLabel,
  useToast,
} from '@chakra-ui/core'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import axios from 'axios'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()
  const login = async function () {
    try {
      const { data } = await axios.post(
        'https://conduit.productionready.io/api/users/login',
        {
          user: {
            email: email,
            password: password,
          },
        }
      )
      toast({
        title: '登录成功',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      console.log(data)
    } catch (error) {
      toast({
        title: '用户名或密码不正确',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  }
  return (
    <form>
      <Stack spacing="2">
        <FormControl isInvalid={!email}>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input
              placeholder="账号"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
            />
          </InputGroup>
        </FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaLock />} />
          <Input
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
        </InputGroup>
        <Flex>
          <Checkbox id="deal" mr="3" defaultIsChecked />
          <FormLabel htmlFor="deal">记住我</FormLabel>
        </Flex>
        <Button
          _hover={{ bgColor: 'tomato' }}
          w="100%"
          colorScheme="teal"
          onClick={login}
        >
          登录
        </Button>
      </Stack>
    </form>
  )
}
