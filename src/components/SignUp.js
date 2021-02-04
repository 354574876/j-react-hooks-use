import React, { useState } from 'react'
import axios from 'axios'
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  FormControl,
  useToast,
  Button,
} from '@chakra-ui/core'
import { FaUserAlt, FaLock, FaCheck, FaVoicemail } from 'react-icons/fa'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const toast = useToast()
  const signUp = async function () {
    try {
      const { data } = await axios.post(
        'https://conduit.productionready.io/api/users/',
        {
          user: {
            email,
            password,
            username,
          },
        }
      )
      toast({
        title: '注册成功',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      console.log(data)
    } catch (error) {
      toast({
        title: '注册失败',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  }
  return (
    <form>
      <Stack spacing="2">
        <FormControl>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt />} />
            <Input
              placeholder="用户名"
              value={username}
              onChange={ev => setUsername(ev.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftAddon children={<FaVoicemail />} />
            <Input
              placeholder="邮箱"
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
        <Button
          _hover={{ bgColor: 'tomato' }}
          w="100%"
          colorScheme="teal"
          onClick={signUp}
        >
          注册
        </Button>
      </Stack>
    </form>
  )
}
