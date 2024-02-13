const blogs = [];

const createBlog = async (req, res) => {
  const { author_id, title, content } = req.body;

  if (!author_id || !title || !content) {
    return res.status(401).json({
      success: false,
      message: "Insufficient blog content provided",
    });
  }

  newBlog = {
    id: blogs.length + 1,
    author_id,
    title,
    content,
  };

  blogs.push(newBlog);

  console.log(blogs);

  return res.status(201).json({
    success: true,
    message: "Blog created successfully",
  });
};

const getAllBlogs = async (req, res) => {
  return res.status(201).json({
    success: true,
    message: "all blogs retrieved successfully",
    data: blogs,
  });
};

const author_blog = [];

const getAuthorBlogs = async (req, res) => {
  const author_id = req.author_id;

  for (const blog of blogs) {
    if (author_id === blog.author_id) {
      author_blog.push(blog);
    }
  }
  console.log(author_blog);

  return res.status(201).json({
    success: true,
    data: author_blog,
  });
};

module.exports = { createBlog, getAllBlogs, getAuthorBlogs };