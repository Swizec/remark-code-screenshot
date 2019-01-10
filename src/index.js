import visit from "unist-util-visit";

async function getCodeScreenshot(src) {
    const codeType = "javascript",
        srcArg = btoa(src);

    const res = await fetch(
        `https://84wz7ux5rc.execute-api.us-east-1.amazonaws.com/default/screenshot-as-a-service-dev-screenshot-function?type=code&code=${srcArg}&codeType=${codeType}`
    );

    return res.text();
}

function codeScreenshot() {
    return tree =>
        new Promise(async (resolve, reject) => {
            const nodesToChange = [];
            visit(tree, "code", node => {
                nodesToChange.push({
                    node
                });
            });
            for (const { node } of nodesToChange) {
                try {
                    const url = await getCodeScreenshot(node.value);
                    node.value = url;
                } catch (e) {
                    console.log("ERROR", e);
                    return reject(e);
                }
            }

            resolve();
        });
}

export default codeScreenshot;
