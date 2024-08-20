import {Flex, Text} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
    return (
        <Flex alignItems={"center"} justifyContent={"center"} height={"100%"}>
            <BsFillCartFill size={30} />
            <Text fontSize={"1.5em"}>0</Text>
        </Flex>
    )
}

export default CartWidget;