import { PostService } from "./05-dependency-b";
import {
  // LocalDataBaseService,
  // JsonDataBaseService,
  WebApiPostService,
} from "./05-dependency-c";

// Main
(async () => {
  // const localProvider = new LocalDataBaseService();
  // const jsonProvider = new JsonDataBaseService();
  const webProvider = new WebApiPostService();

  const postService = new PostService(webProvider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
