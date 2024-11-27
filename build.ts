//@ts-ignore
import { minify } from "html-minifier-terser";
//@ts-ignore
import { promises } from "bun:fs";  // Bun's file system API

(async () => {
    try {
        const htmlInputPath = "./index.html";
        const jsInputPath = "./pub/main.js";
        const htmlOutputPath = "./pub/index.html";

        const jsContent: string = await promises.readFile(jsInputPath, "utf-8");
        const htmlContent: string = (await promises.readFile(htmlInputPath, "utf-8")).replace("//REPLACE:main.js//", jsContent);
        
        const minifiedHtml = await minify(htmlContent, {
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true
        });

        await promises.writeFile(htmlOutputPath, minifiedHtml, "utf-8");

        console.log(`\nMinified HTML has been saved to ${htmlOutputPath}`);
    } catch (error) {
        console.error("\nError during the HTML minification process:", error);
    }
})();