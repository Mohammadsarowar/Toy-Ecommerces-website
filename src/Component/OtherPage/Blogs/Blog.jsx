import React from 'react';
import useTitle from '../useTitle';

const BlogsPage = () => {
  useTitle('Blogs')
  const blogs = [
    {
      id: 1,
      title: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
      content: 'An access token is a security credential used to authenticate and authorize a client to access protected resources. It has a limited lifespan and is obtained upon successful authentication. A refresh token is used to obtain a new access token without reauthentication and has a longer lifespan.Access tokens are included in requests to access protected resources, while refresh tokens are used to request new access tokens when the current ones expire.On the client-side, access and refresh tokens should be stored securely, such as using browser cookies with appropriate security attributes or HTML5 Web Storage. These storage options help protect the tokens from unauthorized access. It is essential to follow security best practices and considerations, including encryption and proper token expiration handling.',
      author: 'John Doe',
      date: 'May 1, 2023',
    },
    {
      id: 2,
      title: 'Compare SQL and NoSQL databases?',
      content: 'SQL and NoSQL databases differ in their data models, scalability approaches, schema enforcement, query languages, transaction support, and use cases.SQL databases follow a relational data model with predefined schemas, while NoSQL databases offer flexibility in data organization with various data models. SQL databases scale vertically by upgrading hardware, while NoSQL databases scale horizontally by distributing data across multiple servers.SQL databases enforce rigid schemas, whereas NoSQL databases allow for dynamic and evolving data structures. SQL databases use SQL as a query language, while NoSQL databases may have their own query languages or provide APIs.SQL databases provide strong transactional support (ACID-compliant), while NoSQL databases vary in their transaction capabilities. SQL databases are suitable for applications with complex relationships, while NoSQL databases excel in handling unstructured data, real-time processing, and massive scalability.The choice between SQL and NoSQL depends on specific application requirements, data nature, scalability needs, and desired flexibility in development and querying.',
      author: 'Jane Smith',
      date: 'May 5, 2023',
    },
    {
      id: 3,
      title: 'What is express js? What is Nest JS ',
      content: 'Express.js is a web application framework for Node.js that offers a minimalist and flexible approach to building web applications and APIs. It is known for its simplicity and has a large ecosystem of middleware and plugins.NestJS, on the other hand, is a TypeScript-based framework that builds upon Express.js. It follows the modular and dependency injection principles and provides additional features and architectural patterns for building scalable and maintainable server-side applications. NestJS integrates seamlessly with TypeScript and is commonly used for building APIs and microservices.',
      author: 'Jane Smith',
      date: 'May 5, 2023',
    },
    {
      id: 2,
      title: 'What is MongoDB aggregate and how does it work',
      content: 'The MongoDB aggregate framework is a powerful tool used for performing complex data aggregation operations on collections. It operates on a collections documents through a series of stages applied in sequence. Common stages include filtering, grouping, sorting, projecting, and performing calculations. The aggregate framework allows for flexible data manipulation and aggregation, making it useful for tasks such as generating reports, statistical analysis, data summarization, and gaining insights from large datasets. By constructing an aggregation pipeline with the desired stages and parameters, MongoDB executes the pipeline and returns the resulting documents.',
      author: 'Jane Smith',
      date: 'May 5, 2023',
    },
    // Add more blogs as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
          <p className="text-gray-500 text-sm mb-2">
            By {blog.author} - {blog.date}
          </p>
          <p className="text-gray-800">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
