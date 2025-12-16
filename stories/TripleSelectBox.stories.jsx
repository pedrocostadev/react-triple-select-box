import TripleSelectBox from "../src";

export default {
  title: "TripleSelectBox",
  component: TripleSelectBox,
};

export const BasicExample = () => {
  const options = {
    left: ["Courgette", "Date", "Grape", "Garlic", "Fig", "Endive", "Fennel"],
    center: ["Mango", "Lemon", "Leek", "Guava", "Mushroom", "Melon"],
    right: [
      "Apple",
      "Orange",
      "Apricot",
      "Avocado",
      "Beetroot",
      "Broccoli",
      "Carrot",
      "Clementine",
    ],
  };

  return (
    <div className="App">
      <h3>React Triple Select Box Example</h3>
      <TripleSelectBox
        options={options}
        onChange={(options) => {
          console.log("onChange", options);
        }}
      />
    </div>
  );
};
BasicExample.storyName = "Basic example";

export const WithInitialSelection = () => {
  const options = {
    left: [
      { value: "left value", selected: true },
      { value: "left value 2", selected: false },
    ],
    center: [
      { value: "center value", selected: true },
      { value: "center value 2", selected: false },
    ],
    right: [
      { value: "right value", selected: false },
      { value: "right value 2", selected: false },
    ],
  };

  return (
    <div className="App">
      <h3>React Triple Select Box Example</h3>
      <TripleSelectBox
        options={options}
        titles={{
          left: "Left",
          center: "Center",
          right: "Right",
        }}
        onChange={(options) => {
          console.log("onChange", options);
        }}
      />
    </div>
  );
};
WithInitialSelection.storyName = "With initial selection";

export const WithCustomStyles = () => {
  const options = {
    left: ["React", "Vue", "Angular", "Svelte"],
    center: ["Node.js", "Deno", "Bun"],
    right: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  };

  const customStyles = `
    .custom-container {
      display: flex;
    }
    .custom-box-container {
      margin: 8px;
    }
    .custom-label {
      color: black;
      display: block;
      text-align: center;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: bold;
    }
    .custom-select {
      padding: 4px;
      border-width: 4px;
      border-style: solid;
      border-radius: 5px;
      border-color: #337ab7;
      background-color: #d9edf7;
      outline: none;
      height: 170px;
      width: 120px;
    }
    .custom-option {
      padding: 4px;
    }
    .custom-option:hover {
      background-color: #6199ca;
      border-radius: 3px;
      font-weight: bold;
      font-size: 120%;
      color: black;
    }
    .custom-option:focus,
    .custom-option:active,
    .custom-option:checked,
    .custom-option:checked:active:focus,
    .custom-option-selected {
      background: linear-gradient(rgb(148, 173, 255), rgb(91, 110, 196));
      font-weight: bold;
      border-radius: 3px;
    }
    .custom-control-container {
      display: flex;
      align-items: center;
    }
    .custom-button {
      font-size: 13px;
      padding: 4px;
      border-width: 2px;
      border-style: solid;
      border-radius: 5px;
      border-color: #2e6da4;
      width: 80%;
      margin: 4px;
      display: block;
      color: #fff;
      background-color: #337ab7;
    }
    .custom-button:focus {
      outline: 0;
    }
  `;

  return (
    <div className="App">
      <style>{customStyles}</style>
      <h3>Custom Styled Triple Select Box (Classic Theme)</h3>
      <TripleSelectBox
        options={options}
        titles={{
          left: "Frontend",
          center: "Runtime",
          right: "Database",
        }}
        classNames={{
          container: "custom-container",
          box: {
            container: "custom-box-container",
            label: "custom-label",
            select: "custom-select",
            selectOption: "custom-option",
            selectOptionSelected: "custom-option-selected",
          },
          boxController: {
            container: "custom-control-container",
            button: "custom-button",
          },
        }}
        onChange={(options) => {
          console.log("onChange", options);
        }}
      />
    </div>
  );
};
WithCustomStyles.storyName = "With custom styles";
