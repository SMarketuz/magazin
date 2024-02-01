import { Box, Text, Input, Button, Avatar, useDisclosure, SkeletonCircle, Skeleton, useToast } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Gamers from '../components/gamers'
import { useState } from 'react';
import { api } from '../api/api';
import axios from 'axios';
const CategoryForGamers = () => {
	const [values, setValues] = useState({
		image: "",
		name: "",
		informationMin: "",
		informationMax: "",
		cost: "",
		rate: "",
	  });
	  const [apiRoute, setApiRoute] = useState('keyboard')
	  console.log(apiRoute);
	  const toast = useToast()


	  const postHandler = () => {
		if (
		  values.image.length == 0 ||
		  values.name.length == 0 ||
		  values.informationMin.length == 0 ||
		  values.informationMax.length == 0 ||
		  values.cost.length == 0 ||
		  values.rate.length == 0
		) {
		  toast({
			title: 'Hato',
			description: "Malumot toliq emas",
			status: "error",
			duration: 3000,
			isClosable: true,
			position: "top-right",
		  });
		} else {
		  axios
			.post(
			  `${api}/api/${apiRoute}/create-data`,
			  {
				image: `${values.image}`,
				name: `${values.name}`,
				informationMin: `${values.informationMin}`,
				informationMax: `${values.informationMax}`,
				cost: `${values.cost}`,
				rate: `${values.rate}`,
			  },
			  {
				headers: {
				  "ngrok-skip-browser-warning": true,
				  "Access-Control-Allow-Origin": "*",
				},
			  }
			)
			.then((res) => {
			  setValues({
				image: "",
				name: "",
				informationMin: "",
				informationMax: "",
				cost: "",
				rate: "",
			  });
			  toast({
				description: "Malumot saqlandi",
				status: "success",
				duration: 3000,
				isClosable: true,
				position: "top-right",
			  });
			});
		}
	  };
  return (
	<Box pl={'300px'} h={"92vh"} w={"100%"}>
		<Box w={'95%'} m={'auto'} pt={'30px'}>
		  <Text fontSize={"30px"} fontWeight={"700"}>
			Add product for gamers
		  </Text>
		  <Box pt={'30px'}> 
		  <Tabs>
			<TabList>
				<Tab onClick={() => setApiRoute('keyboard')}>Keyboard</Tab>
				<Tab onClick={() => setApiRoute('mouses')}>Mouse</Tab>
				<Tab onClick={() => setApiRoute('accessories')}>Accessory</Tab>
				<Tab onClick={() => setApiRoute('laptops')}>Laptop</Tab>
				<Tab onClick={() => setApiRoute('videoCards')}>VideoCard</Tab>
				<Tab onClick={() => setApiRoute('monitors')}>Monitor</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
				  <Gamers postHandler={postHandler} setValues={setValues} values={values} image={values.image} name={values.name} informationMax={values.informationMax} informationMin={values.informationMin} cost={values.cost} rate={values.rate} />
				</TabPanel>
				<TabPanel>
				  <Gamers postHandler={postHandler} setValues={setValues} values={values} image={values.image} name={values.name} informationMax={values.informationMax} informationMin={values.informationMin} cost={values.cost} rate={values.rate} />
				</TabPanel>
				<TabPanel>
				  <Gamers postHandler={postHandler} setValues={setValues} values={values} image={values.image} name={values.name} informationMax={values.informationMax} informationMin={values.informationMin} cost={values.cost} rate={values.rate} />
				</TabPanel>
				<TabPanel>
				  <Gamers postHandler={postHandler} setValues={setValues} values={values} image={values.image} name={values.name} informationMax={values.informationMax} informationMin={values.informationMin} cost={values.cost} rate={values.rate} />
				</TabPanel>
				<TabPanel>
				  <Gamers postHandler={postHandler} setValues={setValues} values={values} image={values.image} name={values.name} informationMax={values.informationMax} informationMin={values.informationMin} cost={values.cost} rate={values.rate} />
				</TabPanel>
				<TabPanel>
				  <Gamers postHandler={postHandler} setValues={setValues} values={values} image={values.image} name={values.name} informationMax={values.informationMax} informationMin={values.informationMin} cost={values.cost} rate={values.rate} />
				</TabPanel>
			</TabPanels>
			</Tabs>
		  </Box>
		</Box>
	</Box>
  )
}

export default CategoryForGamers
