import React, { useState } from "react";
import { files } from "./data";

const FileComponent = ({ data, setData }) => {
  const [isExpanded, setIsExpanded] = useState({});

  const addNodeToList = (parentName) => {
    const name = prompt("Enter name");
    const updatedDataTree = (list) => {
      return list.map((node) => {
        if (node.name === parentName) {
          return {
            ...node,
            children: [
              ...node.children,
              { name: name, isFolder: true, children: [] },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updatedDataTree(node.children) };
        }
        return node;
      });
    };
    setData((prev) => updatedDataTree(prev));
  };

  const onHandleDelete = (nodeName) => {
    const updatedDataTree = (list) => {
      return list
        .filter((node) => node.name !== nodeName)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updatedDataTree(node.children) };
          }
          return node;
        });
    };
    setData((prev) => updatedDataTree(prev));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginLeft: "2rem",
        }}
      >
        {data.map((d) => (
          <div key={d.name}>
            {d.isFolder && (
              <span
                onClick={() =>
                  setIsExpanded((prev) => ({
                    ...prev,
                    [d.name]: !prev[d.name],
                  }))
                }
                style={{ cursor: "pointer" }}
              >
                {isExpanded?.[d.name] ? "-" : "+"}
              </span>
            )}
            <span>{d.name}</span>
            {d.isFolder && (
              <>
                <button
                  style={{ marginLeft: "0.5rem" }}
                  onClick={() => addNodeToList(d.name)}
                >
                  Add
                </button>
                <button onClick={() => onHandleDelete(d.name)}>Delete</button>
              </>
            )}
            {isExpanded?.[d.name] && d.children && (
              <FileComponent
                data={d.children}
                addNodeToList={addNodeToList}
                setData={setData}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const FileExplorer = () => {
  const [data, setData] = useState(files);
  return (
    <div>
      <h1>File Explorer</h1>
      {data.length > 0 && <FileComponent data={data} setData={setData} />}
    </div>
  );
};

export default FileExplorer;
