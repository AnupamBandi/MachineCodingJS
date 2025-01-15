import React, { useState } from "react";

const TodoApp = () => {
  const [items, setItems] = useState([]);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");

  const handleShowCreateTask = () => {
    setShowCreateTaskModal(true);
  };

  const handleTaskDesc = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSaveTaskInfo = () => {
    if (taskDescription.trim()) {
      const newItem = {
        id: Date.now(),
        description: taskDescription,
        isComplete: false,
        isEditMode: false, // initially false
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setTaskDescription("");
      setShowCreateTaskModal(false);
    }
  };

  const handleCancelTaskInfo = () => {
    setTaskDescription("");
    setShowCreateTaskModal(false);
  };

  const handleToggleCompletion = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const handleDeleteTask = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleStartEditing = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isEditMode: true } : item
      )
    );
  };

  const handleSaveEditInfo = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, description: taskDescription, isEditMode: false }
          : item
      )
    );
    setTaskDescription(""); // Clear the input after saving
  };

  const handleCancelEdit = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isEditMode: false } : item
      )
    );
    setTaskDescription(""); // Clear the input after canceling
  };

  return (
    <div
      style={{
        height: "700px",
        width: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <h1>To Do List</h1>

      <button disabled={showCreateTaskModal} onClick={handleShowCreateTask}>
        Create task
      </button>
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ display: "flex", gap: "3px" }}>
            <div
              style={{
                textDecoration: item.isComplete ? "line-through" : "none",
              }}
            >
              {item.isEditMode ? (
                <div>
                  <input
                    type="text"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                  <button onClick={() => handleCancelEdit(item.id)}>Cancel</button>
                  <button onClick={() => handleSaveEditInfo(item.id)}>Save</button>
                </div>
              ) : (
                item.description
              )}
            </div>
            <button onClick={() => handleToggleCompletion(item.id)}>
              {item.isComplete ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDeleteTask(item.id)}>Delete</button>
            <button onClick={() => handleStartEditing(item.id)}>Edit</button>
          </div>
        ))}
      </div>

      {showCreateTaskModal && (
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: "2rem" }}>
            <label htmlFor="input">Task Input</label>
            <input type="text" value={taskDescription} onChange={(e) => handleTaskDesc(e)} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "brown",
              padding: "1rem 0",
            }}
          >
            <button onClick={handleCancelTaskInfo}>Cancel</button>
            <button onClick={handleSaveTaskInfo}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
