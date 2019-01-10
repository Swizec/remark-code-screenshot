import expect from "expect";
import fetchMock from "fetch-mock";
import remark from "remark";

import codeScreenshot from "src/index";

describe("code blocks", () => {
    fetchMock.get(
        "glob:https://*screenshot-as-a-service-dev-screenshot-function*",
        "https://this.is.the.result.url"
    );

    it("converts code blocks into carbon.now.sh screenshots", done => {
        remark()
            .use(codeScreenshot)
            .process('```\nconst bla = "hello world";\n```', function(
                err,
                output
            ) {
                const result = output.contents;
                expect(result).toEqual("    https://this.is.the.result.url");
                done();
            });
    });
});
