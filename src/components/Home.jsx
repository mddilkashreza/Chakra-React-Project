import { Box, Container } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { Image, Heading, Stack, Text } from '@chakra-ui/react';


const headingOptions = {
    pos: 'absolute',
    right: '25%',
    top: '50%',
    transtorm: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: "3xl",


};

const Home = () => {
    return <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p='16'>
            <Heading
                textTransform={"uppercase"}
                py="2" w={"fit-content"}
                borderBottom={'2px solid'}
                m="auto">Service</Heading>
            <Stack
                h="full"
                p={'4'}
                alignItem={'center'}
                direction={['column', 'row']}
            >
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} my={'12'}/>
                <Text
                    letterSpacing={"widest"}
                    lineHeight={"190%"}
                    p={["4", "16"]}
                    textAlign={"center"}
                    mb='10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                    alias ut earum libero voluptatem, debitis repudiandae, harum
                    vel repellendus est quisquam voluptatum totam cupiditate in
                    incidunt hic, cum odit sequi molestiae! Numquam quisquam autem
                    doloribus quasi esse. Reprehenderit maxime ipsum, fuga dignissimos
                    quae explicabo minus alias obcaecati minima tempora nulla, possimus
                    , enim incidunt quas repudiandae laudantium. Aspernatur dolorum
                    ad cupiditate dicta velit, eligendi tempore et sit nam,
                    sapiente neque quisquam omnis minus quae corrupti iur
                    e optio eos temporibus odit perspiciatis quia rem,
                    aperiam animi. Ratione animi quae consequuntur saepe
                    suscipit assumenda dolorum vitae at et minima. Repudiandae
                    corrupti, ut hic dolorum consequatur facilis natus illum autem
                    temporibus similique quas, ducimus voluptas quia. Veniam repellat quae
                    sit beatae, magni natus rerum cum ducimus amet dolore doloribus eius vero.
                    Officia dicta repellendus aut. Quos repellat eos voluptas officiis quisquam quis
                    consectetur magnam quae, nihil, perferendis delectus, aliquam fugit! Animi,
                    officia! In totam consequuntur aut modi quae consectetur excepturi ad quaerat
                    
                </Text>
            </Stack>
        </Container>
    </Box>;


};

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >


        <Box w="full" h={"100vh"}>
            <Image src={img1} w={"full"} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'white'}
                {...headingOptions}>
                Watch The Future
            </Heading>

        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img2} w={"full"} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'white'}
                {...headingOptions}>
                Game is the future
            </Heading>

        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img3}
                w={"full"} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'white'}
                {...headingOptions}>
                Gaming is Console
            </Heading>

        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img4} w={"full"} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'white'}
                {...headingOptions}>
                Night Life is Cool
            </Heading>

        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img5} w={"full"} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'white'}
                {...headingOptions}>
                Gaming is Not Fucking Crime
            </Heading>

        </Box>
    </Carousel>
);

export default Home;