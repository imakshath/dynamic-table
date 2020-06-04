import React from "react";
import "./App.scss";
import FileUploader from "./components/file-uploader/FileUploader";
import Input from "./components/input/Input";
import Table from "./components/table/Table";

function App() {
    const [delimiter, setDelimiter] = React.useState(",");
    const [numberOfLines, setNumberOfLines] = React.useState(2);
    const [content, setContent] = React.useState([]);

    const onCompleteHandler = (fileContent) => {
        setContent(fileContent);
    };

    return (
        <div className="App">
            <h2>Dynamic table</h2>
            <FileUploader onComplete={onCompleteHandler} />
            <div className="input-outer-wrapper">
                <Input
                    type="text"
                    onChange={(e) => setDelimiter(e.target.value)}
                    name="delimiter"
                    value={delimiter}
                    label="Delimiter"
                />
                <Input
                    type="number"
                    onChange={(e) => setNumberOfLines(e.target.value)}
                    name="numberOfLines"
                    value={numberOfLines}
                    label="Lines"
                />
            </div>
            <Table data={content} delimiter={delimiter} numberOfLines={numberOfLines} />
        </div>
    );
}

export default App;
