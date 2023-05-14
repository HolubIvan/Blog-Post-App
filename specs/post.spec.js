const mongoose = require("mongoose");
const chai = require("chai");
const expect = chai.expect;

const Post = require("../models/post");

// Connect to MongoDB
before(async () => {
  await mongoose.connect("mongodb://localhost/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Drop database before each test
beforeEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

// Disconnect from MongoDB
after(async () => {
  await mongoose.disconnect();
});

describe("PostSchema", () => {
  it("should be invalid if title is missing", async () => {
    const post = new Post({
      description: "A post description",
      body: "Post body",
      author: "John Doe",
    });
    try {
      await post.validate();
      throw new Error("validation should have failed without title");
    } catch (err) {
      expect(err.name).to.equal("ValidationError");
      expect(err.errors.title).to.exist;
    }
  });

  it("should be valid with all required fields", async () => {
    const post = new Post({
      title: "A post title",
      description: "A post description",
      body: "Post body",
      author: "John Doe",
    });
    await post.validate();
  });

  it("should have default author as Anonymous if not provided", async () => {
    const post = new Post({
      title: "A post title",
      description: "A post description",
      body: "Post body",
    });
    await post.validate();
    expect(post.author).to.equal("Anonymus");
  });

  it("should have virtual publishedAt and publishedSince fields", async () => {
    const post = new Post({
      title: "A post title",
      description: "A post description",
      body: "Post body",
      author: "John Doe",
    });
    await post.validate();
    expect(post.publishedAt).to.exist;
    expect(post.publishedSince).to.exist;
  });
});
