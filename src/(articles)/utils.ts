import path from "path";

const BLOGPATH = path.join(process.cwd(), "src", "(articles)");
const FILEPATH = path.dirname(__filename);

export default BLOGPATH;
export { FILEPATH };
