import { LoginBtn, LogoutBtn } from '@/comps/auth'
import { Flex, Text, Button } from '@radix-ui/themes'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flex direction="column" gap="2">
        <Text className='text-xl'>Hello from Radix Themes :)</Text>
        <Button>go go</Button>
        <LoginBtn />
        <LogoutBtn />
      </Flex>
    </main>
  )
}
