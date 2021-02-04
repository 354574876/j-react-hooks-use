import React from 'react'
import { Tabs, TabList, Tab, TabPanel, TabPanels, Box } from '@chakra-ui/core'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default function Form() {
  return (
    <Box
      bgColor={'white'}
      pt={3}
      pb={8}
      w="400px"
      boxShadow="lg"
      borderRadius="lg"
    >
      <Tabs isFitted>
        <TabList py={8} mx={10} borderBottom={0}>
          <Tab _focus={{ boxShadow: 'none' }}>登录</Tab>
          <Tab _focus={{ boxShadow: 'none' }}>注册</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
