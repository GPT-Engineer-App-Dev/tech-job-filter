import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Text } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering" },
  { id: 2, title: "Product Manager", category: "Product" },
  { id: 3, title: "UI/UX Designer", category: "Design" },
  { id: 4, title: "Backend Developer", category: "Engineering" },
  { id: 5, title: "Product Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("");

  const filteredJobs = filter ? jobs.filter(job => job.category === filter) : jobs;

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">Remote Tech Jobs</Text>
        <HStack spacing={4} justify="center">
          <Button onClick={() => setFilter("")} colorScheme={filter === "" ? "blue" : "gray"}>All</Button>
          <Button onClick={() => setFilter("Product")} colorScheme={filter === "Product" ? "blue" : "gray"}>Product</Button>
          <Button onClick={() => setFilter("Design")} colorScheme={filter === "Design" ? "blue" : "gray"}>Design</Button>
          <Button onClick={() => setFilter("Engineering")} colorScheme={filter === "Engineering" ? "blue" : "gray"}>Engineering</Button>
        </HStack>
        <VStack spacing={4} align="stretch">
          {filteredJobs.map(job => (
            <Box key={job.id} p={5} shadow="md" borderWidth="1px">
              <Text fontSize="xl">{job.title}</Text>
              <Text mt={4}>{job.category}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;