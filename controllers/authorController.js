const authors = [];

const registerAuthor = async (req, res) => {
  const { author_id, author_name, author_email, author_password } = req.body;

  if (!author_id || !author_name || !author_email || !author_password) {
    return res.status(401).json({
      success: false,
      message: "No complete data is provided ",
    });
  }
  const newAuthor = {
    id: authors.length + 1,
    author_id,
    author_name,
    author_password,
  };

  authors.push(newAuthor);
  console.log(authors);

  return res.status(200).json({
    success: true,
    message: "New Author registerd successfully",
    data: newAuthor,
  });
};

module.exports = { registerAuthor };