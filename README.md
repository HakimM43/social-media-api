1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing 0.0.0.0/0?
Whitelisting IP addresses helps protect the database by only allowing trusted computers or servers to connect. Using 0.0.0.0/0 allows connections from anywhere on the internet, which increases the risk of unauthorized access or attacks if login credentials are exposed.

2. What is the purpose of the dotenv package? What other methods could you use to manage environment variables in production?
The dotenv package loads sensitive values such as database connection strings from a .env file into process.env. This keeps secrets out of the source code. In production, environment variables can also be managed through cloud hosting settings or secret-management services.

3. If your application failed to connect, what are the first few steps you would take to debug the issue?
I would first check that the MongoDB connection string and password are correct, make sure the .env file is loading properly, verify that my IP address is allowed in MongoDB Atlas, and confirm that the cluster is running. I would also read the terminal error message to identify the specific problem.