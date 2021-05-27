import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import {
    config,
    mountinit,
} from "@masx200/markdown-reader/src/mark-down-reader";
Object.assign(config, {
    github_username: "masx200",
    github_repo: "javascript-tutorial",
    doctitle: "JavaScript 入门教程",
    subtitle: "Lightweight Markdown Documentation System",
    index: "README.md",
    summary: "summary.md",
});
mountinit();
