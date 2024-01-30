import { Box, Text, Input, Button, Spinner } from "@chakra-ui/react";

const Gamers = ({values, image, name, informationMin, informationMax, cost, rate, handleClick, setValues}) => {
  return (
    <Box>
    <Box pt={"30px"} display={"flex"} alignItems={"center"} gap={"5rem"}>
      <Box display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
        <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
          Image
        </Text>
        <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
          Name
        </Text>
        <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
          InformationMin
        </Text>
        <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
          InformationMax
        </Text>
        <Text
          fontSize={"22px"}
          color={"#ADADAE"}
          fontWeight={"500"}
          w={"140px"}
        >
          Cost
        </Text>
        <Text fontSize={"22px"} color={"#ADADAE"} fontWeight={"500"}>
          Rate
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"1.1rem"}
        w={"100%"}
      >
        <Input
          value={image}
          onChange={(e) => setValues({ ...values, image: e.target.value })}
          placeholder="image Url"
          w={"100%"}
        />
        <Input
          value={name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          placeholder="product Name"
          w={"100%"}
        />
        <Input
          value={informationMin}
          onChange={(e) =>
            setValues({ ...values, informationMin: e.target.value })
          }
          placeholder="InformationMin"
          w={"100%"}
        />
        <Input
          value={informationMax}
          onChange={(e) =>
            setValues({ ...values, informationMax: e.target.value })
          }
          placeholder="InformationMax"
          w={"100%"}
        />
        <Input
          value={cost}
          onChange={(e) =>
            setValues({ ...values, cost: e.target.value })
          }
          placeholder="Cost"
          w={"100%"}
        />
        <Input
          value={rate}
          onChange={(e) => setValues({ ...values, rate: e.target.value })}
          placeholder="Rate"
          w={"100%"}
        />
      </Box>
    </Box>
    <Box display={"flex"} alignItems={"right"} justifyContent={"right"}>
      <Button
        onClick={handleClick}
        mt={"30px"}
        w={"100px"}
        h={"40px"}
        color={"white"}
        _hover={""}
        bg={"#4C4C4C"}
      >
        Send
      </Button>
    </Box>
  </Box>
  )
}

export default Gamers
