import { Button, Divider, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";
import { Input } from "../components/Input";


export default function Home() {
  return (
    <Grid
      as='main'
      height='100vh'
      templateColumns='1fr 480px 480px 1fr'
      templateRows='1fr 480px 1fr'
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        gridArea='logo'
        flexDir='column'
        align='flex-start'
      >
        <img src="/joaogomes.svg" alt="Logo" />
        
        <Heading
          size='2xl'
          lineHeight='shorter'
          maxW='md'
          mt='16'
        >Hello 👏 , welcome to my website!</Heading>
      </Flex>

      <Flex
        as='form'
        gridArea='form'
        height='100%'
        backgroundColor='gray.700'
        borderRadius='md'
        flexDir='column'
        align='stretch'
        p={16}
      >
        <Input
          name='email'
          id='email'
          type='email'
          placeholder="E-mail"
        />

        <Input
          name='password'
          id='password'
          type='password'
          placeholder="Password"
        />

        <Link
          alignSelf='flex-start'
          marginTop={2}
          fontSize='sm'
          color='purple.600'
          fontWeight='bold'
          _hover={{
            color: 'purple.500'
          }}
        >
          Forgot password
        </Link>

        
        <Button
          type="submit"
          mt='6'
          backgroundColor='purple.500'
          height='50px'
          borderRadius='sm'
          _hover={{
            backgroundColor: 'purple.600'
          }}
        >Sign in</Button>

        <Text
          textAlign='center'
          fontSize='sm'
          color='gray.300'
          marginTop={6}
        >
          Don`t have an account? {" "}
          <Link
            color='purple.600'
            fontWeight='bold'
            _hover={{
              color: 'purple.500'
            }}
          >
            Sign up
          </Link>
        </Text>

        <Divider
          my={6}
          w='250px'
          opacity={0.2}
            alignSelf='center'
        />

        <Flex alignItems='center'>
          <Text
            fontSize='sm'
          > Or sign in with</Text>

          <Button
            height='50px'
            flex='1'
            backgroundColor='gray.600'
            ml='6'
            borderRadius='sm'
            _hover={{
              backgroundColor: 'purple.500'
            }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
