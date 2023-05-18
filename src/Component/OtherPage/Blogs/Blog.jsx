import React from 'react';

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      date: 'May 1, 2023',
    },
    {
      id: 2,
      title: 'Sed ut perspiciatis unde omnis',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
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
