# remark-code-screenshot

Remark plugin to convert code blocks into carbon.now.sh screenshots.

## Basic Usage

````javascript
import remark from 'remark'
import codeScreenshot from 'remark-code-screenshot'

const markdownInput = ["```
    import remark from 'remark'
    import codeScreenshot from 'remark-code-screenshot'

    const markdownInput = \"\"

    remark().use(codeScreenshot)
    .process(markdownInput, function (err, output) {
        console.log(output)
    })
```"]

remark()
    .use(codeScreenshot)
    .process(markdownInput, function (err, output) {
        console.log(output)
    });
````

Outputs something like this:

![]()
